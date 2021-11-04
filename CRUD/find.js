require('../conexion');
const Producto = require('../modelos/Producto');
//Vincular con las clases
async function buscar(P){
    const producto = await Producto.find({tipo:P});
    console.log(producto);
    return producto;
};
module.exports = buscar;