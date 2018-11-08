const path = require('path')
module.exports = function (router) {
  /* GET users listing. */
  let routeName = path.parse(__filename).name
  router.get(`/${routeName}`, function(req, res, next) {
    res.send('respond with a resource');
  })
}