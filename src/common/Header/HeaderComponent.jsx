import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import {Navbar, Image} from 'react-bootstrap';


function HeaderComponent({userId,displayName}) {
        
        return (
            <div className="app-header">
			<Navbar className="bg-primary" expand="lg">
				<div className="logo">
					<Link to="/home/"><Image src="./public/images/assets/spinder_logo.png" fluid /></Link>
                      
                </div>
                <div>
                Welcome back, {displayName}  
                </div>
			</Navbar>
        </div>
        );
};

export default HeaderComponent;
