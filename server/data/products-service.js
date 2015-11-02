var bodyParser;

bodyParser = require('body-parser');

module.exports = function(db, app) {
  app.use(bodyParser.json());
  app.post('/api/products', function(req, res) {
    db.saveProduct(req.body);
    res.end();
  });
};
