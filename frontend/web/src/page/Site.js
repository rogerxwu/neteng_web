import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import useWindowDimensions from '../component/Hooks/useWindowDimension';
import D3Graph from '../component/Graph/D3Graph';
import Selector from '../component/Selector';





export default function PageSite() {
    const [site, setSite] = useState()
    const onChange = (e) => {
        console.log(e)
        //setSite(e.target.value);
    };

    return (
        <>
            <SiteSelector onChange={onChange()} value={site}/>
            <SiteTopology />
        </>

    );
};

const SiteSelector = () => {
    const query_site = gql`
        query {
            sites {
                id
                name
            }
        }
    `

    const { loading, error, data } = useQuery(query_site);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    console.log('data', data)
    const options = [];

    for (let i in data.sites) {
        options.push({
            value: data.sites[i].id,
            text: data.sites[i].name,
        })
    }

    return <Selector options={options} />
}

const SiteTopology = () => {
    const { height, width } = useWindowDimensions()
    const site_id = "42568d63-0f8c-453f-8d13-1355f677af4e"
    const query_device_in_site = gql`
        query {
            sites(id:"9d86e520-b1ee-4bc2-aaa3-73a831261a5c") {
                devices{
                id
                name
                interfaces{
                    id
                    name
                    connected_interface{
                    id
                    name
                    device{
                        id
                        name
                    }
                    }  
                }
                }
            }
        }
        `;

    const { loading, error, data } = useQuery(query_device_in_site);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const graph_data = {
        nodes: [],
        links: [],
    };
    console.log(data.sites[0].devices)

    function checkDeviceId(device_id, devices) {
        for (let i in devices) {
            if (device_id === devices[i].id) {
                return true
            }
        }
        return false

    }
    function setNodePosition(device_name) {
        var edge_regex = /edge/;
        var leaf_regex = /leaf/;
        var edge_result = edge_regex.test(device_name);
        var leaf_result = leaf_regex.test(device_name)
        if (edge_result) {
            return [null, 200]
        } else {
            return [null, 400]
        }
    }
    if (data.sites[0].devices) {
        // add nodes
        for (let i in data.sites[0].devices) {
            let device = data.sites[0].devices[i]
            // id = device.id
            // name = device.name
            let x = setNodePosition(device.name)[0]
            let y = setNodePosition(device.name)[1]
            console.log(device.name + x + y)
            graph_data.nodes.push({
                id: device.id,
                name: device.name,
                fx: x,
                fy: y,
            })
            if (device.interfaces) {
                for (let j in device.interfaces) {
                    let device_interface = device.interfaces[j]
                    // source_device_id = device.id
                    // target_device_id = device_interface.connected_interface.device.id
                    // when target device connected interface existing and belongs to nodes data set.
                    if (device_interface.connected_interface && checkDeviceId(device_interface.connected_interface.device.id, data.sites[0].devices)) {
                        graph_data.links.push({
                            source: device.id,
                            target: device_interface.connected_interface.device.id,
                        })
                    }

                }


            }
        }
    }

    return <D3Graph data={graph_data} height={height} width={width} />
}









