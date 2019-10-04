import React from 'react';
import AccountForm from './AccountForm';
import {Row, Col, Container, Button } from 'react-bootstrap';

const EditAccount = () => {
    return (
        <Container className="account create-account nopadding">
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
                <AccountForm />
            </Col>
        </Row>
        </Container>
    )

}

export default EditAccount