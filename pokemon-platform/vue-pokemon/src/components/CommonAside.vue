<template>
  <el-aside :width="$store.state.isCollapse ? '180px' : '64px'">
    <el-menu 
      class="el-menu-vertical" 
      background-color="#545c64"
      text-color="#fff"
      :collapse="!$store.state.isCollapse"
      :collapse-transition="false"
    >
      <h3 v-show="$store.state.isCollapse">精灵宝可梦平台</h3>
      <h3 v-show="!$store.state.isCollapse">Pokémo</h3>
      <el-menu-item 
        :index="item.path" 
        v-for="item in noChildren()" 
        :key="item.path"
        @click="clickMenu(item)"
      >
        <!-- vue3动态引入icon -->
        <component class="icons" :is="item.icon"></component> 
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu 
        :index="item.label" 
        v-for="item in hasChildren()" 
        :key="item.path"
      >
        <template #title>
          <component class="icons" :is="item.icon"></component> 
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item 
            :index="subItem.path"
            v-for="(subItem, subIndex) in item.children" 
            :key="subIndex"
            @click="clickMenu(subItem)"
          >
            <component class="icons" :is="subItem.icon"></component> 
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    // const list = [
    //   {
    //     path: "/elf",
    //     name: "elf",
    //     label: "图鉴管理",
    //     icon: "SwitchFilled",
    //     url: "ElfManage/ElfManage",
    //   },
    //   {
    //     path: "/user",
    //     name: "user",
    //     label: "用户管理",
    //     icon: "UserFilled",
    //     url: "UserManage/UserManage",
    //   },
    //   {
    //     path: "/other",
    //     label: "其他",
    //     icon: "LocationFilled",
    //     children: [
    //       {
    //         path: "/page1",
    //         name: "page1",
    //         label: "页面1",
    //         icon: "Tools",
    //         url: "Other/PageOne",
    //       },
    //       {
    //         path: "/page2",
    //         name: "page2",
    //         label: "页面2",
    //         icon: "Tools",
    //         url: "Other/PageTwo",
    //       },
    //     ],
    //   },
    // ];

    const store = useStore();
    const router = useRouter();

    // 从vuex中读取列表
    const asyncList = store.state.menu;

    const noChildren = () => {
      // return list.filter((item) => !item.children);
      return asyncList.filter((item) => !item.children);
    };

    const hasChildren = () => {
      // return list.filter((item) => item.children);
      return asyncList.filter((item) => item.children);
    };

    const clickMenu = (item) => {
      router.push({
        name: item.name,
      });
      // 通过vuex来管理
      store.commit("selectMenu", item);
    };

    return {
      noChildren,
      hasChildren,  
      clickMenu,
    };
  },
};
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}
.el-menu {
  border-right: none;
  h3 {
    line-height: 48px;
    color: aliceblue;
    text-align: center;
  }
}
</style>