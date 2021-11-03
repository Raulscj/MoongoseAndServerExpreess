const {Schema, model} = require('mongoose');
const esquemaUser = new Schema({
    name: {
        type: String 
    },
    userName:{
        type: String,
        unique: true,
        required: true
    },
    contrasena:{
        type: String,
        unique: true,
        required: true
    },
    date:{
        type: Date,
        default: new Date()
    }
});

module.exports = model('User', esquemaUser)