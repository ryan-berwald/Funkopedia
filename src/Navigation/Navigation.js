import React, { Component } from 'react';
import { Navbar, FormControl, Button, Form } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import logo from '../pictures/Funko.svg';
export default class Navigation extends Component {
	render() {
		return (
			<Navbar bg="dark" expand="lg">
				<Navbar.Brand href="#home">
					<img width="60" heigh="60" alt="Logo" src={logo} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
