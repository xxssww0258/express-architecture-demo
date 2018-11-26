module.exports = {
    ROOT_PATH       : __dirname,
    SERVER_PORT     : '3000', // 服务器端口
    SECRET          : 'jwt', // jwt签名
    SECRECT_SESSION : 'session', // 会话签名
    MONGODB_URL     : 'mongodb://localhost/all', // 数据库地址
    AVATAR_PATH     : 'public/avatar', // 头像存储路径
    ARTICLE_IMG_PATH: 'public/article-img' // 文章里面的上传的图片
}
