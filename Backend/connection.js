const mongoose = require('mongoose')

function mongoDbToConnect(url) {
    return mongoose
        .connect(url)
        .then(() => console.log('connect mongodb'))
        .catch((e) => console.log(e));
}

module.exports = {
    mongoDbToConnect,
}

