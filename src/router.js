import VueRouter from 'vue-router'
import account from './components/account.vue'
import home from './components/home.vue'
import member from './components/member.vue'
import subregist from './components/subcom/subRegister.vue'
import sublogin from './components/subcom/subLogin.vue'
import friends from './components/subcom/friends.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/account'},
        {path:'/account',redirect:'/account/login'},
        {path:'/account',component:account,
        children:[
            {path:'regist',component:subregist},
            {path:'login',component:sublogin}
        ]},
        {path:'/member',component:member},
        {path:'/home',component:home},

    ],
    linkActiveClass: 'mui-active'

});

export default router