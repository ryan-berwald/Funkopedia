import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigationbar from './Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from '../src/Search/Search';
import Details from './Details/Details';
import AllPops from './AllPops/AllPops';

ReactDOM.render(
	<Router>
		<Navigationbar />
		<div className="container">
			<Route exact path="/">
				<AllPops />
			</Route>
			<Route path="/details/:id">
				<Details />
			</Route>
		</div>
	</Router>,
	document.getElementById('root')
);
