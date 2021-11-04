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
module.exports = actualizar;