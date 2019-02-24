import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './styles.scss';

const Header = () => (

		<div className="header">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/shop">Shop</NavLink>
				<Link to="/">Another link home</Link>
				<NavLink to="/settings/">Settings</NavLink>
		</div>

)
export default Header;
