import React, { Component } from "react";
import 'normalize.css/normalize.css';
import './styles.scss';
import Layout from './components/Layout';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
    render() {
        return (
            <div>
                <Layout />
            </div>
        );
    }
}


export default App;