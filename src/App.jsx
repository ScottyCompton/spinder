import React, { Component } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles.scss';
import Layout from './components/Layout';
import Routes from './routes';

/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)
*/



class App extends Component {
    render() {
        return (
            <Router>
               <Layout >
                {this.props.children}
               </Layout>
            </Router>
        );
    }
}


export default App;