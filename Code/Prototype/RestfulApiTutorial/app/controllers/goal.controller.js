const Goal = require('../models/goal.model.js');

// Create and Save a new Goal
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Goal title can not be empty"
        });
    }

    // Create a Goal
    const goal = new Goal({
        title: req.body.title || "Untitled Goal"
    });

    // Save Goal in the database
    goal.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Goal."
            });
        });
};

// Retrieve and return all goals from the database.
exports.findAll = (req, res) => {
    Goal.find()
        .then(goals => {
            res.send(goals);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving goals."
            });
        });
};

// Find a single goal with a goalId
exports.findOne = (req, res) => {
    Goal.findById(req.params.goalId)
        .then(goal => {
            if (!goal) {
                return res.status(404).send({
                    message: "Goal not found with id " + req.params.goalId
                });
            }
            res.send(goal);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Goal not found with id " + req.params.goalId
                });
            }
            return res.status(500).send({
                message: "Error retrieving goal with id " + req.params.goalId
            });
        });
};

// Update a goal identified by the goalId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Goal title can not be empty"
        });
    }

    // Find goal and update it with the request body
    Goal.findByIdAndUpdate(req.params.goalId, {
        title: req.body.title || "Untitled Goal"
    }, { new: true })
        .then(goal => {
            if (!goal) {
                return res.status(404).send({
                    message: "Goal not found with id " + req.params.goalId
                });
            }
            res.send(goal);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Goal not found with id " + req.params.goalId
                });
            }
            return res.status(500).send({
                message: "Error updating goal with id " + req.params.goalId
            });
        });
};

// Delete a goal with the specified goalId in the request
exports.delete = (req, res) => {
    Goal.findByIdAndRemove(req.params.goalId)
        .then(goal => {
            if (!goal) {
                return res.status(404).send({
                    message: "Goal not found with id " + req.params.goalId
                });
            }
            res.send({ message: "Goal deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Goal not found with id " + req.params.goalId
                });
            }
            return res.status(500).send({
                message: "Could not delete goal with id " + req.params.goalId
            });
        });
};