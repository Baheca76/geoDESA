var users = { admin: {id:1, username:"admin1", password:"admin1" },
              admin2: {id:2, username:"admin2", password:"admin2" }
            }

// Comprueba si el usuario esta registrado en users
// Si autenticación falla o hay errores se ejecuta callback(error).
exports.autenticar = function(login, password, callback) {
  if(users[login]){
    if (password === users[login].password){
      callback(null, users[login]);
    }
    else{
      callback(new Error('password erróneo'));
    }
  }
  else{
    callback(new Error('no existe el usuario'));
  }

};
