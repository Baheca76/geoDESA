'use strict';

/**
 * Module dependencies.
 */
//var GeoJSON = require ('mongoose-geojson-schema');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Device Schema
 */
var DeviceSchema = new Schema({
	name: {
		type: String,
		default: '',
		//required: 'Please fill Device name',
		//trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	company: {
			name: {
				type: String,
				default: '',
			},
	 	    Nif: {
	 	    	type: String,
	 	    	default: '',
	 	    },
	 	    address:{
	 	    	type:String,
	 	    	default: '',
	 	    },
	 	    province: {
	 	    	type:String,
	 	    	default: '',
	 	    },
	 		city:{
	 			type: String,
	 			default: '',
	 		},
			postal_code:{
				type: Number,
				default: '',
			},
			phone:{
				type: Number,
				default: '',
			},
			fax:{
				type: Number,
				default: '',
			},
			mail:{
				type: String,
				default: '',
			}
	},
	location:{
		type:{
			type : String,
			default: 'Point'
		},
		coordinates :[Number]
	},
	address:{
		type: String,
		default: '',
	},
	province:{
		type:String,
		default: '',
	},
	city:{
		type:String,
		default: '',
	},
	postal_code:{
		type:Number,
		default: '',
	},
	instalation:{
		type: [{
			type:String,
			enum: ['obligatorio', 'voluntario']
			}],
		default: ['voluntario'],
	},
	activaction_emergency:{
		type: Boolean,
		default: 'true',
	},
	date_instalation:{
		type: Date
	},
	model:{
		type: String,
		default: '',
	},
	make:{
		type: String,
		default: '',
	},
	serial_number:{
		type: String,
		default: '',
	},
	software:{
		type: String,
		default: '',
	},
	software_version:{
		type: String,
		default: '',
	},
	id_estado:{
		type: Number,
		default: '',
	},
	revisions:{
		date:{
		 	type: Date
		},
		id_estado:{
			type: String,
			default: '',
		},
		id_revisor:{
			type: String,
			default: '',
		}
	}

});

DeviceSchema.index({location:'2dsphere'});

module.exports = mongoose.model('Device', DeviceSchema);
