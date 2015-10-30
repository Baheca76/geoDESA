'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Provider Schema
 */
var ProviderSchema = new Schema({
	name: {
		type: String,
		default: '',
	},
	created: {
		type: Date,
		default: Date.now
	},
	cif:{
		type:String,
		default: ''
	},
	phone:{
		type: Number,
		default: ''
	},
	fax: {
		type: Number,
		default: ''
	},
	mail: {
		type:String,
		default: ''
	},
	Address:{
		type:String,
		default: ''
	}
});

module.exports = mongoose.model('Provider', ProviderSchema);
