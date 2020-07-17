const path = require('path');

module.exports = {
    output: {
        // https://webpack.js.org/configuration/output/#outputpath
        path: path.resolve(__dirname, 'built')
    },
    optimization: {
        minimize: false
    }
}