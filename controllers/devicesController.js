var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var Device = require('../models/devicesModels.js');
var Temp = require('../models/tempModels.js');

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
    console.log(req.body);
    console.log("location----> "+req.body.location);
    console.log("name---> "+req.body.name);
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
            instalation: req.body.instalation,
            date_instalation: req.body.date_instalation,
            registrydate: req.body.registrydate,
            registryid_caso : req.body.registryid_caso,
            model: req.body.model,
          	make: req.body.make,
          	firmware:req.body.firmware,
          	id_estado:req.body.id_estado,


     });
     device.save(function(error){

        if(error){
           res.send('Error al intentar guardar el device.');
        }else{
          console.log("device creado");
          res.redirect('/devices');
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
  res.render('devices/edit', {device: req.device, redir: req.session.redir});
};
// PUT /devices/:id
exports.update = function(req, res) {
  console.log("pasa por aqui - update");

  Device.findById(req.device._id, function (err, device) {
    if (err) return res.send(err);
    console.log("Device en mongodb:"+ device);
    device.name = req.body.name,
    device.serial_number = req.body.serial_number,
    device.address = req.body.address,
    device.city = req.body.city,
    device.postal_code = req.body.postal_code,
    device.province = req.body.province,
    device.city = req.body.city,
    device.instalation = req.body.instalation,
    device.date_instalation = req.body.date_instalation,
    device.registrydate = req.body.registrydate,
    device.registryid_caso = req.body.registryid_caso,
    device.model = req.body.model,
    device.make = req.body.make,
    device.firmware = req.body.firmware,
    device.id_estado = req.body.id_estado,
    //device.revisions: [{"date":req.body.revisionsDate,"id_estado":req.body.revisionsId_estado,"id_revisor":req.body.revisionsId_revisor}]

    device.save(function (err) {
      if (err) return res.send(err);
        res.redirect('/devices');
    });
  });
};



// DELETE /devices/:id
exports.delete = function(req, res) {
  req.device.remove(function(err){
    if (err){
      res.send(error);
    }
      console.log('device borrado');
      res.redirect('/devices');
  })
};
exports.createTemp = function(req, res) {

    //cogemos las coordenadas
    console.log(req.body);
    console.log("location----> "+req.body.locationTemp);

    var comaPosition = req.body.locationTemp.indexOf(",");
    var latitude = req.body.locationTemp.substring(0, comaPosition);
    var longitude = req.body.locationTemp.substring(comaPosition+1, req.body.locationTemp.length);

    var temp = new Temp({

            locationTemp: {type:'Point', coordinates:[latitude, longitude]},
            addressTemp: req.body.addressTemp,
            cityTemp: req.body.cityTemp,
            postal_codeTemp: req.body.postal_codeTemp,
            provinceTemp: req.body.provinceTemp,

     });
     temp.save(function(error){

        if(error){
           res.send('Error al intentar guardar el device.');
        }else{
          console.log("device creado");
          console.log(temp);
          res.redirect('/');
        }
     });
};

//revisiones
exports.listRevisions = function(req, res){
  req.session.redir= "/devices/" + req.device._id;
  res.render('devices/showRevisions', {device: req.device, redir: req.session.redir});
};

exports.createNewRevision = function(req, res){
     var atemp = {"date":req.body.revisionsDate,"id_estado":req.body.revisionsId_estado,"id_revisor":req.body.revisionsId_revisor};
     Device.update({_id:req.body._id}, {$push: {revisions : [atemp]}}, function(err){

        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
    }
)};


//Registro
exports.listRegistry = function(req, res){
  req.session.redir= "/devices/" + req.device._id;
  res.render('devices/showRegistry', {device: req.device, redir: req.session.redir});
};

exports.createNewRegistry = function(req, res){
     var atemp = {"date":req.body.registryDate,"id_caso":req.body.registryId_caso};
     Device.update({_id:req.body._id}, {$push: {registry : [atemp]}}, function(err){

        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
    }
)};
