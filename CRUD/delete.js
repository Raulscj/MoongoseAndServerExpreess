require('../conexion');
const Productos = require('../modelos/Producto');

async function deleteProducto(id){
    const producto = await Productos.findOneAndDelete({_id:id})
    console.log(producto);
};

//Usuario
const User = require('../modelos/user')
async function deleteUser(id){
    const usuario = await User.findOneAndDelete({_id:id})
    console.log(usuario);
};
module.exports = {deleteProducto,deleteUser};