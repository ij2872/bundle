import React from 'react';
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <h1>Bundle</h1>
            <Link to="/bundle">Potato</Link>
        </div>
    );
}

export default Home;