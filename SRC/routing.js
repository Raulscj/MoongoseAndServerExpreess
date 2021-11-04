const {Router} = require('express'); 
const router = Router();
const crear = require('../CRUD/create');
const eliminar = require ('../CRUD/delete');
const buscar = require('../CRUD/find');
const actualizar = require('../CRUD/update');

router.get('/Producto/params/:atributo/:dato', (req,res)=>{
	buscar(req,res)
	.then(producto => res.send('Los productos encontrados se encuentran en la consola.')) 
	.catch(err => console.log(err))
	})
	
router.post('/Producto', (req,res)=>{
	console.log(req.body)
	crear(res,req)
	.then(producto_guardado => res.send(producto_guardado)) 
	.catch(err => console.log(err))
});

router.delete('/Producto/params/:id', (req,res)=>{
    eliminar(req.params.id)
	.then( _ => res.send('Producto eliminado de la base de datos, satisfactoriamente.')) 
	.catch(err => console.log(err))
})
//AQUI QUEDE
router.put('/Producto/params/:id',(req,res)=>{
	actualizar(req,res)
	.then(producto => res.send(producto))
	.catch(err =>console.log(err))
});
module.exports= router;