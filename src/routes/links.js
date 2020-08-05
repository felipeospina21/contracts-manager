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
	req.flash('success', 'Process saved successfully');
	res.redirect('/links');
});

router.get('/', async (req, res) => {
	const process = await pool.query('SELECT * FROM process');
	res.render('links/list', { process });
});

router.get('/delete/:id', async (req, res) => {
	const { id } = req.params;
	await pool.query('DELETE FROM process WHERE id = ?', [ id ]);
	res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
	const { id } = req.params;
	const process = await pool.query('SELECT * FROM process WHERE id = ?', [ id ]);
	res.render('links/edit', { process: process[0] });
});

router.post('/edit/:id', async (req, res) => {
	const { id } = req.params;
	const { title, creator, description } = req.body;
	const newProcess = { title, creator, description };
	await pool.query('UPDATE process set ? WHERE id = ?', [ newProcess, id ]);
	res.redirect('/links');
});

module.exports = router;
