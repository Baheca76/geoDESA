var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var Provider = require('../models/providersModels.js');

exports.new = function(req, res) {

  res.render('providers/new', {ProviderSchema: "", errors: [], title : "Nuevo provider"});

};
//POST /provider
exports.create = function(req, res) {
    var provider = new Provider({
            name: req.body.name,
            cif: req.body.cif,
            phone: req.body.phone,
            fax: req.body.fax,
            mail: req.body.mail,
            address: req.body.address,
            city: req.body.city,
            postal_code: req.body.postal_code,
            province: req.body.province

     });
     provider.save(function(error){
        if(error){
           res.send('Error al intentar guardar el provider.');
        }else{
          res.json({mensaje: "provider creado"});
        }
     });
};

//GET /provider/:id
exports.list = function(req, res) {
  Provider.find({},function(error, providers){

    if (error){
        res.send(error);
    }
      res.render('providers/list', {listProviders: providers});


  });

};
// Middleware to preload de provider
exports.load = function(req, res, next, providerId){
  console.log("pasa por load");
  Provider.find({_id: providerId}, function(error, provider){
    if (error){
        res.send(error);
    }
    req.provider = provider[0];
    console.log(req.provider);
    next();
  });

};

exports.show = function(req, res){
  console.log("Show...")
  console.log(req.provider);
  console.log(req.session.redir);
  console.log(req.path);
  res.render('providers/show', {provider: req.provider, redir: req.session.redir});
};

//GET /provider/:id/edit
exports.edit = function(req, res) {

};
// PUT /provider/:id
exports.update = function(req, res, next) {

};

// DELETE /provider/:id
exports.delete = function(req, res) {
  var provider = req.providers;
  provider.remove(function(error){
    if(error){
      res.send(error);
    }
      res.json({mensaje:"provider borrado"});
  });
};
