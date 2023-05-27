import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

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
const GET_SITES = gql`
  query {
    sites {
      id
      name
    }
  }
`;

const SitesInfo = () => {
    const { loading, error, data } = useQuery(GET_SITES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { sites } = data;

    return (
        <div>
            <h2>Sites Information</h2>
            <ul>
                {sites.map(site => (
                    <li key={site.id}>
                        <strong>Name:</strong> {site.name}
                        {/* Render additional site information */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Apollo = () => (
    <ApolloProvider client={client}>
        <SitesInfo />
    </ApolloProvider>
);

export default Apollo;