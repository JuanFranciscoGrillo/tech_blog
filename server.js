const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

// Importing the custom helpers
const helpers = require('./utils/helpers');

// Creating an instance of express-handlebars with the helpers
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3000;

// Setting up Handlebars.js with the custom helpers
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// User routes
const userRoutes = require('./controllers/api/userRoutes');
app.use('/api/users', userRoutes);

// Post routes
const postRoutes = require('./controllers/api/postRoutes');
app.use('/api/posts', postRoutes);

// Comment routes
const commentRoutes = require('./controllers/api/commentRoutes');
app.use('/api/comments', commentRoutes);

// Add other routes (To be implemented)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
