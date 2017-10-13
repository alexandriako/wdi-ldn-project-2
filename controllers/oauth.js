const rp = require('request-promise');
const config = require('../config/oauth');
const User = require('../models/user');

function github(req, res, next) {
  return rp({
    method: 'POST',
    url: config.github.accessTokenURL,
    qs: {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code: req.query.code
    },
    json: true
  })
  .then((token) => {
    return rp({
      method: 'GET',
      url: config.github.profileURL,
      qs: token,
      json: true,
      headers: {
        'User-Agent': 'Request-Promise'
      }
    });
  })
  .then((profile) => {
    return User
      .findOne({ $or: [{ githubId: profile.id }, { email: profile.email }] })
      .then((user) => {
        if(!user) {
          user = new User({
            username: profile.login,
            email: profile.email,
            image: 'http://www.oldpotterybarn.co.uk/wp-content/uploads/2015/06/default-medium.png'
          });
        }

        user.githubId = profile.id;
        return user.save();
      });
  })
  .then((user) => {
    req.session.userId = user.id;
    req.session.isAuthenticated = true;

    req.flash('info', `Welcome back, ${user.username}!`);
    res.redirect(`/`);
  })
  .catch(next);
}

function instagram(req, res, next) {
  return rp({
    method: 'POST',
    url: config.instagram.accessTokenUrl,
    form: {
      client_id: config.instagram.clientId,
      client_secret: config.instagram.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: config.instagram.redirectUri,
      code: req.query.code
    },
    json: true
  })
  .then((token) => {
    console.log('token', token);
    return User
    .findOne({ $or: [{ instagramId: token.user.id }, { email: token.user.email }] })
    .then((user) => {
      if(!user) {
        user = new User({
          username: token.user.username,
          image: 'http://www.oldpotterybarn.co.uk/wp-content/uploads/2015/06/default-medium.png'
        });
      }

      user.instagramId = token.user.id;
      return user.save();
    });
  })
  .then((user) => {
    req.session.userId = user.id;
    req.session.isAuthenticated = true;

    req.flash('info', `Welcome back, ${user.username}!`);
    res.redirect(`/`);
  })
  .catch(next);
}

module.exports = {
  github,
  instagram
};
