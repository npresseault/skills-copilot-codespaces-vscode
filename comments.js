// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create express app
const app = express();

// Use body parser
app.use(bodyParser.json());

// Set up comments route