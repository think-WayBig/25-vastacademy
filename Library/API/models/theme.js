const mongoose = require("mongoose");

const newTheme = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: "VATheme"
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    }
});

const theme = mongoose.model("themes", newTheme);
module.exports = theme;