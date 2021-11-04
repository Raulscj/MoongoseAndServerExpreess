require('../conexion');
const Producto = require('../modelos/Producto');

async function create(res,req){
    const producto = new Producto({
        tipo: req.body.tipo,
        marca:req.body.marca,
        modelo:req.body.modelo,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    });
    const producto_guardado = await producto.save();
    return producto_guardado;
};
//Usuario
const User = require('../modelos/user')
async function createUser(res,req){
    const user = new User({
        name: req.body.name,
        userName:req.body.userName,
        contrasena:req.body.contrasena
    });
    const user_guardado = await user.save();
    return user_guardado;
};
module.exports = {create,createUser};