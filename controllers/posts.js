const Post = require('../models/post');

function indexRoute(req, res, next) {
  console.log('req query q', req.query);
  const regex = new RegExp(req.query.city, 'i');
  const query = { city: regex };

  Post
    .find(query)
    .populate('createdBy')
    .exec()
    .then((posts) => {
      console.log(posts);
      res.render('posts/index', { posts });
    })
    .catch(next);
}

function newRoute(req, res) {
  return res.render('posts/new');
}

function createRoute(req, res, next) {
  req.body.createdBy = req.user;
  if(req.file) req.body.image = req.file.key;

  Post
    .create(req.body)
    .then((post) => res.redirect(`/posts/${post.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/posts/new`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      return res.render('posts/show', { post });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      return res.render('posts/edit', { post });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      for(const field in req.body) {
        post[field] = req.body[field];
      }

      return post.save();
    })
    .then(() => res.redirect(`/posts/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/posts/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      return post.remove();
    })
    .then(() => res.redirect('/posts'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      post.comments.push(req.body); // create an embedded record
      return post.save();
    })
    .then((post) => res.redirect(`/posts/${post.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();
      // get the embedded record by it's id
      const comment = post.comments.id(req.params.commentId);
      comment.remove();

      return post.save();
    })
    .then((post) => res.redirect(`/posts/${post.id}`))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
