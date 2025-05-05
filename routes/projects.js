const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// Rutas públicas
router.get('/', projectsController.getAllProjects);
router.get('/:id', projectsController.getProjectById);

// Rutas protegidas (requerirán middleware de autenticación)
router.post('/', projectsController.createProject);
router.put('/:id', projectsController.updateProject);
router.delete('/:id', projectsController.deleteProject);

module.exports = router;