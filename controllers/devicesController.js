var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var Device = require('../models/devicesModels.js');


exports.new = function(req, res) {

  res.render('devices/new', {DeviceSchema: "", errors: [], title : "Nuevo device"});
  next();
};

// POST /devices
exports.create = function(req, res) {

    //cogemos las coordenadas
    var comaPosition = req.body.location.indexOf(",");
    var latitude = req.body.location.substring(0, comaPosition);
    var longitude = req.body.location.substring(comaPosition+1, req.body.location.length);

    var device = new Device({
            name: req.body.name,
            serial_number: req.body.serial_number,
            address: req.body.address,
            //location:req.body.location,
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
  Device.find({},function(error, devices){

            if (error){
                res.send(error);
            }
            res.json({devices});
             //res.render('users/list', {UsersSchema: "users", errors: [], title : "Listado"});
  });
  //res.render('users/list', {UsersSchema: "", errors: [], title : "listado"});

};
//GET /devices/:id/edit
exports.edit = function(req, res) {

};
// PUT /devices/:id
exports.update = function(req, res, next) {

};

// DELETE /devices/:id
exports.delete = function(req, res) {
  var device = req.devices;
  device.remove(function(error){
    if(error){
      res.send(error);
    }
      res.json({mensaje:"device borrado"});
  });
};
