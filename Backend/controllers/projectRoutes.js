const clients = require('../models/client')
const projectModel = require('../models/project')


exports.createProject = (req, res) => {
    const newProject = new projectModel(req.body);
    newProject.save();
    res.json(req.body)
}

exports.getProjectDetails = (req, res) => {
    projectModel.find({}, (error, result) => {
        if (error) {
            res.json(error);
        } else {
            res.json(result);
        }
    });
}

exports.updateProjectDetails = (req, res) => {

}