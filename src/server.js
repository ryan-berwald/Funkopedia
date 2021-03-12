const { MongoClient } = require('mongodb');
const uri = 'mongodb://192.168.1.168:27017/';
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

let status;

const client = new MongoClient(uri);

app.get('/api/hello', async (req, res) => {
	try {
		// Connect the client to the server
		await client.connect();
		// Establish and verify connection
		await client.db('funko').command({ ping: 1 });
	} finally {
		const findResult = await client
			.db('funko')
			.collection('popems')
			.find({
				title: { $regex: '^Black Panther*' },
			});
		if ((await findResult.count()) === 0) {
			console.log('No documents found!');
		} else {
			await findResult.forEach((e) => console.log(e.title));
		}

		await client.close();
	}
	res.send({ express: status });
});

app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send(
		`I received your POST request. This is what you sent me: ${req.body.post}`
	);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
