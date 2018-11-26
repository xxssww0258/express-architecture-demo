const path = require('path')
module.exports = function (router) {
    let routeName = path.parse(__filename).name
    router.get(`/${routeName}`, function (req, res, next) {
        res.send('<h1>我是user-h1</h1>')
    })
}
