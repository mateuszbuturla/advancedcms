require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const serverRouter = require('./server.router');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true });
const db = mongoose.connection;
global.db = db;

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

serverRouter(app);

app.listen(port, () => {
    console.log('Server started on: ' + port);
});
