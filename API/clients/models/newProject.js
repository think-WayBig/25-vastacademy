const mongoose = require("mongoose");

const newProject = new mongoose.Schema({
    pro_id: {
        type: String,
        required: true,
        unique: true
    },
    client_name: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        default: '1'
    },
    domain: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pro_status: {
        type: String,
        required: true
    },
    pro_logo: {
        type: String,
        default: 'https://fakeimg.pl/100x100'
    }
});

const NewProject = mongoose.model("projects", newProject);
module.exports = NewProject;