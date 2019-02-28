<template>
    
    <div class="homeContainers">
        <div class="home-left">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <img class="mui-media-object mui-pull-left" src="../imgs/1.jpg">
                    <div class="mui-media-body">
                        幸福
                        <div>
                            <img src="../imgs/yuyin.jpg" style="width: 20px;height: 20px"/>
                        </div>
                        <p>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办</p>
                        <div class="home-pic">
                            <img src="../imgs/2.jpeg" />
                            <img src="../imgs/2.jpeg" />
                            <img src="../imgs/2.jpeg" />
                            <img src="../imgs/2.jpeg" />
                            <img src="../imgs/2.jpeg" />
                        </div>

                    </div>
                    <a @click="changeColor"><span :class="'mui-icon-extra mui-icon-extra-heart '+ color "></span></a>
                    <span>已有{{zan}}人点赞</span>
                </li>
            </ul>

        </div>
        <div class="home-right-top">
            标签1

        </div>
        <div class="home-right-bottom">

            标签2
        </div>
    </div>
</template>

<script>
    import 'style-loader!css-loader!./subcss/home.css'
    export default {
        name: "home",
        data(){
           return{
               color:null,
               count:0,
               zan:0,
           }
        },
        methods:{
            changeColor(){
                this.count++;
                if(this.count%2===1) {
                    this.color = 'red' ;
                    this.zan++;
                }else{
                    this.color = '' ;
                    this.zan--;
                }


            }
        }
    }
</script>

<style scoped>

</style>