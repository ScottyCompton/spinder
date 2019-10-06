import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';

export const StandardRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
                           
    <Container className="app nopadding bg-light">
    <Header />         
        <Route {...rest} component={(props) => (
                    <Component {...props} />
        )} />
    <Footer />
    </Container>
);


export default StandardRoute;