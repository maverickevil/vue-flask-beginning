<template>
    <div>
        <h2>{{title}}</h2>
        <span v-html="info"></span>
        <!-- 遍历字典 -->
        <ul>
            <li v-for="(value, key) in frontData">{{key}}: {{ value }}</li>
        </ul>
    </div>
</template>

<script>
    import { getLoginData } from '../../libs/api.js'
    export default {
        name: "Login",
        data() {
            return {
                // v-text: 更新元素的文本内容
                title: "登录子标签",

                // v-html: 在元素中插入 HTML 片段
                info: "<b>[&nbsp;用户基本信息&nbsp;]</b>",

                // 前端 mock 测试数据 (通常这里定义为空对象)
                frontData: {
                    // name: "张三",
                    // passwd: "admin12345",
                    // email: "zhangsan@mail.com",
                    // id: 10001,
                }
            };
        },
        mounted() {
            // 后端取真实数据
            getLoginData().then((result) => {
                this.frontData = result;
            });
        }
    }
</script>

<style scoped>
    h2 {
        text-align: left;
        color: rgb(215, 101, 198);
    }
</style>