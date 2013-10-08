var path = require('object-path');
module.exports = function(app, redis) {
  app.get('/:domain/:keypath?', function(req, res) {
    redis.get(req.params.domain, function(err, config) {
      if (err) return next(err);
      else if (config == null) return res.send(404);

      if (!req.params.keypath) return res.json(config);

      var value = path.get(config, keypath)

      if (value == null) return res.send(404);
      else res.json(value);
    })
  });
};
