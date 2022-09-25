<template>
    <div>
        <h2>{{title}}</h2>
        <!-- 遍历表单 -->
        <form action="#" method="get">
            <div v-for="(value, key) in frontData" class="inner">
                <label :for="key"><span>{{ value }}&nbsp;:</span></label>
                <input v-if="key === 'password'" type="password" :name="key" :placeholder="key" :id="key">
                <input v-else type="text" :name="key" :key="key" :placeholder="key" :id="key">
            </div>
            <br/>
            <input type="submit" value="提交">
        </form>
    </div>
</template>

<script>
    import { getRegisterData } from '../../libs/api.js'
    export default {
        name: "Register",
        data() {
            return {
                title: "注册子标签",
                // 前端mock测试数据 (通常这里定义为空对象)
                frontData: {
                    // username: "账号",
                    // password: "密码",
                    // email: "邮箱",
                    // code: "序列",
                }
            };
        },
        mounted() {
            // 后端取真实数据
            getRegisterData().then((result) => {
                this.frontData = result;
            });
        }
    }
</script>

<style scoped>
    h2 {
        text-align: left;
        color: rgb(101, 101, 215);
    }
    form .inner {
        position: relative; 
        margin-bottom: 15px; 
        width: auto;
    }
    form .inner label span {
        font-weight: normal;
        font-size: 16px;
        color: rgb(108, 93, 73);
    }
    form .inner input {
        position: absolute; 
        color: green; 
        left: 90px;
    }
</style>