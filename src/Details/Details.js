import './Details.css';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
const axios = require('axios').default;

let url = new URL('http://localhost:5000/api/details/');

const Details = () => {
	let { id } = useParams();
	console.log(id);
	let priceData = []; //parallel arrays for price and dates of sale
	let dateData = [];
	const [data, setData] = useState({});
	let dataLoaded = false;
	url.searchParams.set('id', id);
	useEffect(() => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	}, [id]);

	if (data._id) {
		if (data.price.data.length > 5) {
			for (
				let x = data.price.data.length - 6;
				x < data.price.data.length;
				x++
			) {
				priceData.push(data.price.data[x].attributes.value);
				if (data.price.data[x].attributes.dateEnd) {
					dateData.push(data.price.data[x].attributes.dateEnd.split('T', [1]));
				} else if (data.price.data[x].attributes.dateStart) {
					dateData.push(
						data.price.data[x].attributes.dateStart.split('T', [1])
					);
				}
			}
		} else {
			for (let x = 0; x < data.price.data.length; x++) {
				priceData.push(data.price.data[x].attributes.value);
				dateData.push(data.price.data[x].attributes.dateEnd.split('T', [1]));
			}
		}
		console.log(dateData);
		dataLoaded = true;
	}
	const chartData = {
		labels: dateData,
		datasets: [
			{
				label: 'Price',
				data: priceData,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			},
		],
	};
	if (dataLoaded) {
		return (
			<div className="container-fluid">
				<div className="row no-overflow">
					<div className="col-12 ">
						<div className="container-fluid card">
							<div className="row h-100">
								<div className="col-sm-6 center no-overflow">
									<img
										alt="portrait"
										className="portrait"
										src={data.imageName}
									></img>
									<h1 className="popTitle">{data.title}</h1>
								</div>
								<div className="col-sm-6">
									<h1 id="infoHeading" className="no-overflow">
										Details:
									</h1>

									<h4 className="no-overflow">Series: {data.series}</h4>

									<Line data={chartData} />

									<a href={data.imageName}>
										<button
											type="button"
											class="btn-primary btn btn-lg btn-block"
										>
											HobbyDB
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<h1>
				Loading...<canvas id="myChart"></canvas>
			</h1>
		);
	}
};

export default Details;
