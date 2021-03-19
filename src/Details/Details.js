import './Details.css';
import { BrowserRouter as useParams } from 'react-router-dom';

const axios = require('axios').default;
const Details = (query) => {
	let { id } = useParams();

	const getData = () => {
		let url = new URL('http://localhost:5000/api/details/');
		url.searchParams.set('q', query);
		axios.get(url).then(console.log((res) => console.log(res.data)));
	};

	return (
		/* <div class="container-fluid h-100 ">
			<div class="row h-100 no-overflow">
				<div class="col-12 d-flex justify-content-center">
					<div className="container card">
						<div className="portrait col-3">
							<img alt="portrait" src=""></img>
						</div>
					</div>
				</div>
			</div>
		</div> */

		<div>
			<h3>ID: {id}</h3>
		</div>
	);
};

export default Details;
