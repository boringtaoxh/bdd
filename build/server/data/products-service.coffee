bodyParser = require('body-parser')

module.exports = (db, app) ->
  app.use(bodyParser.json())
  app.post '/api/products', (req, res) ->
    db.saveProduct(req.body)
    res.end()
    return
  return