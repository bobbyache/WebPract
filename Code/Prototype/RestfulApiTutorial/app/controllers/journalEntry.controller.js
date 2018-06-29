const JournalEntry = require('../models/journalEntry.model.js');

// Create and Save a new JournalEntry
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Journal Entry title can not be empty"
        });
    }

    // Create a JournalEntry
    const journalEntry = new JournalEntry({
        title: req.body.title || "Untitled Journal Entry"
    });

    // Save JournalEntry in the database
    journalEntry.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the JournalEntry."
            });
        });
};

// Retrieve and return all journalEntrys from the database.
exports.findAll = (req, res) => {
    JournalEntry.find()
        .then(journalEntrys => {
            res.send(journalEntrys);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving journalEntrys."
            });
        });
};

// Find a single journalEntry with a journalEntryId
exports.findOne = (req, res) => {
    JournalEntry.findById(req.params.journalEntryId)
        .then(journalEntry => {
            if (!journalEntry) {
                return res.status(404).send({
                    message: "JournalEntry not found with id " + req.params.journalEntryId
                });
            }
            res.send(journalEntry);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "JournalEntry not found with id " + req.params.journalEntryId
                });
            }
            return res.status(500).send({
                message: "Error retrieving journalEntry with id " + req.params.journalEntryId
            });
        });
};

// Update a journalEntry identified by the journalEntryId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Journal Entry title can not be empty"
        });
    }

    // Find journalEntry and update it with the request body
    JournalEntry.findByIdAndUpdate(req.params.journalEntryId, {
        title: req.body.title || "Untitled JournalEntry"
    }, { new: true })
        .then(journalEntry => {
            if (!journalEntry) {
                return res.status(404).send({
                    message: "JournalEntry not found with id " + req.params.journalEntryId
                });
            }
            res.send(journalEntry);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "JournalEntry not found with id " + req.params.journalEntryId
                });
            }
            return res.status(500).send({
                message: "Error updating journalEntry with id " + req.params.journalEntryId
            });
        });
};

// Delete a journalEntry with the specified journalEntryId in the request
exports.delete = (req, res) => {
    JournalEntry.findByIdAndRemove(req.params.journalEntryId)
        .then(journalEntry => {
            if (!journalEntry) {
                return res.status(404).send({
                    message: "JournalEntry not found with id " + req.params.journalEntryId
                });
            }
            res.send({ message: "JournalEntry deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "JournalEntry not found with id " + req.params.journalEntryId
                });
            }
            return res.status(500).send({
                message: "Could not delete journalEntry with id " + req.params.journalEntryId
            });
        });
};