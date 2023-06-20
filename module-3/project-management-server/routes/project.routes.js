// routes/project.routes.js
const router = require("express").Router();

const mongoose = require('mongoose');
const Project = require('../models/Project.model');
// const Task = require('../models/Task.model');

//  POST /api/projects  -  Creates a new project
router.post('/projects', (req, res, next) => {
  
  const { title, description } = req.body;

  Project.create({ title, description, tasks: [] })
    .then(response => res.json(response))
    .catch(err => res.json(err));

});

// GET /api/projects - Get all projects
router.get('/projects', (req, res, next) => {
  
  Project.find()
    .populate('tasks')
    .then( allProjects => res.json(allProjects))
    .catch( err => res.json(err));

  });

// GET /api/projects/:projectId - Get project by id
router.get('/projects/:projectId', (req, res, next) => {

  const { projectId } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({
      message: 'Project ID not valid'
    });
  }

  Project.findById(projectId)
    .populate('tasks')
    .then(project => res.status(200).json(project))
    .catch(err => res.status(400).json(err));

});

// PUT /api/projects/:projectId - Update project by id
router.put('/projects/:projectId', (req, res, next) => {

  const { projectId } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({
      message: 'Project ID not valid'
    });
  }

  Project.findByIdAndUpdate(projectId, req.body, { new: true })
    .then( updatedProject => res.json(updatedProject))
    .catch( err => res.json(err));

});

// DELETE /api/projects/:projectId - Delete a project by id
router.delete('/projects/:projectId', (req, res, next) => {

  const { projectId } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({
      message: 'Project ID not valid'
    });
  }

  Project.findByIdAndRemove(projectId)
    .then( () => res.json({
      message: `Project with id ${projectId} has been removed`
    }))
    .catch( err => res.json(err));

});

module.exports = router;