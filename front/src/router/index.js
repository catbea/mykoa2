import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
import StarRegister from '@/components/register/StarRegister'
import noteClass from '@/components/noteClass/noteClass'
import noteList from '@/components/noteList/noteList'
import noteDetail from '@/components/noteDetail/noteDetail'
import person from '@/components/person/person'
import pulishNote from '@/components/pulishNote/pulishNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta:{
        title:"星辰笔记"
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta:{
        title:"欢迎"
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta:{
        title:"登录"
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: StarRegister,
      meta:{
        title:"注册"
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta:{
        title:"笔记分类"
      }
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: noteList,
      meta:{
        title:"笔记列表"
      }
    },
    {
      path: '/noteDetail',
      name: 'noteDetail',
      component: noteDetail,
      meta:{
        title:"笔记详情"
      }
    },
    {
      path: '/person',
      name: 'person',
      component: person,
      meta:{
        title:"个人页面"
      }
    },
    {
      path: '/pulishNote',
      name: 'pulishNote',
      component: pulishNote,
      meta:{
        title:"写笔记"
      }
    },
  ]
})
