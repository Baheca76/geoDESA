//var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var Device = require('../models/devicesModels.js');
//var Device = mongoose.models('Device',Schema);

exports.new = function(req, res) {

  res.render('devices/new', {DeviceSchema: "", errors: [], title : "Nuevo device"});
  next();
};

// POST /devices
exports.create = function(req, res) {

    var device = new Device({
            name: req.name,
            address: req.body.address,
            provider: req.body.provider,
            location: req.body.location,
            province: req.body.province,
            city: req.body.city

     });
     device.save(function(error){

        if(error){
           res.send('Error al intentar guardar el device.');
        }else{
          res.redirect('/devices/create');
        }
     });
  //console.log("Se ha insertado un desa con nombre:" + this.name);
  res.send('funciona' + req.body.name);
};
//GET /devices/:id
exports.list = function(req, res) {

};
//GET /devices/:id/edit
exports.edit = function(req, res) {

};
// PUT /devices/:id
exports.update = function(req, res, next) {

};

// DELETE /devices/:id
exports.delete = function(req, res) {

};
