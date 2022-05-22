const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Routes
const structureRoute = require('./routes/structureRoute');

const app = express(); // create an express application
if (process.env.NODE_ENV === 'development') {
  let whitelist = ['http://localhost:4000'];
  let corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };
  app.use(cors(corsOptions));
} else {
  app.use(cors({ credentials: true }));
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views/build')));

app.use('/api/structures', structureRoute);

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/build/index.html"))
})

module.exports = app;
