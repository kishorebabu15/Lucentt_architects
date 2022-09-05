const ClientModel = require("../models/client");

exports.getClients = (req, res) => {
    ClientModel.find({}, (error, result) => {
        if (error) {
            res.json(error);
        } else {
            res.json(result);
        }
    });
};

exports.createClient = (req, res) => {
    const newClient = new ClientModel(req.body);

    newClient.save();

    res.json(req.body)
}
