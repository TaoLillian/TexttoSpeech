<template>
<div class="app-all">
    <div class="appContainers" style="z-index:111">
        <div class="app-search">
            <label :style="'display:'+ isShow" for="ser">输入关键字</label>
            <input @keyup="input" @blur="show" id="ser" type="text" v-model="keyWords">
            <i :style="'display:'+ isShow" class="mui-icon mui-icon-search"></i>
        </div>
        <div class="app-logo"><img src="./imgs/logo.png" width="70px" height="80px"></div>
        <div class="app-play"><router-link to="/home"><a  class="white"><span class="mui-icon-extra mui-icon-extra-lamp"></span>趣玩</a></router-link></div><br>
        <div class="app-home"><router-link to="/home"><a  class="white"><span class="mui-icon-extra mui-icon-extra-holiday"></span>广场</a></router-link></div><br>
        <div class="app-me" @mouseover="showDiv(1)" @mouseout="showDiv(0)"><img src="./imgs/2.jpeg" style="border-radius: 50%" height="50px" width="60px"/></div><br>
        <div class="app-login"><router-link to="/account"><a class="white"><div class="login-back"><span class="mui-icon mui-icon-paperplane"></span>登录</div></a></router-link></div><br>
        <div id="area" @mouseover="showDiv(1)"  @mouseout="showDiv(0)" class="divList" style="display: none; border:1px solid; z-index:999;border-radius: 10%;border: 0 none">
            <router-link to="/member" class="divList-font"><span class="mui-icon mui-icon-person"></span>我的账户</router-link><br>
            <a class="divList-font"><span class="mui-icon mui-icon-info"></span>关注</a><br>
            <a class="divList-font"><span class="mui-icon mui-icon-chatboxes"></span>消息</a><br>
            <a class="divList-font"><span class="mui-icon mui-icon-compose"></span>发布</a>
        </div>
    </div>


    <div class="canvas" style="z-index:1">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
    import 'style-loader!css-loader!./css/app.css'
    export default {
        name: "app",
        data:function(){
            return {
                isShow:'',
                keyWords:'',
            }
        },
        components:{

        },methods:{
            showDiv(open) {
                document.getElementById('area').style.display = open?'':'none';
            },
            input(){
                this.isShow = 'none' ;
            },
            show(){
                if(this.keyWords === ''){
                    this.isShow = '' ;
                }
                console.log(this.keyWords)

            }
        }

    }
</script>

<style scoped>


</style>