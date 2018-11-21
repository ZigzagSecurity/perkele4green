var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var answersSchema = new Schema({
	id:  Number,
	answers: [{ q: Number, a: String }]
});

var Blog = mongoose.model('answers', answersSchema);