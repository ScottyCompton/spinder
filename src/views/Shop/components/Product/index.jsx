import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Img from 'react-image';
import styles from './styles.scss';
import shortid from 'shortid';
import galleryStyles from '../../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';


class Product extends React.Component {
    constructor(props) {
        super(props);
        const productData = this.props.productData;
        const noImgArray = [{product_image_id: null, product_image: 'no-product-image.jpg'}]
        this.state = {
            productName: productData.product_name,
            productDesc: productData.product_desc,
            productDetails: productData.product_details,
            price: new Number(productData.price).toFixed(2),
            imgPath: productData.product_images.length === 0 ? "/public/images/assets/" : "/public/images/product/",
            productImages: productData.product_images.length === 0 ? noImgArray : productData.product_images
        }
        
    }
    

    render() {
        const productImages = this.state.productImages.map((img,idx) => {
            return (
                {original: this.state.imgPath + img.product_image}
            )
        });

        return (
            <div className="productContainer">
                <div className="product">
                    <div className="product-title bg-secondary">
                        <h3>{this.state.productName}</h3>
                    </div>
                    <div className="product-price"><span className="bg-primary">${this.state.price}</span></div>
                    <div className="product-images">
                        <ImageGallery items={productImages} showBullets={this.state.productImages.length > 1} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} />                     
                    </div>
                    <div className="product-desc bg-secondary bs-component">
                        <p><small>{this.state.productDesc} </small></p>
                    </div>
                </div>
            </div>
            );


    }
}

export default Product;