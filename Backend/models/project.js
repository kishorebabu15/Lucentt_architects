const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


var projectSchema = new mongoose.Schema({

    ClientId: {
        type: ObjectId,
        ref: "Client",
        required: true
    },
    name: {
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    },
    folderLinks: {
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    }
}, { timestamps: true } );


module.exports = mongoose.model("Project", projectSchema);