import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import logo from '../pictures/Funko.svg';

const SearchBar = () => {
	const data = require('../funko_pop.json');
	const [searchResults, setSearchResults] = useState([]);

	const [searchTerm, setSearchTerm] = React.useState('');

	const addToArray = (e) => {
		setSearchResults(() => [e]);
		console.log(searchResults[1]);
	};

	const getPops = () => {
		fetch('http://localhost:5000/api/hello')
			.then((res) => res.json())
			.then((res) => console.log(res));
	};

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
		setTimeout(() => {
			console.log(searchTerm);
			getPops();
			/* if (event.target.value) {
				data.forEach((e) => {
					if (e.title.toUpperCase().includes(searchTerm.toUpperCase())) {
						addToArray(e);
					}
				});
			} */
		}, 1000);
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<form className="form-inline">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={handleChange}
					value={searchTerm}
				></input>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</nav>
	);
};

const Navigationbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">
				<img width="60" heigh="60" alt="Logo" src={logo} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
				<SearchBar />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigationbar;
