import React from 'react';
import {Navbar} from 'react-bootstrap';
import TempLinks from './TempLinks'; // just for moving around during dev - remove later

const Footer = () => (
	<div className="app-footer">
		<footer className="bg-primary footer">
			<Navbar className="bg-primary" expand="lg">
				<TempLinks />
		</Navbar>
		</footer>
	</div>

)
export default Footer;
