require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

//controllers
const houseCtrl = require('./controllers/houseController.js');

// middlewear
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db is set');
});
app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.post('/api/addHouse', houseCtrl.addHouse);
app.get('/api/houses', houseCtrl.getAllHouses);
app.delete('/api/deleteHouse', houseCtrl.deleteHouse);





app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))