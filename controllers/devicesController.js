var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var Device = require('../models/devicesModels.js')

exports.new = function(req, res) {

  res.render('devices/new', {DeviceSchema: "", errors: [], title : "Nuevo device"});

};

// POST /devices
exports.create = function(req, res) {

    //cogemos las coordenadas
    var comaPosition = req.location.indexOf(',');
    var latitude = req.location.substring(0, comaPosition);
    var longitude = req.location.substring(comaPosition+1, req.location.length);

    var device = new Device({
            name: req.body.name,
            address: req.body.address,
            location: {type:'Point', coordinates:[latitude, longitude]},
            //province: req.body.province,
            city: req.body.city

     });
     device.save(function(error){

        if(error){
           res.send('Error al intentar guardar el device.');
        }else{
          res.json({mensaje: "device creado"});
        }
     });
};
exports.solicitudalta = function(req, res){

  res.render('devices/solicitudalta', {DeviceSchema: "", errors: [], title : "solicitudalta"});

}
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
