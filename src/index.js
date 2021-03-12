import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigationbar from './Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages';
import Pop from './Pop/Pop';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const AllPops = () => {
	const [count, setCount] = useState(1);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	const reset = () => {
		setCount(1);
	};

	return [
		<Pop key={'popem' + count} count={count} />,
		<Pages
			count={count}
			increment={increment}
			decrement={decrement}
			reset={reset}
		/>,
	];
};

ReactDOM.render(
	<Router>
		<Navigationbar />
		<switch>
			<Route path="/">
				<AllPops />
			</Route>
		</switch>
	</Router>,
	document.getElementById('root')
);
