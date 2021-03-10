import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages/pages';
import Pop from './Pop/Pop';

function Renderino() {
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
		<Pop count={count} />,
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
		<Navigation />
		<Renderino />
	</React.StrictMode>,
	document.getElementById('root')
);
