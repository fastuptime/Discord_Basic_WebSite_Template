const express = require('express');
const app = express();
const config = require('./config.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/');

app.get('/', (req, res) => {
    res.render('index', {
        config
    });
});

app.get("/invite", (req, res) => {
    res.redirect(config.bot.invite_url);
});

app.get("/support", (req, res) => {
    res.redirect(config.bot.support_url);
});

app.get("/vote", (req, res) => {
    res.redirect(config.bot.vote_url);
});

app.listen(80, () => {
    console.log('Website is online!');
});