import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
} from 'react-router-dom';
import Details from '../Details/Details';
import './Search.css';

const axios = require('axios').default;

const SearchBar = () => {
	const [searchResults, setSearchResults] = React.useState([{}]);
	const [hidden, setHidden] = React.useState(true);
	let match = useRouteMatch();

	let timer = null;
	const getPops = async (event) => {
		let url = new URL('http://localhost:5000/api/search/');
		url.searchParams.set('q', event.target.value);
		//get data
		axios.get(url).then((res) => {
			//set search results state object
			setSearchResults([...res.data]);
		});
	};

	const handleChange = (event) => {
		clearTimeout(timer);
		setHidden(false);
		timer = setTimeout(function () {
			getPops(event);
		}, 1000);
	};

	const handleBlur = () => {
		timer = setTimeout(function () {
			setHidden(true);
		}, 100);
	};

	let element = [];
	for (let x = 0; x < searchResults.length; x++) {
		element.push(
			<Link
				className="autocomplete-items"
				to={`/details/${searchResults[x]._id}`}
			>
				<img
					alt={searchResults[x].handle}
					src={searchResults[x].imageName}
				></img>
				{searchResults[x].title}
			</Link>
		);
	}
	return (
		<div className="container">
			<div class=" input-group input-group-lg">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-lg">
						Search
					</span>
				</div>
				<input
					type="text"
					class="form-control input"
					aria-label="Large"
					aria-describedby="inputGroup-sizing-lg"
					onChange={handleChange}
					onBlur={handleBlur}
				></input>
			</div>
			<div className="color" hidden={hidden}>
				{element}
				<Route path="/details/:id" component={Details} />;
			</div>
		</div>
	);
};
export default SearchBar;
