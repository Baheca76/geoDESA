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

	locationT:{
		type:{
			type : String,
      required: 'Please fill Device location',
			default: 'Point'
		},
		coordinates :[Number]
	},
	addressT:{
		type: String,
		default: '',
	},
	provinceT:{
		type:String,
		default: '',
	},
	cityT:{
		type:String,
		default: '',
	},
	postal_codeT:{
		type:Number,
		default: '',
	}


});

DeviceSchema.index({location:'2dsphere'});

module.exports = mongoose.model('Device', DeviceSchema);
