import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {createBrowserHistory} from 'history';
import HomeContainer from '../components/HomeContainer';
import LoginContainer from '../views/Login';
import DemoContainer from '../views/Demo';
import Shop from '../components/Shop';
import CategoriesContainer from '../views/Categories';
import CartContainer from '../views/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loadState } from '../localStorage';

const userSession = loadState();
export const history = createBrowserHistory();

const loggedIn = userSession != undefined ?  userSession.userId != '' : false;
const HomeComponentToLoad = loggedIn ? Shop : HomeContainer;

const AppRouter = (props) => (

    <Router history={history} >
        <Route render={({location}) => {
            return (
                <Container className="app nopadding">
                    <Header />                
                    <div className="app-content">
                    <Switch location={location}>
                            <Route exact={true} path="/" component={HomeComponentToLoad} />
                            <Route exact={true} path="/login" component={LoginContainer} />
                            <Route exact={true} path="/demo" component={DemoContainer} />
                            <Route exact={true} path="/shop" component={Shop} />
                            <Route exact={true} path="/cats" component={CategoriesContainer} />        
                            <Route exact={true} path="/cart" component={CartContainer} />        
                    </Switch>
                    </div>
                    <Footer />
                </Container>
            )}}
        >
        </Route>
    </Router>
)


export default AppRouter;







// import React from 'react';
// import {Route} from 'react-router-dom';
// import HomeContainer from '../views/Home';
// import LoginContainer from '../views/Login';
// import DemoContainer from '../views/Demo';
// import ShopContainer from '../views/Shop';
// import CategoriesContainer from '../views/Categories';
// import CartContainer from '../views/Cart';
// import { loadState } from '../localStorage';

// const userSession = loadState();
// const loggedIn = userSession != undefined ?  userSession.userId != '' : false;

// const HomeComponentToLoad = loggedIn ? ShopContainer : HomeContainer;

// const AppRouter = () => (
//     <Router>
                
//     <Container className="app nopadding">
//         <Header />
//         <div className="app-content">
//             <Route exact={true} path="/" component={HomeComponentToLoad} />
//             <Route exact={true} path="/login" component={LoginContainer} />
//             <Route exact={true} path="/demo" component={DemoContainer} />
//             <Route exact={true} path="/shop" component={ShopContainer} />
//             <Route exact={true} path="/cats" component={CategoriesContainer} />        
//             <Route exact={true} path="/cart" component={CartContainer} />        
//         </div>
//         <Footer />
//     </Container>
// </Router>
// );

// export default AppRouter;
