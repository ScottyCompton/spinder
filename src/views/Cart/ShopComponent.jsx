import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.scss';

function CartComponent({
    userId,
    displayName
    
}) {
    return (
        <Container fluid className="shop nopadding">
            <Row>
                <Col xs={12} sm={10} md={8} className="offset-sm-1 offset-md-2">
                <div className="page-container">
                    <div className="title-container">
                        <h3>This is the title</h3>
                    </div>
                    <div className="content-container">
                        this is the content
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CartComponent