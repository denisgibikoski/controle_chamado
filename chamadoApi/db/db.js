const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/chamados')
}

exports.disconnect = () => {
    mongoose.disconnect()
}