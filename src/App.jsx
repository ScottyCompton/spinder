import React, { Component } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Row,Col,Container} from 'react-bootstrap';
import 'normalize.css/normalize.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Routes from './routes';
import styles from './common/_themes/superhero-bootstrap.min.css';
import './styles.scss';


class App extends Component {
    render() {
        return (
            <Router>
                
                <Container className="app nopadding">
                    <Header />
                    <Routes />
                    <Footer />
                </Container>
            </Router>
        );
    }
}


export default App;