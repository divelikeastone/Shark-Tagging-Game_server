var mongoose = require('mongoose');
var collections = require('../collections.js')
var Schema = mongoose.Schema;

module.exports = mongoose.model('Player', new Schema({
	username: String,
	email: String,
	password: String,
	ip: String,
	token: String,
	tutorialFinished: Boolean
}, { collection: collections.players }));