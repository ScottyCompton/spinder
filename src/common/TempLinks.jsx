import React from 'react';
import {Link} from 'react-router-dom';


const TempLinks = () => {
    return (
        <div>
        <Link className="text-success" to="/">Home Page</Link> | 
        <Link className="text-success" to="/login">Login Page</Link> |
        <Link className="text-success" to="/demo">Demo Page</Link> |
        <Link className="text-success" to="/shop">Shopping Page</Link> |
        <Link className="text-success" to="/cats">Categories Page</Link>
    </div>
    );
}

export default TempLinks;
