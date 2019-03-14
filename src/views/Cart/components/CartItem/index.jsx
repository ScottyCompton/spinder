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
            subTotal: this.props.cartItemData.sub_total.toFixed(2),
            smallComponent: false
        }
        this.selectQty = this.selectQty.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.moveItemToBuy = this.moveItemToBuy.bind(this);
        this.moveItemFromBuy = this.moveItemFromBuy.bind(this);
    }

  loadComponent() {
      this.setState({
          smallComponent: window.innerWidth < 768
      })
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.loadComponent();
    window.addEventListener("resize", this.loadComponent.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.loadComponent.bind(this));
  }

    selectQty(e) {
        const newQty = parseInt(e.target.value);
        this.props.evtHandlers.handleSelectNewQuantity(this.state.cartItemId, newQty);
    }

    removeItem() {
        this.props.evtHandlers.handleClickRemoveItem(this.state.cartItemId);
    }

    moveItemToBuy() {
        this.props.evtHandlers.handleClickMoveItemToBuy(this.state.cartItemId);
    }

    moveItemFromBuy() {
        this.props.evtHandlers.handleClickMoveItemFromBuy(this.state.cartItemId);
    }


    render() {

        const selectOpts = [];
        for(var i = 1; i <= 10; i++) {
            selectOpts.push(<option value={i} key={i}>{i}</option>)
        }
    
        const smallSizecomponent = (
            
           
            <div className="cart-item">
            <Container fluid>
                <Row>
                    <Col xs={9} className="nopadding-xs">
                        <div className="cartItemDesc">
                            <h6>{this.state.productName}</h6>
                        </div>                    
                    </Col>
                    <Col xs={3}>
                    {this.state.toBuy && 
                        <h5 className="cartItemSubTotal"><span>${this.state.subTotal}</span></h5>
                    }
                    </Col>
                    <Col xs={2} className="nopadding-sm">
                        <div className="cartItemImg"><Img src={this.state.productImg} className="img-fluid" /></div>
                    </Col>
                    <Col xs={3}><h5 className="cartItemPrice bg-primary"><span>${this.state.price}</span></h5></Col>
                    <Col xs={4} className="nopadding-xs">
                    <div className="cartItemQty">
                        {this.state.toBuy && <Form.Control value={this.state.qty} className="form-control form-control-sm" as="select" onChange={this.selectQty}>
                        {selectOpts}
                        </Form.Control>}
                        </div>                    
                    </Col>
                    
                    <Col xs={3} className="nopadding-xs">
                        <div className="cartItemOptions">
                        {this.state.toBuy && 
                            <button className="cart-item-btn cart-item-notbuy btn btn-secondary" onClick={this.moveItemFromBuy}>
                                <FontAwesomeIcon icon={faStar} size="1x" />
                            </button> 
                        }

                        {!this.state.toBuy && 
                            <button className="cart-item-btn cart-item-tobuy btn btn-secondary" onClick={this.moveItemToBuy}>
                                <FontAwesomeIcon icon={faDollarSign} size="1x" />
                            </button> 
                        }                                                             
                            <button className="cart-item-btn cart-item-remove btn btn-secondary" onClick={this.removeItem}>
                                <FontAwesomeIcon icon={faTimes} size="1x" />
                            </button> 
                                       
                        </div>
                    </Col>
                    
                    
                </Row>
            </Container>
            
        </div>
        );
        

        const stdSizeComponent = (
            
                <div className="cart-item">
                <Container fluid>
                    <Row>
                        <Col sm={1} className="nopadding-sm">
                            <div className="cartItemImg"><Img src={this.state.productImg} className="img-fluid" /></div>
                        </Col>
                        <Col sm={5}>
                            <div className="cartItemDesc">
                                <h6>{this.state.productName}</h6>
                                <span className="text-muted">{this.state.productDesc}</span>
                            </div>
                        </Col>
                        
                        <Col sm={1} className="nopadding">
                            <h5 className="cartItemPrice bg-primary"><span>${this.state.price}</span></h5>
                        </Col>
                        <Col sm={2} className="nopadding">
                            <div className="cartItemQty">
                              {this.state.toBuy && <Form.Control value={this.state.qty} className="form-control form-control-sm" as="select" onChange={this.selectQty}>
                                {selectOpts}
                                </Form.Control>}
                            </div>
                        </Col>
                        <Col sm={1} className="nopadding">
                            {this.state.toBuy && 
                                <h5 className="cartItemSubTotal"><span>${this.state.subTotal}</span></h5>
                            }
                        </Col>                     
                        <Col sm={2}>
                            <div className="cartItemOptions float-right">
                                {this.state.toBuy && 
                                    <button className="cart-item-btn cart-item-notbuy btn btn-secondary" onClick={this.moveItemFromBuy}>
                                        <FontAwesomeIcon icon={faStar} size="1x" />
                                    </button> 
                                }  
                                {!this.state.toBuy && 
                                    <button className="cart-item-btn cart-item-tobuy btn btn-secondary" onClick={this.moveItemToBuy}>
                                        <FontAwesomeIcon icon={faDollarSign} size="1x" />
                                    </button> 
                                }                                                             
                                    <button className="cart-item-btn cart-item-remove btn btn-secondary" onClick={this.removeItem}>
                                        <FontAwesomeIcon icon={faTimes} size="1x" />
                                    </button> 
                                                              
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            );
        

        return (
            this.state.smallComponent ? smallSizecomponent : stdSizeComponent
        );
    }
}

export default CartItem;