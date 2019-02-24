import React, { Component } from "react";
import {Row,Col,Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Routes from '../../../routes';


class LayoutLapDesk extends Component {


    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Routes />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>                           
            </Container>
        );
    }
}

export default LayoutLapDesk;