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


// listen
app.listen(3000, function () {
	console.log('Server is running')
})