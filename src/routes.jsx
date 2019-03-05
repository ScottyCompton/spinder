import React from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './views/Home';
import LoginContainer from './views/Login';
import DemoContainer from './views/Demo';
import ShopContainer from './views/Shop';



const Routes = () => (
    <div className="app-content">
        <Route exact={true} path="/" component={HomeContainer} />
        <Route exact={true} path="/login" component={LoginContainer} />
        <Route exact={true} path="/demo" component={DemoContainer} />
        <Route exact={true} path="/shop" component={ShopContainer} />
    </div>

);

export default Routes;
