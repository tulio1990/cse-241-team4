const routes = require('express').Router();

const myController = require('../controllers',);

routes.get('/professional',myController.professional)

module.exports = routes;