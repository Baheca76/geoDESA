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
	phone:{
		type:Number,
		default:'',
	},
	permissions:{
		type: [{
			type:String,
			enum: ['administrador','colaborador','revisor']
			}],
		default: ['colaborador'],
	}
});



module.exports = mongoose.model('User', UserSchema);
