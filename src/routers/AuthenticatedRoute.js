import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const AuthenticatedRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
                       
    <Container className="app nopadding bg-light">
        <Header />                 
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            )} />
        <Footer />
    </Container>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.userSession.userId !== ''
});

export default connect(mapStateToProps)(AuthenticatedRoute);