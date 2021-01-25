const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Project name can't be empty"],
        minlength: [3, 'Project name should be 3 characters or longer'],
    },
    dueDate: {
        type: Date,
        required: [true, "Project's due date can't be empty"]
    },
    status: {
        type: String,
        default: "backlog"
    }
}, { timestamps: true })

module.exports.Project = mongoose.model('Project', ProjectSchema);