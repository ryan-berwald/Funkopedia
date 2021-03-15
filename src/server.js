const { MongoClient } = require('mongodb');
const uri = 'mongodb://192.168.1.168:27017/';
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const client = new MongoClient(uri);

app.get('/api/search/', async (req, res) => {
	try {
		// Connect the client to the server
		await client.connect();
		// Establish and verify connection
		await client.db('funko').command({ ping: 1 });
	} finally {
		let query = req.query.q;
		query = query
			.split(' ')
			.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
			.join(' ');
		const findResult = await client
			.db('funko')
			.collection('popems')
			.find({
				title: { $regex: '^' + query + '*' },
			})
			.toArray();
		if (findResult.length === 0) {
			console.log('none');
		} else {
			res.json(findResult);
		}

		await client.close();
	}
});

/* app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send(
		`I received your POST request. This is what you sent me: ${req.body.post}`
	);
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));
