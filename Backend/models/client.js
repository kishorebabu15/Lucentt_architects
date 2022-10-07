const mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 32,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        maxlength: 10,
        required: true,
        trim: true
    },
    email: {
        type: String,
        maxlength: 32,
        trim: true,
    },
    client_address: {
        type: String,
        maxlength: 255,
        required: true,
        trim: true
    },
    site_information: {
        type: String,
        maxlength: 255,
        required: true,
        trim: true,
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);

