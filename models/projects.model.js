const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        // enum: ["Not Started", "In Progress", "Completed"]
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients'
    }
});

module.exports = {
    projectsSchema
}