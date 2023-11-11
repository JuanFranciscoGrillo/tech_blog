const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js as the default template engine.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Add routes (To be implemented)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
