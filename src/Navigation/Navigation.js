import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import logo from '../pictures/Funko.svg';

const SearchBar = () => {
	//need to creat ul in dataset!!!!
	const [searchTerm, setSearchTerm] = React.useState('');
	const [searchResults, setSearchResults] = React.useState([]);
	let timer = null;
	const getPops = () => {
		let url = new URL('http://localhost:5000/api/search/');
		url.searchParams.set('q', searchTerm);
		fetch(url).then((res) => setSearchResults(res.json()));
	};

	const handleChange = (event) => {
		clearTimeout(timer);
		timer = setTimeout(function () {
			setSearchTerm(event.target.value);
			console.log(searchTerm);
			getPops();
		}, 1000);
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<input onChange={handleChange} type="text" list="cars" />
			<datalist id="cars">{searchTerm}</datalist>
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
