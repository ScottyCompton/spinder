import React from 'react';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container,Row,Col} from 'react-bootstrap';

const Layout = () => (
    <Container>
        <Row>
            <Col>
                <Header />
            </Col>
        </Row>
        <Row>
            <Col>
                <div id="main"></div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Footer />
            </Col>
        </Row>
    </Container>
)
export default Layout;