const rp = require('request-promise');

function shopstyleProxy(req, res) {
  console.log(req.query);
  rp({
    url: 'http://api.shopstyle.com/api/v2/products',
    qs: {
      pid: process.env.SHOPSTYLE_API_KEY,
      fts: req.query.id,
      offset: req.query.offset || 0,
      limit: 10
    },
    method: 'GET',
    json: true
  })
  .then((shopping) => {
    res.json(shopping);
  });
}

module.exports = {
  proxy: shopstyleProxy
};
