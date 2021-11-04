require('../conexion');
const Producto = require('../modelos/Producto');
//Vincular con las clases
async function actualizar(req,res){
    const producto = await Producto.updateOne({_id:req.params.id},{
        tipo: req.body.tipo,
        marca:req.body.marca,
        modelo:req.body.modelo,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    })
    return producto
};
//Usuario
const User = require('../modelos/user')
async function actualizarUser(req,res){
    const usuario = await User.updateOne({_id:req.params.id},{
        name: req.body.name,
        userName:req.body.userName,
        contrasena:req.body.contrasena
    })
    return usuario
};
module.exports = {actualizar,actualizarUser};