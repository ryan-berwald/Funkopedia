import './Details.css';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
const axios = require('axios').default;

let url = new URL('http://localhost:5000/api/details/');

const Details = () => {
	let { id } = useParams();
	console.log(id);
	let priceData = [];
	const [data, setData] = useState({});
	let dataLoaded = false;
	url.searchParams.set('id', id);
	useEffect(() => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	}, [id]);

	if (data._id) {
		data.price.data.forEach((e) => {
			priceData.push(e.attributes.value);
		});
		dataLoaded = true;
	}
	const chartData = {
		labels: ['1', '2', '3', '4', '5', '6'],
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
							<div className="row h-100 no-overflow">
								<div className="col-sm-6 center">
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
									<ul>
										<li>
											<h4 className="no-overflow">Series: {data.series}</h4>
										</li>

										<li>
											<Line data={chartData} />
										</li>
										<li>
											<a href={data.imageName}>
												<button
													type="button"
													class="btn-primary btn btn-lg btn-block"
												>
													HobbyDB
												</button>
											</a>
										</li>
									</ul>
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
