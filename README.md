# Express.js Weather API with Rate Limiting and Caching
This project is a simple Express.js application that fetches weather details using an external API. It utilizes rate limiting to control the number of requests and caching to improve performance by storing API responses temporarily. The project uses the needle package for making HTTP requests, apicache for caching, and express-rate-limit for rate limiting.

## Features
- Weather Data Fetching: Fetches weather details using an external API.
- Rate Limiting: Limits the number of requests a user can make within a specific time frame.
- Caching: Temporarily stores API responses to reduce redundant API calls and improve performance.


## Technologies Used
- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A web framework for Node.js used to handle routing and middleware.
- Needle: A lightweight, promise-based HTTP client for making API requests.
- apicache: Middleware for caching API responses in Express.js.
- express-rate-limit: Middleware for rate limiting in Express.js.

## Setup
- Node.js and npm installed on your machine.
- An API key from a weather service provider (e.g., OpenWeatherMap).

# To start the server, run:
- npm start
- The server will start on http://localhost:3000 by default.



