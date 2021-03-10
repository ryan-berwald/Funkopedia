import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import POP from './Pop/Pop';

ReactDOM.render(
	<React.StrictMode>
		<Navigation />
		<POP />
	</React.StrictMode>,
	document.getElementById('root')
);
