import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';

export const GuestRoute = ({ 
    isAuthenticated, 
    component: Component,
    altComponent: AltComponent,
    ...rest
}) => (
                           
    <Container className="app nopadding bg-light">
    <Header />         
    {!isAuthenticated &&
        <Route {...rest} component={(props) => (
                    <Component {...props} />
        )} />
    }

    {isAuthenticated &&
        <Route {...rest} component={(props) => (
                    <AltComponent {...props} component={props.altComponent} />
        )} />
    }
    <Footer />
    </Container>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.userSession.userId !== ''
});

export default connect(mapStateToProps)(GuestRoute);