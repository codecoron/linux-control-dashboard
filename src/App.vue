<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // components: { cycle },
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
#loading {
  position: fixed !important;
  z-index: 10;
  height: 50px;
  width: 200px;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
}
#app {
  background: #ebeef2;
}
.searchResult {
  color: #7c7c7c;
  font-size: 12px;
  margin-left: 6px;
}
</style>
