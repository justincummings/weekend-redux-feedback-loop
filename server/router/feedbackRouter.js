// const express = require('express');
// const router = express.Router();
// const pg = require('pg');
// const Pool = pg.Pool;
// const pool = new Pool({
//     database: 'prime_feedback',
//     host: 'localhost'
// });


// router.post("/", (req, res) => {
//     let newFeedback = req.body;

//     const sqlText = `INSERT INTO "feedback" (feeling, understanding, support, comments)
//     VALUES ($1, $2, $3, $4);`;
//     pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
//     .then((result) => {
//         res.sendStatus(201);
//     })
//     .catch((error) => {
//         console.log(`Error adding new feedback`, error);
//         res.sendStatus(500);
//     });
// });

// module.exports = router;