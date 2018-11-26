const mongoose = require('mongoose')
const MONGODB_URL = require('./config').MONGODB_URL

mongoose.connect(MONGODB_URL, {// 创建数据库连接
    autoIndex: true // 自动索引
})

const db = mongoose.connection
db.on('error', function (err) {
    throw err
})
db.once('open', function () { console.log(' =================== sql connect success =================== ') })
