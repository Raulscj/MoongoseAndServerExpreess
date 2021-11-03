const {Schema, model} = require('mongoose');
const esquemaProducto = new Schema({
    name: {
        type: String 
    },
    marca:{
        type: String
    },
    modelo:{
        type: String
    },
    descripcion: {
        type: String
    },
    precio: {
        type:Number,
        default: 0
    }
});

module.exports = model('Producto', esquemaProducto)