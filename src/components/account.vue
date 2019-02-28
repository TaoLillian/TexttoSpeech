<template>
    <div class="accContainers">
            <div class="logo">logo</div>
            <div class="copyright">
                <address>
                    Written by Donald Duck.<br>
                </address>
            </div>
            <div class="login">
                <div class="head">
                    <router-link to="/account/login"><a class="black">登录</a></router-link>
                    <span>.</span>
                    <router-link to="/account/regist"><a class="black">注册</a></router-link>
                </div>
                    <div class="body">
                        <router-view></router-view>

                    </div>
            </div>


    </div>

</template>

<script>
    import 'style-loader!css-loader!./subcss/login.css'
    export default {
        name: "account"
    }
</script>

<style scoped>

</style>