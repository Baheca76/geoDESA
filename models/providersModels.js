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
		unique: 'testing error message',
		required: 'Please fill in a cif',
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
	address:{
		type:String,
		default: ''
	},
	city:{
		type: String,
		default: '',
	},
	postal_code:{
		type: Number,
		default: '',
	},
	province: {
		type:String,
		default: '',
	}

});

//ProviderSchema.index({cif: '2dsphere'});
module.exports = mongoose.model('Provider', ProviderSchema);
