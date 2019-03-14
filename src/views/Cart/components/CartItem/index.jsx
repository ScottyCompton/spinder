import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Img from 'react-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faTimes, faStar } from '@fortawesome/free-solid-svg-icons'
import Config from '../../../../../config';
import styles from './styles.scss';
import {FormControl} from 'react-bootstrap';


class CartItem extends React.Component {
    constructor(props) {
        super(props);
        const productImgRoot = Config.IMG_PRODUCT_ROOT;
        const assetsImgRoot = Config.IMG_ASSETS_ROOT;
        this.state = {
            cartItemId: this.props.cartItemData.cart_item_id,
            productImg: this.props.cartItemData.product_images.length != 0 ? productImgRoot + this.props.cartItemData.product_images[0].product_image : assetsImgRoot + 'no-product-image.jpg',
            productId: this.props.cartItemData.product_id,
            productName: this.props.cartItemData.product_name,
            productDesc: this.props.cartItemData.product_desc,
            qty: this.props.cartItemData.qty,
            price: this.props.cartItemData.price.toFixed(2),
            toBuy: this.props.cartItemData.toBuy,
            subTotal: this.props.cartItemData.sub_total.toFixed(2)
        }
        this.selectQty = this.selectQty.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.moveItemToBuy = this.moveItemToBuy.bind(this);
        this.moveItemFromBuy = this.moveItemFromBuy.bind(this);
    }

    selectQty(e) {
        const newQty = e.target.value;
        this.props.evtHandlers.handleSelectNewQuantity(this.props.cartItemId, newQty);
        //console.log(this.props);
    }

    removeItem() {
        //handleClickRemoveItem
    }

    moveItemToBuy() {
        //handleClickMoveItemToBuy
    }

    moveItemFromBuy() {
        // handleClickMoveItemFromBuy
    }


    render() {
        //const { selectedOpt } = this.state;
        const selectOpts = [];
        for(var i = 1; i <= 10; i++) {
            selectOpts.push(<option value={i} key={i}>{i}</option>)
        }
        
        //console.log(this.state.qty);

        return (
            <div className="cart-item">
                <Container fluid>
                    <Row>
                        <Col xs={1}>
                            <div className="cartItemImg"><Img src={this.state.productImg} className="img-fluid" /></div>
                        </Col>
                        <Col xs={5}>
                            <div className="cartItemDesc">
                                <h6>{this.state.productName}</h6>
                                <span className="text-muted">{this.state.productDesc}</span>
                            </div>
                        </Col>
                        <Col xs={1} className="nopadding">
                            <h5 className="cartItemPrice bg-primary">${this.state.price}</h5>
                        </Col>
                        <Col xs={2} className="nopadding">
                            <div className="cartItemQty">
                                <Form.Control className="form-control form-control-sm" as="select" onChange={this.selectQty}>
                                {selectOpts}
                                </Form.Control>
                            </div>
                        </Col>
                        <Col xs={1} className="nopadding">
                            <h5 className="cartItemSubTotal">${this.state.subTotal}</h5>
                        </Col>                     
                        <Col xs={2}>
                            <div className="cartItemOptions float-right">
                                {this.state.toBuy && 
                                    <button className="cart-item-btn btn btn-secondary" onClick={this.moveItemFromBuy}>
                                        <FontAwesomeIcon icon={faStar} size="1x" />
                                    </button> 
                                }  
                                {!this.state.toBuy && 
                                    <button className="cart-item-btn btn btn-secondary" onClick={this.moveItemToBuy}>
                                        <FontAwesomeIcon icon={faDollarSign} size="1x" />
                                    </button> 
                                }                                                             
                                    <button className="cart-item-btn btn btn-secondary" onClick={this.removeItem}>
                                        <FontAwesomeIcon icon={faTimes} size="1x" />
                                    </button> 
                                                              
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default CartItem;