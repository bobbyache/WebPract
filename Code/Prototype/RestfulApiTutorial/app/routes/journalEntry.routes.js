module.exports = (app) => {

	/* *****************************************************************************
	Common REST routes for: JournalEntry.
	***************************************************************************** */
    const journalEntrys = require('../controllers/journalEntry.controller.js');
    app.post('/journalEntries', journalEntrys.create); 							/* new JournalEntry */
    app.get('/journalEntries', journalEntrys.findAll); 							/* retrieve all JournalEntrys */
    app.get('/journalEntries/:journalEntryId', journalEntrys.findOne); 	/* find single JournalEntry */
    app.put('/journalEntries/:journalEntryId', journalEntrys.update); 		/* update single JournalEntry */
    app.delete('/journalEntries/:journalEntryId', journalEntrys.delete); 	/* delete single JournalEntry */


}