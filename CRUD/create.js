require('../conexion');
const Producto = require('../modelos/Producto');
//Vincular con las clases
async function create(){
    const producto = new Producto({
        name:'teclado',
        marca:'hp',
        modelo:'rgb',
        descripcion: 'Gamer',
        precio: 150
    });
    const producto_guardado = await producto.save();
    return producto_guardado;
};
module.exports = create;