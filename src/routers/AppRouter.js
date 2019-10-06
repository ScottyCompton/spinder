import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {createBrowserHistory} from 'history';
import HomeContainer from '../components/HomeContainer';
import Login from '../components/Login';
import Shop from '../components/Shop';
import Categories from '../components/Categories';
import Cart from '../components/Cart';
import CreateAccount from '../components/CreateAccount';
import EditAccount from '../components/EditAccount';
import AuthenticatedRoute from './AuthenticatedRoute';
import GuestRoute from './GuestRoute';
import StandardRoute from './StandardRoute';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export const history = createBrowserHistory();

const AppRouter = (props) => {

    return (
        <Router history={history} >
            <Route render={({location}) => {
                return (                       
                    <TransitionGroup className="RTG">
                    <CSSTransition 
                        key={location.key}
                        timeout={1000}
                        classNames="fade"
                    >                                                        
                        <div className="page app-content">
                            <Switch location={location}>
                                <StandardRoute exact={true} path="/" component={HomeContainer} />
                                <StandardRoute exact={true} path="/login" component={Login} altComponent={Shop} />
                                <StandardRoute path="/create-account" component={CreateAccount} />
                                <StandardRoute path="/edit-account" component={EditAccount} />
                                <StandardRoute exact={true} path="/shop" component={Shop} />
                                <StandardRoute exact={true} path="/cats" component={Categories} />        
                                <StandardRoute exact={true} path="/cart" component={Cart} />        
                            </Switch>
                        </div>   
                        </CSSTransition>
                        </TransitionGroup>                                                    
                )}}
            >
            </Route>
        </Router>);

}

export default AppRouter




