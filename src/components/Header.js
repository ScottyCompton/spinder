import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'





class Header extends React.Component {
    constructor(props) {
        super(props);
        this.cartContents = this.props.cartContents;
    }


    calcCartTotal = (aryCart) => {

        var total = 0;
        for(var i = 0; i < aryCart.length; i++) {
            if(aryCart[i].toBuy === true) {
                var subTotal = aryCart[i].sub_total;
                total += subTotal;
            }
        }
        return total.toFixed(2);   
    }

    calcCartQty = (aryCart, toBuy) => {
        var aryQty = aryCart.filter((item,idx) => { return item.toBuy === toBuy});
        return aryQty.length;
    }    
    

    render() {
        const cartTotal = this.calcCartTotal(this.props.cartContents);
        const toBuyQty = this.calcCartQty(this.props.cartContents, true);
        const toNotBuyQty = this.calcCartQty(this.props.cartContents, false);
        const hdrMsg = this.props.displayName != '' ? <div>Welcome back, {this.props.displayName}</div> : '';
        return (
            <div className="app-header">
			<Navbar className="bg-primary" expand="xs">
				<div className="logo">
					<Link to="/"><Image src="../images/assets/spinder_logo.png" fluid /></Link>
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
                        <Link className="accountLink" to="/edit-account">{hdrMsg}</Link>
                    </div>               
                </div>
              
			</Navbar>
        </div>
        );       
    }
}






const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
    const { userId, displayName } = state.userSession;
    const { cartContents } = state.shop
	return { userId, displayName, cartContents }
  };
  

  export default connect(mapStateToProps, null)(Header);
  

