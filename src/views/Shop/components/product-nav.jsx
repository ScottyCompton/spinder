import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp, faThumbsDown, faStar } from '@fortawesome/free-solid-svg-icons'

const BuyIt = <FontAwesomeIcon icon={faThumbsUp} size="2x" />
const PassIt = <FontAwesomeIcon icon={faThumbsDown} size="2x" />
const LikeIt = <FontAwesomeIcon icon={faStar} size="2x" />


function ProductNav(props) {
    return (
        <div className="product-nav">
            <button className="product-nav-btn btn btn-secondary">
                {BuyIt}
            </button>
            <button className="product-nav-btn btn btn-secondary">
                {LikeIt}
            </button> 
            <button className="product-nav-btn btn btn-secondary">
                {PassIt}
            </button>       
        </div>
    );
}


export default ProductNav;

