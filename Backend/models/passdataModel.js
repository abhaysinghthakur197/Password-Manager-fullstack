const { Schema, model } = require('mongoose')

const passdataSchema = new Scheme(
    {
        key: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    }, { timestamps: true }
)

const passdataModel = model('passData', passdataSchema )

module.exports = passdataModel;