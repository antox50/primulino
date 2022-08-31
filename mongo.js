const mongo = require('mongoose')
const { mongo_url } = require('./config.json')

module.exports = {
    init: () => {
        mongo.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        mongo.Promise = global.Promise
        mongo.connection.on('connected', () => {
            console.log('Successfully Connected to Mongoose')
        })

        mongo.connection.on('disconnected', () => {
            console.log('Disconnected from moongose')
        })

        mongo.connection.on('err', () => {
            console.log('Mongose Error')
        })
    }
}