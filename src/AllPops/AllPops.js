import React, { useState } from 'react';
import Pages from '../pages/pages';
import Pop from '../Pop/Pop';
import SearchBar from '../Search/Search';
import './AllPops.css';
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
		<div className="d-flex justify-content-center search">
			<SearchBar />
		</div>,
		<Pop className="pop" key={'popem' + count} count={count} />,
		<Pages
			count={count}
			increment={increment}
			decrement={decrement}
			reset={reset}
		/>,
	];
};

export default AllPops;
