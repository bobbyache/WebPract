const mongoose = require('mongoose');

const JournalEntrySchema = mongoose.Schema({
    // Assume this will not be a title... it will be a date. In fact, if the date is the same,
    // you should always append to the journal entry, rather than save to it. Since a journal
    // entry should be a collection of sessions.
    title: String,
}, {
        timestamps: true
    });

module.exports = mongoose.model('JournalEntry', JournalEntrySchema);