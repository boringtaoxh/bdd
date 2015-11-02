express = require('express')
logger = require('morgan')
bodyParser = require('body-parser')
cookieParser = require('cookie-parser')
session = require('express-session')

module.exports = (app, config) ->
  app.set 'views', config.rootPath + '/public/views'
  app.set 'view engine', 'jade'
  app.use logger('dev')
  app.use cookieParser()
  app.use bodyParser()
  app.use session(
    secret: 'mean'
    saveUninitialized: true
    resave: true)
  app.use express.static(config.rootPath + '/public')
  return