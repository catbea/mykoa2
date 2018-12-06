var mysql = require('mysql');
var config = require('./defaultConfig');

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
});


let allServices = {
    query: function (sql,values) {

        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {                  
                    connection.query(sql,values, (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {      
                            resolve(rows);
                        }
                        connection.release()
                    })
                }
            })
        })

    }   
}
/**
 * 注册用户
 */
let insertUser = function (value){
    let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
    return allServices.query(_sql,value);
}
/**
 * 查找用户
 */
let findUser = function (username){
    let _sql = `select * from users where username="${username}";`
    return allServices.query(_sql);
}
/**
 * 用户登陆
 */
let userLogin = function (username,userpwd){
    let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
    return allServices.query(_sql);
}
/**
 * 发表笔记
 *     let c_time = utils.getNowFormatDate();
 *     let m_time = utils.getNowFormatDate();
    let note_content = ctx.request.body.content
    let head_img = ctx.request.body.preImg
    let title = ctx.request.body.title
    let note_type = ctx.request.body.selectCon
    let userId = ctx.request.body.curUserId
 */
let insertNote = function(options){
    let _sql = `insert into note set c_time=?,m_time=?,note_content=?,head_img=?,title=?,note_type=?,useId=?,nickname=?;`
    return allServices.query(_sql,options); 
}
/**
 * 根据分类名查找对应的笔记列表
 */
let findNoteListByType = function (note_type){
    let _sql = `select * from note where note_type="${note_type}";`
    return allServices.query(_sql);
}
/**
 * 根据笔记列表的id查找笔记详情
 */
let findNoteDetailById = function (Id){
    let _sql = `select * from note where id="${Id}";`
    return allServices.query(_sql);
}
module.exports = {
    insertUser,
    findUser,
    userLogin,
    insertNote,
    findNoteListByType,
    findNoteDetailById
}
