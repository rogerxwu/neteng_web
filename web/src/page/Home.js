import React from 'react';
import { Link } from 'react-router-dom';



export default function PageHome() {


    return (
        <div style={{display:'grid', }}>
            <h1>Home Page</h1>
            <Link to="/topology/site">Go to Site Page</Link>
            <Link to="/topology/backbone">Go to BackBone Page</Link>
        </div>
    );
};










