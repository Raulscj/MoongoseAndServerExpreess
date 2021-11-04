require('../conexion');
const Producto = require('../modelos/Producto');
//Vincular con las clases
async function actualizar(id){
    const producto = await Producto.updateOne({_id:id},{
        tipo:'pc'
    })
    return producto
};
module.exports = actualizar;