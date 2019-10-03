import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.scss';
import TempLinks from '../../common/TempLinks'; // just for moving around during dev - remove later


function LoginComponent({
    // all these props/methods are passed in from LoginContainer (index.js)

    handleSubmit,           // a method for handling the form submit
    handleFieldChange,      // a method for handling the form field change
    loginErrors,            // the current value of login errors (if any)
    email,                  // current value for the user email field
    password,               // current value for the user password field
    isLoading               // true/false to show is loading message
}) {

    const message = isLoading ? "Loading..." : loginErrors != "" ? loginErrors : "";

    return (
        <div className="login-form">
            <Container fluid>
                <Row>
                    <Col className="page-title">
                        <h4>Welcome to Spinder! Login below to get started spending.</h4>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} md={3} sm={2} xs={0}></Col>
                    <Col lg={4} md={6} sm={8} xs={12}>
                        <div className="login-outer">
                            <Form onSubmit={e => handleSubmit(e, email, password)}>
                            <Form.Group>
                                <div className="start-here text-secondary">Are you a new Spinder? <Link to="/">Start Here :-)</Link></div>
                                <div><Form.Control type="email" id="email" value={email} onChange={e => handleFieldChange(e)} placeholder="Account Email Address" required /></div>
                                <div><Form.Control type="password" id="password" value={password} onChange={e => handleFieldChange(e)} placeholder="Account Password" required /></div>
                                <div><Link to="/">Forget your password?</Link><Button variant="primary" type="submit" disabled={isLoading} className="float-right">Login</Button></div>
                            </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default LoginComponent;