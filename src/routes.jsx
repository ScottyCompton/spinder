import React from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './views/Home';
import LoginContainer from './views/Login';
import DemoContainer from './views/Demo';
import ShopContainer from './views/Shop';
import { loadState } from './session/localStorage';

const userSession = loadState();
const loggedIn = userSession != undefined ?  userSession.userId != '' : false;

const HomeComponentToLoad = loggedIn ? ShopContainer : HomeContainer;

const Routes = () => (
    <div className="app-content">
        <Route exact={true} path="/" component={HomeComponentToLoad} />
        <Route exact={true} path="/login" component={LoginContainer} />
        <Route exact={true} path="/demo" component={DemoContainer} />
        <Route exact={true} path="/shop" component={ShopContainer} />
    </div>

);

export default Routes;
