const mongoose = require('mongoose');

const DiscoverShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Discover', DiscoverShema);

