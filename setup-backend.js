#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up News App Backend...\n');

// Check if server directory exists
const serverDir = path.join(__dirname, 'server');
if (!fs.existsSync(serverDir)) {
	console.error(
		'❌ Server directory not found. Please ensure the server folder exists.'
	);
	process.exit(1);
}

try {
	// Navigate to server directory
	process.chdir(serverDir);

	console.log('📦 Installing backend dependencies...');
	execSync('npm install', { stdio: 'inherit' });

	console.log('\n✅ Backend dependencies installed successfully!');

	// Check if config.env exists
	const configPath = path.join(serverDir, 'config.env');
	if (fs.existsSync(configPath)) {
		const configContent = fs.readFileSync(configPath, 'utf8');
		if (configContent.includes('your_news_api_key_here')) {
			console.log(
				'\n⚠️  IMPORTANT: Please update your API key in server/config.env'
			);
			console.log(
				'   Replace "your_news_api_key_here" with your actual NewsAPI key'
			);
		} else {
			console.log('\n✅ API key appears to be configured');
		}
	} else {
		console.log(
			'\n❌ config.env file not found. Please create it with your API key.'
		);
	}

	console.log('\n🎉 Backend setup complete!');
	console.log('\n📋 Next steps:');
	console.log('1. Update server/config.env with your NewsAPI key');
	console.log('2. Start the backend: cd server && npm run dev');
	console.log('3. Start the frontend: npm start (in root directory)');
	console.log('4. Test the application at http://localhost:3000');
} catch (error) {
	console.error('\n❌ Setup failed:', error.message);
	process.exit(1);
}
