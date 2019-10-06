import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Product from './Product';
import { doLoadProduct } from '../actions/shop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import shortid from 'shortid';
import { connect } from 'react-redux';


class Shop extends React.Component {
    constructor(props) {
        super(props);
    }

    
    doSlide = (toBuy) => {
        const productsContainer = document.getElementsByClassName('products')[0];
        const w = productsContainer.clientWidth;
        const h = productsContainer.clientHeight;
        const dimStyles = "width: " + productsContainer.clientWidth + "px; height:"+ productsContainer.clientHeight + "px;";
        
        const frontSlide = document.getElementsByClassName('productContainer')[0];
        frontSlide.setAttribute('style', dimStyles);
    
        if(toBuy === null) {
            frontSlide.classList.add('exec-slide-left');
        } else {
            frontSlide.classList.add('exec-slide-right');
        }
     
    }
    

    handleClickToPass = () => {
        this.handleBtnClick(null);
    }

    handleClickToBuy = () => {
        this.handleBtnClick(true);
    }

    handleClickToLike = () => {
        this.handleBtnClick(false);
    }

    
    handleBtnClick = (toBuy) => {
        const userId = this.props.userId;
        // loads a new single product into state, adds the front product
        // to the cart if toBuy != undefined

            this.doSlide(toBuy);
            setTimeout(() => {
                this.props.doLoadProduct(userId, toBuy);
            },900, this);
    }
    



    render() {
        return (
            <Container fluid className="shop nopadding">
            <Row>
                <Col xs={12} sm={8} md={6} lg={4} className="offset-sm-2 offset-md-3 offset-lg-4">
                    <div className="shopContainer">
                        <div className="products" ref="products">
                            {this.props.productDataArray && this.props.productDataArray.map((item) => {
                                return <Product productData={item}  key={shortid.generate()} />
                            })}
                        </div>
                        <div className="product-nav">
                            <div className="product-nav-btn-container">
                                <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToPass}>
                                    <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                                </button>                           
                            </div>
                            <div className="product-nav-btn-container">
                                <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToBuy}>
                                    <FontAwesomeIcon icon={faDollarSign} size="2x" />
                                </button> 
                            </div>
                            <div className="product-nav-btn-container">
                                <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToLike}>
                                    <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                                </button> 
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        );

    }


}



const mapStateToProps = state => {
    // current state properties passed down to ShopComponent (ShopComponent.js)
    return { 
        productDataArray: state.shop.productDataArray,
        userId: state.userSession.userId
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        doLoadProduct: (userId, toBuy) => {dispatch(doLoadProduct(userId, toBuy))}
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
    
  