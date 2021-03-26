import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import logo from '../pictures/Funko.svg';
import AllPops from '../AllPops/AllPops.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
} from 'react-router-dom';

const Navigationbar = () => {
	return (
		<Navbar className="parentnav" bg="light" expand="lg">
			<Navbar.Brand href="#home">
				<img width="60" heigh="60" alt="Logo" src={logo} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigationbar;
