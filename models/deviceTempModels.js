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
var DeviceTempSchema = new Schema({

	locationTemp:{
		type:{
			type : String,
      required: 'Please fill Device location',
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

DeviceTempSchema.index({location:'2dsphere'});

module.exports = mongoose.model('DeviceTemp', DeviceTempSchema);
