const {Router} = require('express'); 
const router = Router();
const crear = require('../CRUD/create');
const eliminar = require ('../CRUD/delete');
const buscar = require('../CRUD/find');
const actualizar = require('../CRUD/update');

router.get('/Producto', (req,res)=>{
	crear()
	.then(producto_guardado => res.send(producto_guardado)) 
	.catch(err => console.log(err))
});

router.delete('/Producto', (req,res)=>{
    eliminar()
	.then( _ => res.send('Producto eliminado de la base de datos, satisfactoriamente.')) 
	.catch(err => console.log(err))
})

router.get('/Producto/params/:dato', (req,res)=>{
	buscar(req.params.dato)
	.then(producto => res.send(producto)) 
	.catch(err => console.log(err))
	})

router.put('/Producto/params/:id',(req,res)=>{
	actualizar(req.params.id)
	.then(producto => res.send(producto))
	.catch(err =>console.log(err))
});
module.exports= router;