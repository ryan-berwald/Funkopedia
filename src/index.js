import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigationbar from './Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages';
import Pop from './Pop/Pop';

function AllPops() {
	const [count, setCount] = useState(1);
	const [searchResults, setSearchResults] = useState([]);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	const reset = () => {
		setCount(1);
	};

	const addToArray = (e) => {
		setSearchResults(() => [e]);
		console.log(searchResults[1]);
	};

	return [
		<Navigationbar addToArray={addToArray} />,
		<Pop key={'popem' + count} count={count} />,
		<Pages
			count={count}
			increment={increment}
			decrement={decrement}
			reset={reset}
		/>,
	];
}

ReactDOM.render(
	<React.StrictMode>
		<AllPops />
	</React.StrictMode>,
	document.getElementById('root')
);
