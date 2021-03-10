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

function makeElement(startIndex) {
	let element = [];
	let endIndex = startIndex + 8;
	// figure out startIndex problem
	for (let x = startIndex - 1; x < endIndex; x++) {
		element.push(
			<Col className="pop" xs lg="3">
				<img
					src={data[x].imageName}
					alt={data[x].handle}
					className="rounded mx-auto d-block pop_pic"
				/>
				<button
					type="button"
					className="btn-formatting btn btn-outline-primary btn-block"
				>
					Official Site
				</button>
				<h4 className="series">
					<strong>Series: </strong>
					{data[x].series}
				</h4>
				<br />
			</Col>
		);
	}
	return element;
}

export default Pop;
