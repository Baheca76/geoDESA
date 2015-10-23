
var models = require('../models/devicesModels.js');

exports.new = function(req, res) {

  res.render('devices/new', {DeviceSchema: "", errors: [], title : "Nuevo device"});
  next();
};

// POST /devices
exports.create = function(req, res) {
  var device = new Device({
        name: this.name,
        address: this.address,
        provider: this.provider,
        location: this.location,
        province: this.province,
        city: this.city

    });

     device.save(function(error){
        if(error){
           res.send('Error al intentar guardar el device.');
        }else{
          res.redirect('/devices');
        }
     });
  console.log("Se ha insertado un desa con nombre:" + this.name);
  res.send('funciona' + req.name);
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
