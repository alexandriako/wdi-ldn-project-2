const router = require('express').Router();

// Require controllers
const statics       = require('../controllers/statics');
const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
const users = require('../controllers/users');
const oauth = require('../controllers/oauth');

const postsController = require('../controllers/posts');
const citiesController         = require('../controllers/cities');
const secureRoute   = require('../lib/secureRoute');
const upload = require('../lib/upload');
const weatherController = require('../controllers/weather');
const shopstyleController = require('../controllers/shopstyle');


// A home route
router.route('/')
  .get(statics.index);

router.get('/weather', weatherController.proxy);
router.get('/shopstyle', shopstyleController.proxy);

router.route('/about')
  .get(statics.about);

router.route('/dress-code-101')
  .get(statics.dressCode);

router.route('/cities')
  .get(citiesController.index)
  .post(citiesController.create);

router.route('/cities/new')
  .get(citiesController.new);

router.route('/cities/:id')
  .get(citiesController.show)
  .put(secureRoute, citiesController.update)
  .delete(secureRoute, citiesController.delete);


router.route('/cities/:id/edit')
  .get(citiesController.edit);

router.route('/users/:id')
  .get(secureRoute, users.show)
  .post(upload.single('image'), users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/posts')
  .get(postsController.index)
  .post(secureRoute, upload.single('image'), postsController.create);

router.route('/posts/new')
  .get(postsController.new);

router.route('/posts/:id')
  .get(postsController.show)
  .put(secureRoute, postsController.update)
  .delete(secureRoute, postsController.delete);

router.route('/posts/:id/edit')
  .get(postsController.edit);

router.route('/posts/:id/comments')
  .post(secureRoute, postsController.createComment);

router.route('/posts/:id/comments/:commentId')
  .delete(secureRoute, postsController.deleteComment);

router.route('/oauth/github')
  .get(oauth.github);

router.route('/oauth/instagram')
  .get(oauth.instagram);

router.all('*', (req, res) => res.notFound());

module.exports = router;
