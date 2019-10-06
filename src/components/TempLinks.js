import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { doClearUserSession } from '../actions/user-session';
import {history} from '../routers/AppRouter';

const TempLinks = (props) => {

    const doLogout = (e) => {
        e.preventDefault();
        props.doClearUserSession();
        history.push('/');

    }

    return (
        <div>
        <Link className="text-success" to="/">Home</Link> | 
        <Link className="text-success" to="/login">Login</Link> |
        <Link className="text-success" to="/shop">Shop</Link> |
        <Link className="text-success" to="/cats">Categories</Link> |
        <Link onClick={doLogout} className="text-success" to="#logout">Logout</Link>
    </div>
    );
}



const mapDispatchToProps = (dispatch) => {
    return {
        doClearUserSession: () => {dispatch(doClearUserSession())}
    }
}


export default connect(undefined, mapDispatchToProps)(TempLinks)
