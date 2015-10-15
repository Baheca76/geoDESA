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
		required: 'Please fill Provider name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
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

mongoose.model('Provider', ProviderSchema);
