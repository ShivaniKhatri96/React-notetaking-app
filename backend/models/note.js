const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    privacy: Boolean,
    noteCreator: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
module.exports = mongoose.model('Note', noteSchema);
