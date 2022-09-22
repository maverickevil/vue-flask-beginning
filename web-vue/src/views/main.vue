<template>
    <!-- layout -->
    <div class="container" style="height: 100%;">
        <h1>Main&nbsp;测试主页</h1>
        <div class="link">
            <a href="/login">登录</a>
            <a href="/register">注册</a>
        </div>
        <hr/>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "home",
        components: {},
        data() {
            return {};
        }
    }
</script>

<style scoped>
    .container h1 {
        text-align: center;
        color: rgb(181, 58, 58);
    }
    .container .link {
        width: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>