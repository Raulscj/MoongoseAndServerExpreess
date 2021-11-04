require('../conexion');
const Producto = require('../modelos/Producto');
//Vincular con las clases
async function buscar(req,res){
    let producto;
    switch(req.params.atributo){
        case "tipo":
            producto = await Producto.find({tipo:req.params.dato})
            .then(producto => console.log(producto))
            .catch(err => console.log(err));
            break;
        case "marca":
            producto = await Producto.find({marca:req.params.dato})
            .then(producto => console.log(producto))
            .catch(err => console.log(err));
            break;
        case "modelo":
            producto = await Producto.find({modelo:req.params.dato})
            .then(producto => console.log(producto))
            .catch(err => console.log(err));
            break;
        case "descripcion":
            producto = await Producto.find({descripcion:req.params.dato})
            .then(producto => console.log(producto))
            .catch(err => console.log(err));
            break;
        case "precio":
            producto = await Producto.find({precio:req.params.dato})
            .then(producto => console.log(producto))
            .catch(err => console.log(err));
            break;
        case "id":
            producto = await Producto.find({_id:req.params.dato})
            .then(producto => console.log(producto))
            .catch(err => console.log(err));
            break;
        default:
            res.send('La categoria selecionada, no se encuentra en el sistema, por favor intente con alguna de estas [tipo,marca,modelo,descripcion,precio,id]')
    }
    return producto;
};
module.exports = buscar;