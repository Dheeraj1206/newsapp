// Frontend Configuration
const config = {
	// Backend API URL - automatically detects environment
	API_BASE_URL:
		process.env.REACT_APP_API_BASE_URL ||
		(process.env.NODE_ENV === 'production'
			? window.location.origin
			: 'http://localhost:5000'),

	// API endpoints
	ENDPOINTS: {
		NEWS: '/api/news',
		HEALTH: '/api/health',
	},

	// Default settings
	DEFAULTS: {
		COUNTRY: 'us',
		CATEGORY: '',
		PAGE_SIZE: 20,
	},
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
	return `${config.API_BASE_URL}${endpoint}`;
};

export default config;
