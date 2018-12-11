const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Goal', GoalSchema);