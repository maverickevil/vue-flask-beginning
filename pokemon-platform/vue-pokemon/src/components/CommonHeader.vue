<template>
  <el-header>
    <div class="l-content">
      <!-- 图标的展示 -->
      <el-button size="small" plain @click="handleCollapse">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <el-breadcrumb :separator-icon="ArrowRight" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="getImageUrl('user.jpeg')" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLoginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { computed, defineComponent } from 'vue-demi'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    let store = useStore();

    // vue3中static‘静态资源’的动态引入
    let getImageUrl = (filename) => {
      return new URL(`../assets/images/${filename}`, import.meta.url).href;
    };

    // 调用vuex中的mutations
    let handleCollapse = () => {
      store.commit('updateIsCollapse')
    };

    // 计算属性
    const current = computed(() => {
      return store.state.currentMenu
    });

    const router = useRouter();
    const handleLoginout = () => {
      store.commit("cleanMenu");
      router.push({
        name: 'login',
      });
    };

    return {
      getImageUrl,
      handleCollapse,
      current,
      ArrowRight,
      handleLoginout,
    };
  },
});
</script>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(77, 114, 94);
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #fff;
  }
  :deep(.bread span) {
    color: #fff !important;    // 提高指定样式规则的应用优先权
    cursor: pointer !important;
  }
}
</style>