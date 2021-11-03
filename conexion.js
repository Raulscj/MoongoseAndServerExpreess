const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Almacen';
const db = mongoose.connection;

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('open',_=>{
    console.log('Database is connected to ',url);
});

db.on('error',err =>{
    console.log(err);
});