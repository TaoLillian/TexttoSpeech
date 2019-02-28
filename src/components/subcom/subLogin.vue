<template>
    <div>
        <input type="text" placeholder="请输入用户名:" style="width: 250px;height: 50px;margin: 0px">
       <input type="password" placeholder=" 请输入用户密码:" style="width: 250px;height: 50px;margin-top: 0px"><br>
        <button>登录</button>
    </div>
</template>

<script>
    import 'style-loader!css-loader!./subcomCSS/login.css'
    export default {
        name: "subLogin"
    }
</script>

<style scoped>

</style>