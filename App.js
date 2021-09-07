import RequestLogger from 'Logger.js';
import express from 'express';

const App = (app) => {
    let logger = new RequestLogger('router')
    app.use('/public', express.static('public'))
    app.get('/', (req, res) => {
        logger.log(req)
        res.redirect("/login")
    })
    app.get('/login', (req, res) => {
        logger.log(req)
        res.sendFile('login.html', {root: 'public'})
    })
    app.get('/register', (req, res) => {
        logger.log(req)
    })
}

export default configureRouting;