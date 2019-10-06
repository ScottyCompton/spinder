import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Img from 'react-image';
import shortid from 'shortid';
import ImageGallery from 'react-image-gallery';
import ShopCats from './ShopCats';


class Product extends React.Component {
    constructor(props) {
        super(props);
        const productData = this.props.productData;
        const noImgArray = [{product_image_id: null, product_image: 'no-product-image.jpg'}]
        this.state = {
            productId: productData.product_id,
            productName: productData.product_name,
            productDesc: productData.product_desc,
            productDetails: productData.product_details,
            price: new Number(productData.price).toFixed(2),
            imgPath: productData.product_images.length === 0 ? process.env.IMG_ASSETS_ROOT : process.env.IMG_PRODUCT_ROOT,
            productImages: productData.product_images.length === 0 ? noImgArray : productData.product_images,
            productCategories: productData.product_categories.length !== 0 ? productData.product_categories : []
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
                    {/*<ShopCats productCategories={this.state.productCategories} /> */}

                    <div className="product-desc bg-secondary bs-component">
                        <p>{this.state.productDesc}</p>
                    </div>
                </div>
            </div>
            );


    }
}

export default Product;