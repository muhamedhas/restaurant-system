// imports dependencies
let express = require('express')
let app = express()
let bodyParser = require('body-parser')

//var constants = require('./constants')

// db dependencies
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID
//var url = constants.DB_URL

//var query = require('./query')

app.use(bodyParser.json())
app.use(express.static('../public'))

// serve the home page
app.get('/', function (req, res) {
	res.send('index.html')
})

// find restaurant api
app.get('/restaurants/:_id?', (req, res) => {
	console.log(req.params)

	var criteria = (req.params) ? { "_id": ObjectId(req.params['_id']) } : ''
	console.log(criteria)
	console.log('restaurants api reached.. ')
	MongoClient.connect(url, function (err, db) {
		// assert.equal(null, err);
		query.findRestaurants(req, res, db, function () {
			db.close()
		})
	})
})

// listen
app.listen(3000, function () {
	console.log('Server is running')
})