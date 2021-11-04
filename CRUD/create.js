require('../conexion');
const Producto = require('../modelos/Producto');
//Vincular con las clases
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
module.exports = create;