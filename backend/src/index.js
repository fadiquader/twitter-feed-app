require('dotenv').config()
// ex
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// twitter library to interact with twitter api. (yarn add twitter)
const Twitter = require('twitter');

// initialize twitter with the credentials stored in.env
const twitterClient = new Twitter({
    consumer_key: process.env.CONSUMER_API_KEY,
    consumer_secret: process.env.CONSUMER_API_SECRET_KEY,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const app = express();

/**
 * Content-Type: application/json in the request header
 * present and transforms the text-based JSON input into JS-accessible variables under req.body
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors('*'));

app.get('/api/user-timeline', (req, res) => {
    const { screen_name } = req.query;
    const params = { screen_name: screen_name, count: 10 };
    twitterClient.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (error) {
            res.status(403).json(error)
        } else {
            res.status(200).json(tweets)
        }
    });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, err => {
    if(err) throw err
    console.log('App is listening at port: '+PORT)
})

