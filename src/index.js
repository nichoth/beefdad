var ok = require('@nichoth/ok')
var { h } = require('preact')
var struct = require('observ-struct')
var observ = require('observ')
var Router = require('./routes')
var subscribe = require('./subscribe')
var evs = require('./EVENTS')

var state = struct({
    foo: observ('world'),
    route: struct({})  // required
})

var router = Router()

function View (props) {
    // var { emit } = props
    if (props.route.pathname) var m = router.match(props.route.pathname)
    if (m) var RouteView = m.action(m)
    return <RouteView {...props} />
}

var { view } = ok(state, View, document.getElementById('content'))
subscribe({ state, view })

if (process.env.NODE_ENV === 'development') {
    window.app = { state, view, evs }
}

