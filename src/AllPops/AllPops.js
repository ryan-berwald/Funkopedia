import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pages from '../pages/pages';
import SearchBar from '../Search/Search';
import './AllPops.css';
import './Pop.css';
import Details from '../Details/Details';

const axios = require('axios').default;

let url = new URL('http://localhost:5000/api/allpops/');

const AllPops = () => {
	const [count, setCount] = useState(1);
	const [data, setData] = useState([{}]);
	let element = [];
	let endIndex = count * 9 - 1;
	let startIndex;
	let dataLoaded = false;

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	const reset = () => {
		setCount(1);
	};

	if (count === 1) {
		startIndex = 0;
	} else {
		startIndex = endIndex - 8;
	}

	url.searchParams.set('startIndex', startIndex);
	url.searchParams.set('endIndex', endIndex);

	useEffect(() => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	}, [startIndex]);
	console.log(data);

	if (data[0]._id) {
		for (let x = 0; x < 9; x++) {
			console.log('index ' + x);
			console.log(data[x].imageName);

			element.push(
				<div className="col-sm-3 pop justify-content-center ">
					<Link className="autocomplete-items" to={`/details/${data[x]._id}`}>
						<img
							src={data[x].imageName}
							alt={data[x].handle}
							className="rounded mx-auto d-block pop_pic"
						/>
					</Link>

					<button
						type="button"
						className="btn-formatting btn btn-primary btn-block"
					>
						Official Site
					</button>
					<h4 className="series">
						<strong>Title: </strong>
						{data[x].title}
					</h4>
					<h4 className="series">
						<strong>Series: </strong>
						{data[x].series}
					</h4>
				</div>
			);
		}
		dataLoaded = true;
	} else {
		return <div>Loading...</div>;
	}

	if (dataLoaded) {
		return [
			<div className="d-flex justify-content-center search">
				<SearchBar />
			</div>,
			<div className="row popsContainer justify-content-center">
				{element}
				<Route path="/details/:id" component={Details} />;
			</div>,

			<Pages
				count={count}
				increment={increment}
				decrement={decrement}
				reset={reset}
			/>,
		];
	} else {
		<h1>Loading...</h1>;
	}
};

export default AllPops;
