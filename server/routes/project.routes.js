const ProjectController = require('../controllers/project.controller');
const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get("/api/logout", Users.logout);
    app.post('/api/new', ProjectController.createProject);
    app.get('/api/project', ProjectController.getAllProject);
    app.get('/api/project/:idd', ProjectController.getProject);
    app.put("/api/project/:project_id/edit", ProjectController.updateProject)
    app.delete("/api/project/:id", ProjectController.deleteProject)
}