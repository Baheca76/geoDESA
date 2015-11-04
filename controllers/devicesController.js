var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var Device = require('../models/devicesModels.js');

// Middleware to preload de device
exports.load = function(req, res, next, deviceId){
  console.log("pasa por load");
  Device.find({_id: deviceId}, function(error, device){
    if (error){
        res.send(error);
    }
    req.device = device[0];
    console.log(req.device);
    next();
  });

};

exports.show = function(req, res){
  console.log("Show...")
  console.log(req.device);
  console.log(req.session.redir);
  console.log(req.path);
  res.render('devices/show', {device: req.device, redir: req.session.redir});
}



// GET /devices/new
// Form to insert a new device
exports.new = function(req, res) {
  res.render('devices/new', {DeviceSchema: "", errors: [], title : "Nuevo device"});
  next();
};

// GET /devices/search/:lat/:lon/:distance
// looking for devices near [:lat, :lon] position and :distance parameters
exports.search = function(req, res) {
  var location = {
    type : "Point",
    coordinates : [Number(req.params.lat), Number(req.params.lon)]
  };

  var searchOptions = {
    maxDistance : Number(req.params.distance),
    distanceMultiplier: 1,  // with this value, we are looking for for device
                            // in meters
    spherical : true
  }
  Device.geoNear(location, searchOptions, function (err, results, stats) {
    res.json(results);
  })
}

// POST /devices
// Create a new device on DB, through a create device form
exports.create = function(req, res) {

    //cogemos las coordenadas
    var comaPosition = req.body.location.indexOf(",");
    var latitude = req.body.location.substring(0, comaPosition);
    var longitude = req.body.location.substring(comaPosition+1, req.body.location.length);

    var device = new Device({
            name: req.body.name,
            serial_number: req.body.serial_number,
            location: {type:'Point', coordinates:[latitude, longitude]},
            address: req.body.address,
            city: req.body.city,
            postal_code: req.body.postal_code,
            province: req.body.province,
            city: req.body.city,
            instalation: req.body.instalation,
            activaction_emergency: req.body.activaction_emergency,
            date_instalation: req.body.date_instalation,
          	model: req.body.model,
          	make: req.body.make,
          	software:req.body.	software,
          	software_version:req.body.software_version,
          	id_estado:req.body.id_estado

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

exports.list = function(req, res) {
  Device.find({},function(error, devices){

            if (error){
                res.send(error);
            }
              req.session.redir = "/devices"+req.path;
              console.log(req.path);
              console.log(req.session.redir);
              res.locals.session = req.session;
              res.render('devices/list', {listDevices: devices});


  });


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
