const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  nombre_proyecto: { type: String, required: true },
  descripcion: { type: String, required: true },
  skills: [{ type: String }],
  fecha_creacion: { type: Date, default: Date.now },
  fecha_modificacion: { type: Date, default: Date.now },
  url_demo: { type: String },
  url_github: { type: String },
  destacado: { type: Boolean, default: false },
  imagen_principal: { type: String },
  // Puedes agregar más campos aquí según tu modelo de datos
});

module.exports = mongoose.model('Project', ProjectSchema);