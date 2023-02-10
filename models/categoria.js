const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio'],
        
    },
    provedores: {
        type: String,
        required: [true, 'El provedores es obligatorio']
    },
    descripcioncls: {
        type: String,
        required: [true, 'El descripcion es obligatorio'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Categoria', CategoriaSchema)