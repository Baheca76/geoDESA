


exports.new = function(req, res) {

  res.render('devices/new', {DeviceSchema: "", errors: [], title : "Nuevo device"});

};

// POST /devices
exports.create = function(req, res) {

      res.send("funciona");

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
