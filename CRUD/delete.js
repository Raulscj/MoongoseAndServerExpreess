require('../conexion');
const Productos = require('../modelos/Producto');

async function deleteProducto(id){
    const producto = await Productos.findOneAndDelete({_id:id})
    console.log(producto);
};
module.exports = deleteProducto;