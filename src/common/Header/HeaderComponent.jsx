import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import {Navbar, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const calcCartTotal = (aryCart) => {

    var total = 0;
    for(var i = 0; i < aryCart.length; i++) {
        if(aryCart[i].toBuy === true) {
            var subTotal = aryCart[i].sub_total;
            total += subTotal;
        }
    }
    return total.toFixed(2);   
}


const calcCartQty = (aryCart, toBuy) => {
    var aryQty = aryCart.filter((item,idx) => { return item.toBuy === toBuy});
    return aryQty.length;
}

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.cartContents = this.props.cartContents;
    }


    render() {
        const cartTotal = calcCartTotal(this.props.cartContents);
        const toBuyQty = calcCartQty(this.props.cartContents, true);
        const toNotBuyQty = calcCartQty(this.props.cartContents, false);
        const hdrMsg = this.props.displayName != '' ? <div>Welcome back, {this.props.displayName}</div> : '';
        return (
            <div className="app-header">
			<Navbar className="bg-primary" expand="xs">
				<div className="logo">
					<Link to="/"><Image src="./public/images/assets/spinder_logo.png" fluid /></Link>
                </div>
                <div className="hdrRight">
                    <Link className="cartContentsLink" to="/cart">
                        <div className="cartContents">
                        <div className="cartSummary">
                            <div className="sumCircles">
                                <div className="sumCircle bg-secondary float-right"><div>{toBuyQty}</div></div>
                                <div className="sumCircle bg-secondary float-right"><div>{toNotBuyQty}</div></div>
                            </div>
                            <div className="cartTotal">${cartTotal}</div>                            
                        </div>
                        <div className="cartIcon"><FontAwesomeIcon icon={faShoppingCart} size="2x" /></div>
                    </div>
                    </Link>
                    <div className="welcomeMsg">
                        <Link className="accountLink" to="/account">{hdrMsg}</Link>
                    </div>               
                </div>
              
			</Navbar>
        </div>
        );       
    }
}

export default HeaderComponent;
