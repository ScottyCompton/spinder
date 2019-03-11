import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Img from 'react-image';
import styles from './styles.scss';



class Product extends React.Component {
    constructor(props) {
        super(props);
        const productData = this.props.productData;
        this.state = {
            productName: productData.product_name,
            productDesc: productData.product_desc,
            productDetails: productData.product_details,
            price: new Number(productData.price).toFixed(2)
        }
        
    }
    

    render() {
        return (
            <div className="productContainer">
                <div className="product">
                    <div className="product-title bg-secondary">
                        <h3>{this.state.productName}</h3>
                    </div>
                    <div className="product-price"><span className="bg-primary">${this.state.price}</span></div>
                    <div className="product-image">
                        <Img src="./public/images/product/test-product.jpg" className="img-fluid" />
                    </div>
                    <div className="product-desc bg-secondary bs-component">
                        <p><small>{this.state.productDesc} </small></p>
                    </div>
                </div>
            </div>
            );


    }
}
/*
const Product = function({product_name}) {

    const theProduct = (
        <div className="product">
            <div className="product-title bg-secondary">
                <h3>{product_name}</h3>
            </div>
            <div className="product-price"><span className="bg-primary">$19.99</span></div>
            <div className="product-image">
                <Img src="./public/images/product/test-product.jpg" className="img-fluid" />
            </div>
            <div className="product-desc bg-secondary bs-component">
                <p><small>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </small></p>
            </div>
        </div>
        );



    return (
        theProduct
    );
}
*/

export default Product;

