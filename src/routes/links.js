const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add', (req, res) => {
	res.render('links/add');
});

router.post('/add', async (req, res) => {
	const { title, creator, description } = req.body;
	const newProcess = { title, creator, description };
	await pool.query('INSERT INTO process set ?', [ newProcess ]);
	res.send('received');
});

router.get('/', async (req, res) => {
	const process = await pool.query('SELECT * FROM process');
	res.render('links/list', { process });
});
module.exports = router;
