const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Route files
const exchanges = require('./routes/exchanges');


app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// Mount routers
app.use('/api/rates', exchanges);


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server and exit process
    server.close(() => process.exit(1));
});