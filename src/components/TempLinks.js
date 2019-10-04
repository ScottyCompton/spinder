import React from 'react';
import {Link} from 'react-router-dom';


const TempLinks = () => {
    return (
        <div>
        <Link className="text-success" to="/">Home</Link> | 
        <Link className="text-success" to="/login">Login</Link> |
        <Link className="text-success" to="/shop">Shop</Link> |
        <Link className="text-success" to="/cats">Categories</Link>
    </div>
    );
}

export default TempLinks;
