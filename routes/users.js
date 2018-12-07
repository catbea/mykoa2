const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig');
const utils = require('../controllers/utils');

router.prefix('/users')

router.get('/all', async(ctx, next) =>{
  // ctx.body = 'this is a users response!'
  let sql = 'select * from users';
  await userService.query(sql,function(results){
      console.log("打印结果："+JSON.stringify(results));
      ctx.body = results
  });
})


router.post('/addUser', async(ctx, next) =>{
    // ctx.body = 'this is a users response!'
    let sql = 'insert into users(name,age) values("hhh","52")';
    await userService.query(sql,function(results){
        console.log("添加用户："+JSON.stringify(results));
        ctx.body = results
    }).then((data) => {
        let r = '';
        if (data.affectedRows != 0) {
            r = 'ok';
        }
        ctx.body = {
            data: r,
            mess:"添加成功"
        }    

    }).catch((err)=>{
        ctx.body = {
              data: 'err'
          }
    });
  })

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// 增加用户(POST请求)
router.post('/add', async(ctx, next) => {
  let arr = [];

  arr.push(ctx.request.body['name']);
  arr.push(ctx.request.body['pass']);
  arr.push(ctx.request.body['auth']);

  await userService.addUserData(arr)
      .then((data) => {
          let r = '';
          if (data.affectedRows != 0) {
              r = 'ok';
          }
          ctx.body = {
              data: r
          }
      }).catch(() => {
          ctx.body = {
              data: 'err'
          }
      })
})
//星辰笔记start -login
router.post('/userLogin', async(ctx, next) =>{
    var _username = ctx.request.body.username;
    var _userpwd = ctx.request.body.userpwd;

    await userService.userLogin(_username,_userpwd).then((res) => {
        let r = '';
        console.log(res);
        if (res.length) {
            r = 'ok';
            let result = {
                id:res[0].id,
                nickname:res[0].nickname,
                username:res[0].username
            }
            ctx.body = {
                code:"800000",
                data: result,
                mess:"登陆成功"
            }  
        }else{
            r = 'error';
            ctx.body = {
                code:"800004",
                data: r,
                mess:"账号或密码错误"
            }  
        }

    }).catch((err)=>{
        ctx.body = {
            code:"800002",
            data: err
        }
    });
})
/**
 * 注册
 */
router.post('/userRegister', async(ctx, next) =>{    
    var _username = ctx.request.body.username;
    var _userpwd = ctx.request.body.userpwd;
    var _nickname = ctx.request.body.nickname;
    if(!_username&&!_userpwd&&!_nickname){
        ctx.body = {
            code: "800001",
            mess:"用户名密码昵称不能为空"
        }    
        return ;
    }
    let user ={
        username:_username,
        userpwd:_userpwd,
        nickname:_nickname,

    }
    await userService.findUser(user.username).then(async (res)=>{
        if(res.length){
            try {
                throw Error("用户名已存在");
            } catch (error) {
                console.log(error)
            }
            ctx.body = {
                code:"800003",
                data: "err",
                mess:"用户名已存在"
            }   
        }else{
            await userService.insertUser([user.username,user.userpwd,user.nickname]).then((res) => {
                console.log(res);
                let r = '';
                if (res.affectedRows != 0) {
                    r = 'ok';
                    ctx.body = {
                        code:"800000",
                        data: r,
                        mess:"注册成功"
                    }   
                }else{
                    r = 'error';
                    ctx.body = {
                        code:"800004",
                        data: r,
                        mess:"注册失败"
                    }  
                }
        
            }).catch((err)=>{
                ctx.body = {
                    code:"800002",
                    data: err
                  }
            });
        }
    }).catch((err)=>{
        ctx.body = {
            code:"800002",
            data: err
          }
    });

})
//发表笔记
router.post('/insertNote', async(ctx, next) =>{    
    console.log(utils.getNowFormatDate());
    let c_time = utils.getNowFormatDate();
    let m_time = utils.getNowFormatDate();
    let note_content = ctx.request.body.note_content
    let head_img = ctx.request.body.head_img
    let title = ctx.request.body.title
    let note_type = ctx.request.body.note_type
    let userId = ctx.request.body.userId
    let nickname = ctx.request.body.nickname
    await userService.insertNote([c_time,m_time,note_content,head_img,title,note_type,userId,nickname]).then(async (res)=>{
        let r = '';
        if (res.affectedRows != 0) {
            r = 'ok';
            ctx.body = {
                code:"800000",
                data: r,
                mess:"发表成功"
            }   
        }else{
            r = 'error';
            ctx.body = {
                code:"800004",
                data: r,
                mess:"发表失败"
            }  
        }
        
    }).catch((err)=>{
        ctx.body = {
            code:"800002",
            data: err
          }
    });

})

//* 根据分类名查找对应的笔记列表
router.post('/findNoteListByType', async(ctx, next) =>{    
    let note_type = ctx.request.body.note_type
    await userService.findNoteListByType(note_type).then(async (res)=>{
        let r = '';
        if (res.length) {
            r = 'ok';
            ctx.body = {
                code:"800000",
                data: res,
                mess:"查找成功"
            }   
        }else{
            r = 'error';
            ctx.body = {
                code:"800004",
                data: r,
                mess:"查找失败"
            }  
        }
        
    }).catch((err)=>{
        ctx.body = {
            code:"800002",
            data: err
          }
    });

})
//* 根据分类名查找对应的笔记列表
router.post('/findNoteDetailById', async(ctx, next) =>{    
    let id = ctx.request.body.id
    await userService.findNoteDetailById(id).then(async (res)=>{
        let r = '';       
        if (res.length) {
            r = 'ok';
            ctx.body = {
                code:"800000",
                data: res[0],
                mess:"查找成功"
            }   
        }else{
            r = 'error';
            ctx.body = {
                code:"800004",
                data: r,
                mess:"查找失败"
            }  
        }
        
    }).catch((err)=>{
        ctx.body = {
            code:"800002",
            data: err
          }
    });

})
module.exports = router
