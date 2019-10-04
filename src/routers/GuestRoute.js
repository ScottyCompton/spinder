import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const GuestRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <div className="page">
        <Route {...rest} component={(props) => (
            !isAuthenticated ? (
                    <Component {...props} />
            ) : (
                    <Redirect to="/shop" />
            )
        )} />
    </div>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.userSession.userId !== ''
});

export default connect(mapStateToProps)(GuestRoute);