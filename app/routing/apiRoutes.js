var friendsArray = require('../data/friends');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendsArray);
  });

  app.post('/api/friends', function (req, res) {
      var user = req.body;

      res.json(friendsArray);

      res.json(bestMatch(user, friendsArray));

      friendsArray.push(req.body);
    });
};

function bestMatch(user, friendsArray) {


}
