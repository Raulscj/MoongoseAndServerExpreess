require('../conexion');
const User = require('../modelos/user')

 async function verificarUser(req,res){
    let acceso = false
        const resultado= await Promise.all([User.find({userName:req.params.user}),User.find({contrasena:req.params.clave})])
        console.log(resultado[0].length, resultado[1].length)
        if( resultado[0].length == 1 && resultado[1].length == 1 ){
            acceso = true;
        }else{
            acceso = false;
        }
    console.log(acceso)
    return acceso;
};

module.exports = verificarUser;