import React, { useEffect, useState } from 'react';
import useWindowDimensions from "../component/Hooks/useWindowDimension";
import NetworkTopologyGraph from "../component/NetworkTopology/Graph";

export default function PageHome() {
    const { height, width } = useWindowDimensions()

    const [sites, setSites] = useState([]);

    useEffect(() => {
        const fetchSites = async () => {
            try {
                const response = await fetch('https://demo.nautobot.com/api/graphql/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        query: `
                            query {
                                sites {
                                    id
                                    name
                                }
                            }
                            `
                    }),
                });

                const result = await response.json();
                setSites(result.data.sites);
            } catch (error) {
                console.error('Error fetching sites:', error);
            }
        };

        fetchSites();
    }, []);

    return <>
        <NetworkTopologyGraph height={height} width={width} />
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
    </>

}


