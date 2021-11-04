const {Schema, model} = require('mongoose');
const esquemaProducto = new Schema({
    tipo: {
        type: String,
        required: true
    },

    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
        },
    precio: {
        type:Number,
        default: 0
    }
});

module.exports = model('Producto', esquemaProducto)