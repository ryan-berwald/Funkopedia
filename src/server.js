const { MongoClient } = require('mongodb');
const uri = 'mongodb://192.168.1.168:27017/';
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const client = new MongoClient(uri, { useUnifiedTopology: true });
var ObjectId = require('mongodb').ObjectID;

app.get('/api/search/', async (req, res) => {
	// Connect the client to the server
	await client.connect();
	// Establish and verify connection
	await client.db('funko').command({ ping: 1 });

	console.log('started exp');
	let query = req.query.q;
	query = query
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
	console.log('db req');
	const findResult = await client
		.db('funko')
		.collection('popems')
		.find({
			title: { $regex: '^' + query + '*' },
		})
		.toArray();
	console.log('finished req');
	if (findResult.length === 0) {
		res.json('No Results');
	} else {
		res.json(findResult);
	}
});

app.get('/api/details/', async (req, res) => {
	// Connect the client to the server
	await client.connect();
	// Establish and verify connection
	await client.db('funko').command({ ping: 1 });
	let query = req.query.id;
	console.log(query);
	console.log('db req');
	const findResult = await client
		.db('funko')
		.collection('popems')
		.findOne({
			_id: ObjectId(query),
		});

	console.log(findResult);
	res.send(findResult);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
