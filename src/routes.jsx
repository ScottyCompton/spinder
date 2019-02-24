import React from 'react';
import {Route} from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import Settings from './views/Settings';

const Routes = () => (
    <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/shop" component={Shop} />        
        <Route path="/settings/" component={Settings} />
    </div>

);

export default Routes;
