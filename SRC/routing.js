const {Router} = require('express'); 
const router = Router();
const {create, createUser} = require('../CRUD/create');
const {deleteProducto,deleteUser} = require ('../CRUD/delete');
const {buscar, buscarUser} = require('../CRUD/find');
const {actualizar, actualizarUser} = require('../CRUD/update');
const verificar = require('../CRUD/verificar')

router.get('/Producto/params/:user/:clave/:atributo/:dato', (req,res)=>{
		verificar(req,res)
		.then(acceso=>{
			if(acceso){
				buscar(req,res)
				.then(producto => res.send('Los productos encontrados se encuentran en la consola.')) 
				.catch(err => console.log(err))}
			else{
				res.send('Usuario Invalido');
			}
		})
	})

router.post('/Producto/params/:user/:clave', (req,res)=>{
	verificar(req,res)
	.then(acceso=>{
		if(acceso){
			console.log(req.body)
			create(res,req)
			.then(producto_guardado => res.send(producto_guardado)) 
			.catch(err => console.log(err))
		}else{
			res.send('Usuario Invalido');
		}
	})
});

router.delete('/Producto/params/:user/:clave/:id', (req,res)=>{
    verificar(req,res)
	.then(acceso=>{
		if(acceso){
			deleteProducto(req.params.id)
			.then( _ => res.send('Producto eliminado de la base de datos, satisfactoriamente.')) 
			.catch(err => console.log(err))
		}else{
			res.send('Usuario Invalido');
		}
	})
})

router.put('/Producto/params/:user/:clave/:id',(req,res)=>{
	verificar(req,res)
	.then(acceso=>{
		if(acceso){
			actualizar(req,res)
			.then(producto => res.send(producto))
			.catch(err =>console.log(err))
		}else{
			res.send('Usuario Invalido');
		}
	})
});
//Usuario
router.get('/Usuario/params/:user/:clave/:atributo/:dato', (req,res)=>{
	verificar(req,res)
	.then(acceso=>{
		if(acceso){
			buscarUser(req,res)
			.then(usuario => res.send('El usuario buscado se encuentra en la consola.')) 
			.catch(err => console.log(err))
		}else{
			res.send('Usuario Invalido');
		}
	})
})
	
router.post('/Usuario', (req,res)=>{
	console.log(req.body)
	createUser(res,req)
	.then(user_guardado => res.send(user_guardado)) 
	.catch(err => console.log(err))
});

router.delete('/Usuario/params/:user/:clave/:id', (req,res)=>{
    verificar(req,res)
	.then(acceso=>{
		if(acceso){
			deleteUser(req.params.id)
			.then( _ => res.send('Usuario eliminado de la base de datos, satisfactoriamente.')) 
			.catch(err => console.log(err))
		}else{
			res.send('Usuario Invalido');
		}
	})
})

router.put('/Usuario/params/:user/:clave/:id',(req,res)=>{
	verificar(req,res)
	.then(acceso=>{
		if(acceso){
			actualizarUser(req,res)
			.then(usuario => res.send(usuario))
			.catch(err =>console.log(err))
		}else{
			res.send('Usuario Invalido');
		}
	})
});
module.exports= router;