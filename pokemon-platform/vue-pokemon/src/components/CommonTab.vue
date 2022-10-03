<template>
    <div class="tags">
        <el-tag
            v-for="(tag, index) in tags"
            :key="tag.name"
            :closable="tag.name !== 'home'"
            :disable-transitions="false"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
            @click="changeMenu(tag)"
            @close="handleClose(tag, index)"
        >
            {{ tag.label }}
        </el-tag>
    </div>
</template>
  
<script> 
/*
[tag功能]
    1. 首页的tag一开始就会存在，而且是不能进行删除的
    2. 当点击左侧栏的时候, 如果tag没有该菜单名称则新增，如果已经有了那么当前tag背景为蓝色。
    3. 删除当前tag，如果是最后一个，那么路由调整到它前面那个标签并且背景变蓝，如果不是最后一个那么路由调整到它后面那个标签并且背景变蓝。
*/
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        let store = useStore();
        const router = useRouter();
        const route = useRoute();
        const tags = store.state.tabsList;
        const changeMenu = (item) => {
            router.push({
                name: item.name,
            });
        };
        const handleClose = (tag, index) => {
            let length = tags.length -1;
            // 处理vuex中的tabsList
            store.commit("closeTab", tag);
            // 情况1: 当前页与关闭页不一致，不做任何处理
            if (tag.name !== route.name) {
                return;
            }
            if (index === length) {
                // 情况2: 当前页在末尾时，关闭当前页，返回它的前一个页面
                router.push({
                    name: tags[index - 1].name,
                });
            } else {
                // 情况3: 当前页在中间时，关闭当前页，返回它的后一个页面
                router.push({
                    name: tags[index].name,
                });
            }

        };
        return {
            tags,
            changeMenu,
            handleClose,
        }
    }
};
</script>

<style lang="less" scoped>
.tags {
    padding: 20px;
    width: 100%;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>