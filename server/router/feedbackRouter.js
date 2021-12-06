const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST route
router.post('/', (req, res) => {
    let feedback = req.body;
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
    res.sendStatus(500);
    });
});
                              
module.exports = router;