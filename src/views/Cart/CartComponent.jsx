import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartItem from './components/CartItem';
import './styles.scss';
import shortid from 'shortid';
import Config from '../../../config';
class CartComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const _HARDCODED_TAX_RATE = 0.07875;

        const cartItemsToBuy = this.props.cartContents.filter((cartItem) => {
            return cartItem.toBuy === true;
        });
        
        const cartItemsNotToBuy = this.props.cartContents.filter((cartItem) => {
            return cartItem.toBuy === false;
        });
        
        const cartSubTotal = cartItemsToBuy.map((item) => {
            return item.sub_total;
        }).reduce((ttl, num) => { return ttl + num}).toFixed(2);

        // hard-coded for the moment...
        const cartSalesTax = (cartSubTotal * _HARDCODED_TAX_RATE).toFixed(2);

        const cartShipping = cartItemsToBuy.map((item) => {
            return item.weight * item.qty;
        }).reduce((ttl, num) => { return ttl + num * Config.SHIP_RATE_PER_LB}).toFixed(2);

        const cartTotal = (parseFloat(cartShipping) + parseFloat(cartSalesTax) + parseFloat(cartSubTotal)).toFixed(2);


        return (
            <Container fluid className="cart nopadding">
                <Row>
                    <Col xs={12} xl={10} className="offset-xl-1">
                    <div className="page-container">

                        <div className="content-container">

                            {cartItemsToBuy.length != 0 &&
                            <div className="cart-items cart-tobuy">
                                <div>
                                   <h4>Cart Contents</h4>
                                 </div>  
                                {cartItemsToBuy.map((cartItem) => {
                                    return <CartItem key={shortid.generate()} cartItemData={cartItem} evtHandlers={this.props.cartItemEventHandlers} />
                                })}                           
                            </div>
                            }
                            
                            <div className="cart-items-summary">
                                <Row>
                                    <Col xs={3}>
                                        <Container fluid>
                                        <Row>
                                            <Col xs={12} className="bg-primary">BILL TO:</Col>
                                        </Row>
                                        </Container>
                                    </Col>
                                    <Col sm={1} xs={0}></Col>
                                    <Col xs={3}>
                                    <Container fluid>
                                    <Row>
                                        <Col xs={12} className="bg-primary">SHIP TO:</Col>
                                    </Row>
                                    </Container>                                    
                                    </Col>
                                    <Col sm={1} xs={0}></Col>
                                    <Col xs={4}>
                                        <Container fluid>
                                        <Row>
                                            <Col xs={8}><div className="float-right">subtotal:</div></Col>
                                            <Col xs={4}><div className="float-right">${cartSubTotal}</div></Col>
                                        </Row>

                                        <Row>
                                            <Col xs={8}><div className="float-right">sales tax:</div></Col>
                                            <Col xs={4}><div className="float-right">${cartSalesTax}</div></Col>
                                        </Row>

                                        <Row>
                                            <Col xs={8}><div className="float-right">shipping:</div></Col>
                                            <Col xs={4}><div className="float-right">${cartShipping}</div></Col>
                                        </Row>
                                        <Row><Col xs={12}>&nbsp;</Col></Row>
                                        <Row className="bg-primary">
                                            <Col xs={8}><h5>TOTAL:</h5></Col>
                                            <Col xs={4}><h5 className="float-right">${cartTotal}</h5></Col>
                                        </Row>                                        
                                        </Container>
                                    </Col>
                                </Row>
                            </div>


                            {cartItemsNotToBuy.length != 0 &&
                            <div className="cart-items cart-not-tobuy">
                            <div>
                                <h4>Saved for later</h4>
                            </div>
                            
                            {cartItemsNotToBuy.map((cartItem) => {
                                return <CartItem key={shortid.generate()} cartItemData={cartItem} evtHandlers={this.props.cartItemEventHandlers} />
                            })}                           
                            </div>
                            }
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        );        
    }
}


export default CartComponent;