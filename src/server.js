const { MongoClient } = require('mongodb');
const uri = 'mongodb://192.168.1.168:27017/';
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const database = 'funko';
const collection = 'popems';

const client = new MongoClient(uri, { useUnifiedTopology: true });
var ObjectId = require('mongodb').ObjectID;

app.get('/api/search/', async (req, res) => {
	// Connect the client to the server
	await client.connect();
	// Establish and verify connection
	await client.db(database).command({ ping: 1 });

	console.log('started exp');
	let query = req.query.q;
	query = query
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
	console.log('db req');
	const findResult = await client
		.db(database)
		.collection(collection)
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
	await client.db(database).command({ ping: 1 });
	let query = req.query.id;
	console.log(query);
	const findResult = await client
		.db(database)
		.collection(collection)
		.findOne({
			_id: ObjectId(query),
		});

	res.send(findResult);
});

app.get('/api/allpops/', async (req, res) => {
	// Connect the client to the server
	await client.connect();
	// Establish and verify connection
	await client.db(database).command({ ping: 1 });
	let startIndex = parseInt(req.query.startIndex);
	console.log(startIndex);
	let endIndex = parseInt(req.query.endIndex);
	console.log(endIndex);
	const findResult = await client
		.db(database)
		.collection(collection)
		.find()
		.skip(startIndex)
		.limit(endIndex + 1)
		.toArray();
	console.log(findResult);
	res.json(findResult);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
