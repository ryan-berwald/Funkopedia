import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Pop.css';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const data = require('../TwoPops.json');

export default class Pop extends Component {
	render() {
		let element = this.makeElement();
		return (
			<Container>
				<Row className="justify-content-md-center">{element}</Row>
			</Container>
		);
	}
	constructor(props) {
		super(props);
		this.state = { isOn: true };
	}

	makeElement() {
		let element = [];

		for (let x in data) {
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
}
