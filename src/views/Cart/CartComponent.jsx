import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartItem from './components/CartItem';
import './styles.scss';
import shortid from 'shortid';

class CartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItemsToBuy: this.props.cartContents.filter((cartItem) => {
                return cartItem.toBuy === true;
            }),
            cartItemsNotToBuy: this.props.cartContents.filter((cartItem) => {
                return cartItem.toBuy === false;
            })
        }
    }

    render() {
        return (
            <Container fluid className="cart nopadding">
                <Row>
                    <Col xs={12}>
                    <div className="page-container">

                        <div className="content-container">
                            <div>
                                <h3>Shit You're Gonna Buy</h3>
                            </div>
                            <div className="cart-items cart-tobuy">
                                {this.state.cartItemsToBuy.map((cartItem) => {
                                    return <CartItem key={shortid.generate()} cartItemData={cartItem} evtHandlers={this.props.cartItemEventHandlers} />
                                })}                           
                            </div>
                            <div className="cart-items cart-not-tobuy">
                            <div>
                                <h3>Shit You're Not Gonna Buy</h3>
                            </div>
                            {this.state.cartItemsNotToBuy.map((cartItem) => {
                                return <CartItem key={shortid.generate()} cartItemData={cartItem} evtHandlers={this.props.cartItemEventHandlers} />
                            })}                           
                        </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        );        
    }
}


export default CartComponent;