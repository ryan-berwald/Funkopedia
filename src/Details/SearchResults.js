const axios = require('axios').default;
const Details = () => {
	axios
		.get('https://localhost:5000/results/')
		.then(console.log('hit endpoint'));
};

export default Details;
