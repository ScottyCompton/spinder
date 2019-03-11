import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Product from './components/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faStar } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';
import shortid from 'shortid';



class ShopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.initShop = this.props.initShop;
        this.handleClickToPass = this.props.handleClickToPass;
        this.handleClickToBuy = this.props.handleClickToBuy;
        this.handleClickToLike = this.props.handleClickToLike;
        this.userId = this.props.userId;
    }



    componentWillMount() {
        this.initShop(this.userId);
    }
    
    render() {
 
        return (
            <Container fluid className="shop nopadding">
            <Row>
                <Col xs={12} sm={8} md={6} lg={4} className="offset-sm-2 offset-md-3 offset-lg-4">
                    <div className="products">
                        {this.props.productDataArray.map((item,key) => {
                            return <Product productData={item}  key={shortid.generate()} />
                        })}
                    </div>
                    <div className="product-nav">
                        <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToPass}>
                            <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                        </button>
                        <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToLike}>
                            <FontAwesomeIcon icon={faStar} size="2x" />
                        </button> 
                        <button className="product-nav-btn btn btn-secondary" onClick={this.handleClickToBuy}>
                            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                        </button> 
                    </div>
                </Col>
            </Row>
        </Container>
        );

    }


}



/*

const ShopComponent = function({
    handleClickToPass,
    handleClickToLike,
    handleClickToBuy,
    productDataArray,
    initShop
}) {
    
    if(productDataArray.length < 3) {
        initShop();
    }
    
    
    return (
        <Container fluid className="shop nopadding">
        <Row>
            <Col xs={12} sm={8} md={6} lg={4} className="offset-sm-2 offset-md-3 offset-lg-4">
                <div className="products">
                    {productDataArray.map((item,key) => {
                        return <Product productData={item}  key={shortid.generate()} />
                    })}
                </div>
                <div className="product-nav">
                    <button className="product-nav-btn btn btn-secondary" onClick={handleClickToPass}>
                        <FontAwesomeIcon icon={faThumbsDown} size="2x" />
                    </button>
                    <button className="product-nav-btn btn btn-secondary" onClick={handleClickToLike}>
                        <FontAwesomeIcon icon={faStar} size="2x" />
                    </button> 
                    <button className="product-nav-btn btn btn-secondary" onClick={handleClickToBuy}>
                        <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                    </button> 
                </div>
            </Col>
        </Row>
    </Container>
    );
}
*/

export default ShopComponent