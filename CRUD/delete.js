require('../conexion');
const Productos = require('../modelos/Producto');

async function deleteProducto(){
    const producto = await Productos.deleteOne({tipo:'teclado'});
};
module.exports = deleteProducto;