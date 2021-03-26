import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Pop.css';

const data = require('../funko_pop.json');

const Pop = ({ count }) => {
	let element = makeElement(count);
	return (
		<Container>
			<Row className="justify-content-md-center">{element}</Row>
		</Container>
	);
};

function makeElement(count) {
	let element = [];
	let endIndex = count * 9 - 1;
	let startIndex;
	if (count === 1) {
		startIndex = 0;
	} else {
		startIndex = endIndex - 8;
	}
	for (let x = startIndex; x <= endIndex; x++) {
		element.push(
			<div className="col-sm-3 pop justify-content-center ">
				<img
					src={data[x].imageName}
					alt={data[x].handle}
					className="rounded mx-auto d-block pop_pic"
				/>
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

	return element;
}

export default Pop;
