# News App - Backend Integration Setup Guide

This guide will help you transition your News App from a pure frontend application to a secure backend + frontend architecture that hides your API keys.

## 🎯 What We're Building

- **Backend Server**: Express.js server that securely handles NewsAPI requests
- **Frontend**: Updated React app that communicates with the backend
- **Security**: API keys are now hidden server-side and never exposed to the client

## 📁 Project Structure

```
newsapp/
├── src/                    # React frontend
│   ├── components/
│   ├── config.js          # Frontend configuration
│   └── App.js             # Updated to use backend
├── server/                 # Express backend
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   ├── config.env         # Environment variables (API keys)
│   └── README.md          # Backend documentation
└── SETUP.md               # This file
```

## 🚀 Quick Setup

### Step 1: Backend Setup

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Configure your API key:**

   - Edit `config.env` file
   - Replace `your_news_api_key_here` with your actual NewsAPI key

   ```env
   NEWS_API_KEY=your_actual_api_key_here
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the backend server:**

   ```bash
   npm run dev
   ```

   You should see:

   ```
   🚀 News API Backend server running on port 5000
   📰 Health check: http://localhost:5000/api/health
   📊 News endpoint: http://localhost:5000/api/news
   ```

### Step 2: Frontend Setup

1. **Navigate back to the root directory:**

   ```bash
   cd ..
   ```

2. **Install frontend dependencies (if not already done):**

   ```bash
   npm install
   ```

3. **Start the React development server:**

   ```bash
   npm start
   ```

4. **Test the application:**
   - Open http://localhost:3000
   - The app should now fetch news through your backend server

## 🔧 Configuration Options

### Backend Configuration

Edit `server/config.env`:

```env
# NewsAPI Configuration
NEWS_API_KEY=your_actual_api_key_here

# Server Configuration
PORT=5000
NODE_ENV=development
```

### Frontend Configuration

Edit `src/config.js` to change backend URL:

```javascript
const config = {
	API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000',
	// ... other settings
};
```

Or set environment variable in `.env`:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

## 🔒 Security Benefits

### Before (Frontend Only)

- ❌ API key exposed in browser
- ❌ API key visible in network requests
- ❌ API key in client-side code
- ❌ No rate limiting control

### After (Backend + Frontend)

- ✅ API key hidden server-side
- ✅ API key never sent to client
- ✅ Secure proxy for API requests
- ✅ Can implement rate limiting
- ✅ Can add authentication later

## 🧪 Testing

### Test Backend Health

```bash
curl http://localhost:5000/api/health
```

Expected response:

```json
{
	"status": "OK",
	"message": "News API Backend is running",
	"timestamp": "2023-12-19T10:30:00.000Z"
}
```

### Test News API

```bash
curl "http://localhost:5000/api/news?country=us&category=technology"
```

## 🚨 Troubleshooting

### Backend Issues

1. **Port already in use:**

   ```bash
   # Change port in config.env
   PORT=5001
   ```

2. **API key not working:**

   - Verify your NewsAPI key is correct
   - Check if you've exceeded API limits
   - Ensure the key is properly set in `config.env`

3. **CORS errors:**
   - Backend includes CORS configuration
   - If issues persist, check browser console for specific errors

### Frontend Issues

1. **Can't connect to backend:**

   - Ensure backend is running on correct port
   - Check `src/config.js` for correct API_BASE_URL
   - Verify no firewall blocking localhost:5000

2. **Environment variables not working:**
   - Restart React development server after changing `.env`
   - Ensure variable names start with `REACT_APP_`

## 📦 Production Deployment

### Backend Deployment

1. Set `NODE_ENV=production` in environment
2. Use a process manager like PM2
3. Set up proper environment variables on your hosting platform
4. Configure CORS for your production domain

### Frontend Deployment

1. Update `API_BASE_URL` in `config.js` to your production backend URL
2. Build the React app: `npm run build`
3. Deploy the `build` folder to your hosting service

## 🔄 Migration Checklist

- [ ] Backend server created and configured
- [ ] API key moved to backend environment variables
- [ ] Frontend updated to use backend API
- [ ] Configuration files created
- [ ] Both servers running successfully
- [ ] News fetching working through backend
- [ ] API key no longer exposed in frontend
- [ ] Error handling tested
- [ ] Production configuration prepared

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [React Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [CORS Configuration](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## 🆘 Need Help?

If you encounter issues:

1. Check the console logs in both frontend and backend
2. Verify all environment variables are set correctly
3. Ensure both servers are running on the correct ports
4. Test the backend API endpoints directly with curl or Postman
