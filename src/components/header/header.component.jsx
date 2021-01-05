import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
				<p>Smallxlsx</p>
			</Link>
		</div>
	);
};

export default Header;
