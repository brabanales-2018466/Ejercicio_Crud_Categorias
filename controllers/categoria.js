//Importaciones
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
//Importacion del modelo
const Categoria = require('../models/categoria');


//***GET***
const getCategorias = async (req = request, res = response) => {

    //Condiciones del metodo get
    const query = { estado: true }

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);


    res.json({
        msg: 'Get API - Controlador Categoria',
        listaCategoria
    });

}


//***POST***
const postCategoria = async (req = request, res = response) => {

    //Desestructuración de los parametros
    const { nombre, tipo, provedores, descripcion } = req.body;
    const categoriaGuardadaDB = new Categoria({ nombre, tipo, provedores, descripcion });

    //Guardar en la Base de datos
    await categoriaGuardadaDB.save();
    res.json({
        msg: 'Post Api - Post Categoria',
        categoriaGuardadaDB
    });

}


//***PUT***
const putCategoria = async (req = request, res = response) => {

    //Req.param para traer parametros de las rutas
    const { id } = req.params;

    //El parametro id no se puede modificar, los demas si.
    const { _id, ...resto } = req.body;

    //Editar la categoria por el id
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto);
    res.json({
        msg: 'PUT API de categoria',
        categoriaEditada
    });

}


//***DELETE***
const deleteCategoria = async (req = request, res = response) => {

    //Req.param para traer parametros de rutas
    const { id } = req.params;

    //Eliminar fisicamente de la base de datos
    const categoriaEliminada = await Categoria.findByIdAndDelete(id);

    res.json({
        msg: 'DELETE API de categoria',
        categoriaEliminada
    });

}



module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}