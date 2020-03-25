var { h } = require('preact')

function Home (match) {
    return function (props) {
        console.log('in here', props)
        return <div>
            <h1>beefdad</h1>
        </div>
    }
}

module.exports = Home

