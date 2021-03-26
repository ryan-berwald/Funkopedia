import './Details.css';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
const axios = require('axios').default;

let url = new URL('http://localhost:5000/api/details/');

const Details = () => {
	let { id } = useParams();
	console.log(id);
	const [data, setData] = useState({});
	url.searchParams.set('id', id);
	useEffect(() => {
		axios.get(url).then((res) => setData(res.data));
	}, []);

	console.log(data);
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
								<h1 id="infoHeading" className="no-overflow">Details:</h1>
								<ul>
									<li>
										<h4 className="no-overflow">Series: {data.series}</h4>
									</li>

									<li>
										<h4 class="no-overflow">Price Data</h4>
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
};

export default Details;
