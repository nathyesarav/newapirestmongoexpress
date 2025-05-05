const Project = require('../models/Project');

// Obtener todos los proyectos
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ fecha_modificacion: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo proyecto (requiere autenticación)
exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un proyecto por ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un proyecto (requiere autenticación)
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un proyecto (requiere autenticación)
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json({ message: 'Proyecto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};