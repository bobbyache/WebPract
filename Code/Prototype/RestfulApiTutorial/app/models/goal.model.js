const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema({
    title: String,
    min: Number,
    tasks: Array
}, {
        timestamps: true
    });

module.exports = mongoose.model('Goal', GoalSchema);