const express = requre('express');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

connection.connect((err) => {
	if (err) {
		console.error('Error connecting to db', err.stack);
		return;
	}

	console.log('Successfully connected to db');
});

app.get('/api/portfolio', (req, res) => {
	const query = `
    SELECT portfolio.*, GROUP_CONCAT(images.image_url) AS images
    FROM portfolio
    LEFT JOIN images ON portfolio.id = images.portfolio_id
    GROUP BY portfolio.id;
    `;

	connection.query(query, (err, results) => {
		if (err) {
			console.error('Error fetching portfolio data: ', error);
			return res.status(500).json({ error: 'Database error' });
		}
		res.json(results);
	});
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
