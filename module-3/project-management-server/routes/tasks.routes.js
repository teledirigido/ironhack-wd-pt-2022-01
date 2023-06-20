const router = require('express').Router();

const Task = require('../models/Task.model');
const Project = require('../models/Project.model');

// POST /api/tasks/ - Create a task under a given project
router.post('/tasks', (req, res, next) => {
  
  const { title, description, project } = req.body;
  
  Task.create({title, description, project })
    .then( newTask => {
      return Project.findByIdAndUpdate(project, { $push: { tasks: newTask._id }}, { new: true } ).populate('tasks');
    })
    .then( response => res.json(response.tasks) )
    .catch( err => res.json(err));

});

// DELETE /api/tasks/ - Delete a task under a given project
router.delete('/tasks/:taskId', (req, res, next) => {
  
  const { taskId } = req.params;

  Task.findByIdAndRemove(taskId)
    .then(removedTask => {
      return Project.findByIdAndUpdate(removedTask.project, { $pull: { tasks: taskId } }, { new: true }).populate('tasks');
    })
    .then(updatedProject => {
      return res.json(updatedProject.tasks);
    })
    .catch(err => {
      return res.json(err);
    });
});

module.exports = router;