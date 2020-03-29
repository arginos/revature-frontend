const express = require('express');
const path = require('path');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/app/app.component', require('./src/app/app.component'));
/* app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts')); */

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('src/app'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Serve only the static files form the dist directory
/* app.use(express.static(__dirname + '/src/app'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); */