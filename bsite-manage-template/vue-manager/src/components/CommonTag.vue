<template>
    <div class="tabs">
        <el-tag
            v-for="(item, index) in tags"
            :key="item.name"
            :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'"
            @click="changeMenu(item)"
            @close="handleClose(item, index)"
            size="small"
        >
            {{item.label}}
        </el-tag>
    </div>
</template>
  
<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "CommonTag",
        computed: {
            ...mapState({
                tags: state => state.tab.navsList
            })
        },
        methods: {
            ...mapMutations({
                close: "closeTag"
            }),
            changeMenu(item) {
                this.$router.push({ name: item.name });
            },
            handleClose(tag, index) {
                // 先获取长度，再删除vuex的值，否则会数组长度有问题！
                const len = this.tags.length - 1;

                // 删除vuex中的值
                this.close(tag);

                // 如果点击关闭的tag与当前路由不一致，则无需任何操作
                if (tag.name !== this.$route.name) {
                    return;
                }

                // 如果点击关闭最右侧的tag，路由向左跳转
                if (index === len) {
                    this.$router.push({
                        name: this.tags[index - 1].name
                    })
                } else {
                    // 如果点击中间的tag，路由向右跳转
                    this.$router.push({
                        name: this.tags[index].name
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .tabs {
        padding: 20px;
        .el-tag {
            margin-right: 15px;
            cursor: pointer;
        }
    }
</style>
