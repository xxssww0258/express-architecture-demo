const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const lessMiddleware = require('less-middleware')
const logger = require('morgan')
const helmet = require('helmet')
const session = require('express-session')
const compression = require('compression')

const config = require('./config')
const router = require('./router')
// require('./database')
const favicon = require('serve-favicon')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(helmet()) // 安全 https://github.com/helmetjs/helmets
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(lessMiddleware(path.join(__dirname, 'public')))
app.use(session({ // session
    secret           : config.SECRECT_SESSION, // 签署会话ID cookie的秘钥
    resave           : false, // 强制会话刷新 好像是手动刷新session的意思
    saveUninitialized: true, // 强制将“未初始化”的会话保存到商店
    cookie           : {
        secure: false,
        maxAge: 1000 * 60 * 60 // 一个小时后过期
    }// 注意这个是https
    // store, // 这个参数是把数据存到
}))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) // favicon
app.use(compression()) // 压缩  不知道会不会出问题
app.use(express.static(path.join(__dirname, 'public')))
//= ======================================= router ========================================
router(app)

//= ======================================= 404or错误处理 ========================================
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    process.env.NODE_ENV === 'development' && console.log(req)
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    process.env.NODE_ENV === 'development' && console.log(err)

    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    switch (req.accepts(['html', 'json'])) {
        case 'html':
            res.render('error')
            break
        case 'json':
            res.send({
                msg: err.message
            })
            break
        default:
            res.send({
                msg: err.message
            })
    }
})

module.exports = app
