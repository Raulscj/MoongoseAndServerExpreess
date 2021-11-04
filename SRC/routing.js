const {Router} = require('express'); 
const router = Router();
const {create, createUser} = require('../CRUD/create');
const eliminar = require ('../CRUD/delete');
const {buscar, buscarUser} = require('../CRUD/find');
const actualizar = require('../CRUD/update');

router.get('/Producto/params/:atributo/:dato', (req,res)=>{
	buscar(req,res)
	.then(producto => res.send('Los productos encontrados se encuentran en la consola.')) 
	.catch(err => console.log(err))
	})
	
router.post('/Producto', (req,res)=>{
	console.log(req.body)
	create(res,req)
	.then(producto_guardado => res.send(producto_guardado)) 
	.catch(err => console.log(err))
});

router.delete('/Producto/params/:id', (req,res)=>{
    eliminar(req.params.id)
	.then( _ => res.send('Producto eliminado de la base de datos, satisfactoriamente.')) 
	.catch(err => console.log(err))
})

router.put('/Producto/params/:id',(req,res)=>{
	actualizar(req,res)
	.then(producto => res.send(producto))
	.catch(err =>console.log(err))
});
//Usuario
router.get('/Usuario/params/:atributo/:dato', (req,res)=>{
	buscarUser(req,res)
	.then(usuario => res.send('El usuario buscado se encuentran en la consola.')) 
	.catch(err => console.log(err))
	})
	
router.post('/Usuario', (req,res)=>{
	console.log(req.body)
	createUser(res,req)
	.then(user_guardado => res.send(user_guardado)) 
	.catch(err => console.log(err))
});

router.delete('/Producto/params/:id', (req,res)=>{
    eliminar(req.params.id)
	.then( _ => res.send('Producto eliminado de la base de datos, satisfactoriamente.')) 
	.catch(err => console.log(err))
})

router.put('/Producto/params/:id',(req,res)=>{
	actualizar(req,res)
	.then(producto => res.send(producto))
	.catch(err =>console.log(err))
});
module.exports= router;