const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    account: { // 账号
        index   : true,
        unique  : true,
        required: true,
        type    : String
    },
    password: { // 密码
        required: true,
        type    : String
    },
    username: {
        required: true,
        type    : String
    },
    avatar: { // 头像路径
        required: true,
        type    : String
    },
    isFreeze: { // 是否冻结
        required: true,
        type    : Boolean,
        default : false
    }
}, {
    timestamps: true
})

userSchema.index({ account: 1 })

// userSchema.virtual('createdAtTimestamp').get(function () {
//     return new Date(this.createdAt).getTime()
// })
// userSchema.virtual('updatedAtTimestamp').get(function () {
//     return new Date(this.updatedAt).getTime()
// })

module.exports = mongoose.model('user', userSchema)
    .on('index', function (error) {
        error && console.log(error.message)
    })
