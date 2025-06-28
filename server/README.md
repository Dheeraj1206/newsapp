# News App Backend

This is the backend server for the News App that securely handles API requests to NewsAPI while keeping the API key hidden from the frontend.

## Features

- 🔒 **Secure API Key Management**: API keys are stored server-side and never exposed to the client
- 🌐 **CORS Enabled**: Allows cross-origin requests from the React frontend
- 📰 **News API Integration**: Proxies requests to NewsAPI with proper error handling
- 🚀 **RESTful Endpoints**: Clean API design for news data retrieval
- ⚡ **Performance**: Includes timeout handling and proper error responses

## Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Configure Environment Variables**

   - Copy `config.env` and update it with your actual NewsAPI key:

   ```bash
   cp config.env.example config.env
   ```

   - Edit `config.env` and replace `your_news_api_key_here` with your actual NewsAPI key

3. **Start the Server**

   ```bash
   # Development mode (with auto-restart)
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### GET `/api/news`

Fetches news articles from NewsAPI.

**Query Parameters:**

- `country` (optional): Country code (e.g., 'us', 'in', 'fr') - defaults to 'us'
- `category` (optional): News category (e.g., 'business', 'technology', 'sports')
- `q` (optional): Search query
- `page` (optional): Page number for pagination - defaults to 1
- `pageSize` (optional): Number of articles per page - defaults to 20

**Example Request:**

```
GET /api/news?country=us&category=technology&page=1
```

**Example Response:**

```json
{
  "status": "ok",
  "totalResults": 100,
  "articles": [...]
}
```

### GET `/api/health`

Health check endpoint to verify the server is running.

**Response:**

```json
{
	"status": "OK",
	"message": "News API Backend is running",
	"timestamp": "2023-12-19T10:30:00.000Z"
}
```

## Error Handling

The API includes comprehensive error handling for:

- Network errors
- NewsAPI errors
- Invalid requests
- Server errors

All errors return appropriate HTTP status codes and descriptive error messages.

## Security

- API keys are stored in environment variables and never exposed to the client
- CORS is configured to allow requests from the React frontend
- Input validation and sanitization
- Proper error handling without exposing sensitive information

## Development

The server runs on port 5000 by default. You can change this by setting the `PORT` environment variable.

For development, the server will automatically restart when files change thanks to nodemon.
