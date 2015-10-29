var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var Provider = require('../models/providersModels.js')

exports.new = function(req, res) {

  res.render('providers/new', {ProviderSchema: "", errors: [], title : "Nuevo provider"});

};
//POST /provider
exports.create = function(req, res) {


    var provider = new Provider({
            name: req.body.name,
            address: req.body.address,
            cif: req.body.cif,
            phone: req.body.phone

     });
     device.save(function(error){

        if(error){
           res.send('Error al intentar guardar el provider.');
        }else{
          res.json({mensaje: "provider creado"});
        }
     });
};

//GET /provider/:id
exports.list = function(req, res) {

};
//GET /provider/:id/edit
exports.edit = function(req, res) {

};
// PUT /provider/:id
exports.update = function(req, res, next) {

};

// DELETE /provider/:id
exports.delete = function(req, res) {

};
