const mongoose = require('mongoose')

const experimentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

const Experiment = mongoose.model("Experiment", experimentSchema);
module.exports = Experiment;