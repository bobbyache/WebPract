module.exports = (app) => {

	/* *****************************************************************************
	Common REST routes for: Goal.
	***************************************************************************** */
    const goals = require('../controllers/goal.controller.js');
    app.post('/goals', goals.create); 							/* new Goal */
    app.get('/goals', goals.findAll); 							/* retrieve all Goals */
    app.get('/goals/:goalId', goals.findOne); 	/* find single Goal */
    app.put('/goals/:goalId', goals.update); 		/* update single Goal */
    app.delete('/goals/:goalId', goals.delete); 	/* delete single Goal */


}