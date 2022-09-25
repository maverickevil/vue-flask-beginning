<template>
  <div id="app">
    <router-view></router-view>
  </div> 
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
#app {
  /* 当前浏览器的视窗高度 */
 height: 100vh;
}
</style>
