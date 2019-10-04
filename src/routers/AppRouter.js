import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {createBrowserHistory} from 'history';
import HomeContainer from '../components/HomeContainer';
import Login from '../components/Login';
import Shop from '../components/Shop';
import Categories from '../components/Categories';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateAccount from '../components/CreateAccount';
import EditAccount from '../components/EditAccount';
import AuthenticatedRoute from './AuthenticatedRoute';
import GuestRoute from './GuestRoute';

const AppRouter = (props) => {
    
    const history = createBrowserHistory();

    return (
        <Router history={history} >
            <Route render={({location}) => {
                return (
                    <Container className="app nopadding">
                        <Header />                
                        <div className="app-content">
                            <Switch location={location}>
                                <GuestRoute exact={true} path="/" component={HomeContainer} />
                                <GuestRoute exact={true} path="/login" component={Login} />
                                <GuestRoute path="/create-account" component={CreateAccount} />
                                <AuthenticatedRoute path="/edit-account" component={EditAccount} />
                                <AuthenticatedRoute exact={true} path="/shop" component={Shop} />
                                <AuthenticatedRoute exact={true} path="/cats" component={Categories} />        
                                <AuthenticatedRoute exact={true} path="/cart" component={Cart} />        
                            </Switch>
                        </div>
                        <Footer />
                    </Container>
                )}}
            >
            </Route>
        </Router>);

}

export default AppRouter




