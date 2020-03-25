var evs = require('./EVENTS')

function subscribe ({ state, view }) {
    view.on(evs.hello.world, () => state.foo.set('bar'))
}

module.exports = subscribe

