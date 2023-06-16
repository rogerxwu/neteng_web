import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import useWindowDimensions from '../component/Hooks/useWindowDimension';
import NetworkTopologyGraph from '../component/NetworkTopology/Graph';


// Configure the Apollo Client
const client = new ApolloClient({
    uri: 'https://demo.nautobot.com/api/graphql/',
    headers: {
        'Authorization': `Token aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    cache: new InMemoryCache(),
});

// GraphQL query to fetch site information
const query_string = gql`
  query {
      	devices {
          name
          id
        } 
      	cables{
          termination_a_id
          termination_b_id
          status{
            name
          }
        }
        interfaces{
          id
        	device {
        	  id
        	}
      	}
    }
`;



const SitesInfo = () => {
    const { height, width } = useWindowDimensions()
    const { loading, error, data } = useQuery(query_string);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const graph_data = {
        nodes: [],
        links: [],
    };
    //console.log(data)
    for (let device in data.devices) {
        graph_data.nodes.push({
            id: data.devices[device].id,
            name: data.devices[device].name,
        })
    }
    function interface2device (termination_id) {
        // data.interfaces
        for (let i in data.interfaces) {
            if (termination_id === data.interfaces[i].id){
                return data.interfaces[i].device.id
            } 
        }
    }
    for (let cable in data.cables) {
        // if termination id is in interfaces, return its hostname
        let termination_a_device_id = interface2device(data.cables[cable].termination_a_id)
        let termination_b_device_id = interface2device(data.cables[cable].termination_b_id)
        if (termination_a_device_id && termination_b_device_id) {
            graph_data.links.push({
                source: termination_a_device_id,
                target: termination_b_device_id,
            })
        }
        
    }

    console.log(graph_data)
    return (
        <NetworkTopologyGraph height={height} width={width} data={graph_data}/>
    );
};

const Apollo = () => (
    <ApolloProvider client={client}>
        <SitesInfo />
    </ApolloProvider>
);

export default Apollo;