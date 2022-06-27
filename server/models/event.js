const mongoose = require('mongoose');

const EventShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    img: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Events', EventShema);