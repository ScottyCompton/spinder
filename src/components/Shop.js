import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Product from './Product';
import { doInit, doClickBuy, doClickPass, doClickLike } from '../actions/shop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faThumbsDown, faStar } from '@fortawesome/free-solid-svg-icons'
import shortid from 'shortid';
import { connect } from 'react-redux';


class Shop extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.initShop(this.props.userId);
    }
    

    initShop = () => {
            const userId = this.props.userId;
    
                    console.log ( JSON.stringify({"user_id": userId,"product_count": 3}))
                    return fetch(process.env.API_ROOT + 'multiplerandomproducts/', 
                        {
                            method: 'post',
                            headers: {'Content-Type':'application/json'},
                            body:   JSON.stringify({"user_id": userId,"product_count": 3})   
                        })
                    .then((response) => {
                        return response.json()
                    })
                    .then(json => {
                        this.props.doInit(json);
                    });
                
            
            
        }

    // initShop = () => {
    //     const userId = this.props.userId;

    //         return dispatch => {
    //             console.log ( JSON.stringify({"user_id": userId,"product_count": 3}))
    //             return fetch(process.env.API_ROOT + 'multiplerandomproducts/', 
    //                 {
    //                     method: 'post',
    //                     headers: {'Content-Type':'application/json'},
    //                     body:   JSON.stringify({"user_id": userId,"product_count": 3})   
    //                 })
    //             .then((response) => {
    //                 console.log(response.json())
    //                 return response.json()
    //             })
    //             .then(json => {
    //             dispatch(doInit(json));
    //             });
    //         }      
        
        
    // }
    
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
            setTimeout((me) => {
                return fetch(process.env.API_ROOT + 'multiplerandomproducts/', 
                    {
                        method: 'post',
                        headers: {'Content-Type':'application/json'},
                        body:   JSON.stringify({"user_id": userId,"product_count": 1})   
                    })
                .then(response => response.json())
                .then(json => {
                    switch(toBuy) {
                        case true: {
                            me.props.doClickBuy(json[0]);
                            break;
                        }
                        case false: {
                            me.props.doClickLike(json[0]);
                            break;
                        }
                        case null: {
                            me.props.doClickPass(json[0]);
                            break;
                        }
                    }                
                });            
    
            },900, this);
    }
    



    render() {
        return (
            <Container fluid className="shop nopadding">
            <Row>
                <Col xs={12} sm={8} md={6} lg={4} className="offset-sm-2 offset-md-3 offset-lg-4">
                    <div className="shopContainer">
                        <div className="products" ref="products">
                            {this.props.productDataArray.map((item) => {
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
                                <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToLike}>
                                    <FontAwesomeIcon icon={faStar} size="2x" />
                                </button> 
                            </div>
                            <div className="product-nav-btn-container">
                                <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToBuy}>
                                    <FontAwesomeIcon icon={faDollarSign} size="2x" />
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
        doClickBuy: (producData) => dispatch(doClickBuy(producData)),
        doClickPass: (producData) => dispatch(doClickPass(producData)),
        doClickLike: (producData) => dispatch(doClickLike(producData)),
        doInit: (productDataArray) => dispatch(doInit(productDataArray))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
    
  