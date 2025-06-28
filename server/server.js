const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// NewsAPI base URL
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';

// Routes
app.get('/api/news', async (req, res) => {
	try {
		const {
			country = 'us',
			category = '',
			q = '',
			page = 1,
			pageSize = 20,
		} = req.query;

		// Build the query parameters
		const params = {
			apiKey: process.env.NEWS_API_KEY,
			country,
			page,
			pageSize,
		};

		// Add optional parameters if provided
		if (category) params.category = category;
		if (q) params.q = q;

		// Make request to NewsAPI
		const response = await axios.get(`${NEWS_API_BASE_URL}/top-headlines`, {
			params,
			timeout: 10000,
		});

		res.json(response.data);
	} catch (error) {
		console.error('Error fetching news:', error.message);

		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			res.status(error.response.status).json({
				error: 'News API Error',
				message: error.response.data.message || 'Failed to fetch news',
				status: error.response.status,
			});
		} else if (error.request) {
			// The request was made but no response was received
			res.status(500).json({
				error: 'Network Error',
				message: 'No response received from News API',
			});
		} else {
			// Something happened in setting up the request that triggered an Error
			res.status(500).json({
				error: 'Server Error',
				message: 'Failed to process request',
			});
		}
	}
});

// Health check endpoint
app.get('/api/health', (req, res) => {
	res.json({
		status: 'OK',
		message: 'News API Backend is running',
		timestamp: new Date().toISOString(),
	});
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		error: 'Internal Server Error',
		message: 'Something went wrong!',
	});
});

// 404 handler
app.use('*', (req, res) => {
	res.status(404).json({
		error: 'Not Found',
		message: 'Endpoint not found',
	});
});

app.listen(PORT, () => {
	console.log(`🚀 News API Backend server running on port ${PORT}`);
	console.log(`📰 Health check: http://localhost:${PORT}/api/health`);
	console.log(`📊 News endpoint: http://localhost:${PORT}/api/news`);
});
