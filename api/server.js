// This file serves as the entry point for Vercel serverless deployment
// It simply re-exports the server from the server directory

// Import the server app
const serverApp = require('../server/server');

// Export the server for Vercel
module.exports = serverApp;
