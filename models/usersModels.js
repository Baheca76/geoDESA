'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');



/**
 * User Schema
 */
var UserSchema = new Schema({
	firstName: {
		type: String,
		default: '',
	},
	lastName: {
		type: String,
		default: '',
	},
	dni:{
		type:String,
		default:'',
	},
	userName: {
		type: String,
		unique: 'testing error message',
		required: 'Please fill in a username',
		default:'',
	},
	password: {
		type: String,
		default: '',
	},
	mail: {
		type: String,
		default:'',
	},
	isAdmin:{
		type: Boolean,
		default: false,
	},
	isApprove:{
		type:Boolean,
		default:false,
	}

});



module.exports = mongoose.model('User', UserSchema);
