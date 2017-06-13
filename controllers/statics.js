const User = require('../models/user');

function indexRoute(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/index', { users }));
}

function aboutRoute(req, res) {
  res.render('statics/about');
}

function dressCodeRoute(req, res) {
  res.render('statics/dressCode');
}

module.exports = {
  index: indexRoute,
  about: aboutRoute,
  dressCode: dressCodeRoute
};
