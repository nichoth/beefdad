var Router = require('ruta3')
var Home = require('./view/home')

var router = Router()

function startRouting () {
    router.addRoute('/', Home)
    return router
}

module.exports = startRouting

