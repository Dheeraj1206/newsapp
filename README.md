# News App 📰

A modern news application built with React and Express.js that securely fetches news from NewsAPI while keeping API keys hidden server-side.

## 🏗️ Architecture

This project uses a **backend + frontend** architecture for enhanced security:

- **Frontend**: React.js application for the user interface
- **Backend**: Express.js server that securely handles API requests
- **Security**: API keys are stored server-side and never exposed to the client

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

```bash
# Install all dependencies and setup backend
npm run install-all

# Update your API key in server/config.env
# Then start both frontend and backend
npm run dev
```

### Option 2: Manual Setup

1. **Install frontend dependencies:**

   ```bash
   npm install
   ```

2. **Setup backend:**

   ```bash
   npm run setup-backend
   ```

3. **Configure API key:**

   - Edit `server/config.env`
   - Replace `your_news_api_key_here` with your actual NewsAPI key

4. **Start the application:**

   ```bash
   # Start both frontend and backend
   npm run dev

   # Or start them separately:
   # Terminal 1: npm run backend
   # Terminal 2: npm start
   ```

5. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
newsapp/
├── src/                    # React frontend
│   ├── components/        # React components
│   ├── config.js          # Frontend configuration
│   └── App.js             # Main app component
├── server/                 # Express backend
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   ├── config.env         # Environment variables
│   └── README.md          # Backend documentation
├── SETUP.md               # Detailed setup guide
└── setup-backend.js       # Automated setup script
```

## 🔧 Available Scripts

### Frontend Scripts

- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend Scripts

- `npm run backend` - Start backend in development mode
- `npm run backend:start` - Start backend in production mode

### Combined Scripts

- `npm run dev` - Start both frontend and backend
- `npm run setup-backend` - Setup backend dependencies
- `npm run install-all` - Install all dependencies and setup backend

## 🔒 Security Features

### Before (Frontend Only)

- ❌ API key exposed in browser
- ❌ API key visible in network requests
- ❌ No rate limiting control

### After (Backend + Frontend)

- ✅ API key hidden server-side
- ✅ API key never sent to client
- ✅ Secure proxy for API requests
- ✅ Can implement rate limiting
- ✅ Can add authentication later

## 🌐 API Endpoints

### Backend API (http://localhost:5000)

- `GET /api/health` - Health check
- `GET /api/news` - Fetch news articles
  - Query params: `country`, `category`, `q`, `page`, `pageSize`

### Example Usage

```bash
# Health check
curl http://localhost:5000/api/health

# Get US technology news
curl "http://localhost:5000/api/news?country=us&category=technology"

# Search for "AI" news
curl "http://localhost:5000/api/news?q=AI&country=us"
```

## 🛠️ Configuration

### Backend Configuration

Edit `server/config.env`:

```env
NEWS_API_KEY=your_actual_api_key_here
PORT=5000
NODE_ENV=development
```

### Frontend Configuration

Edit `src/config.js`:

```javascript
const config = {
	API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000',
	// ... other settings
};
```

## 🧪 Testing

1. **Test Backend Health:**

   ```bash
   curl http://localhost:5000/api/health
   ```

2. **Test News API:**

   ```bash
   curl "http://localhost:5000/api/news?country=us&category=technology"
   ```

3. **Test Frontend:**
   - Open http://localhost:3000
   - Navigate through different categories and countries
   - Test search functionality

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use:**

   - Change port in `server/config.env`
   - Or kill existing processes on ports 3000/5000

2. **API key not working:**

   - Verify your NewsAPI key is correct
   - Check if you've exceeded API limits
   - Ensure key is properly set in `config.env`

3. **CORS errors:**

   - Backend includes CORS configuration
   - Check browser console for specific errors

4. **Can't connect to backend:**
   - Ensure backend is running on correct port
   - Check `src/config.js` for correct API_BASE_URL
   - Verify no firewall blocking localhost:5000

## 📦 Production Deployment

### Backend Deployment

1. Set `NODE_ENV=production` in environment
2. Use a process manager like PM2
3. Set up proper environment variables
4. Configure CORS for your production domain

### Frontend Deployment

1. Update `API_BASE_URL` in `config.js` to production backend URL
2. Build: `npm run build`
3. Deploy the `build` folder

## 📚 Documentation

- [Detailed Setup Guide](SETUP.md) - Complete setup instructions
- [Backend Documentation](server/README.md) - Backend-specific docs
- [NewsAPI Documentation](https://newsapi.org/docs) - External API docs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter issues:

1. Check the console logs in both frontend and backend
2. Verify all environment variables are set correctly
3. Ensure both servers are running on the correct ports
4. Test the backend API endpoints directly
5. Check the [troubleshooting section](#-troubleshooting) above
