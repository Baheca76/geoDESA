'use strict';

/**
 * Module dependencies.
 */
//var GeoJSON = require ('mongoose-geojson-schema');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Device temporal Schema
 */
var TempSchema = new Schema({

	locationTemp:{
		type:{
			type : String,
      unique: 'testing error message',
			required:'Please fill Device location',
			default: 'Point'
		},
		coordinates :[Number]
	},
	addressTemp:{
		type: String,
		default: '',
	},
	provinceTemp:{
		type:String,
		default: '',
	},
	cityTemp:{
		type:String,
		default: '',
	},
	postal_codeTemp:{
		type:Number,
		default: '',
	}
});

TempSchema.index({locationTemp:'2dsphere'});

module.exports = mongoose.model('Temp', TempSchema);
