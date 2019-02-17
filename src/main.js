import Vue from 'vue';
import VueRouter from 'vue-router'
import router from './router.js';
import app from './app.vue';



Vue.use(VueRouter)

import 'style-loader!css-loader!mint-ui/lib/style.css'
import 'style-loader!css-loader!./lib/mui/css/mui.min.css'
var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c => c(app),


})