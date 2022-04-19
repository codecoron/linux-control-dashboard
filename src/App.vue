<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button v-on:click="RestartServer">重启</button>
    <Drawer />
    <Navbar />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import VirtualMachine from "./components/VirtualMachine.vue";
import Navbar from "./components/Navbar.vue";
import Drawer from "./components/Drawer.vue";
import axios from "axios";

export default {
  name: "app",
  components: { VirtualMachine, Navbar, Drawer },
  methods: {
    RestartServer() {
      console.log("重启");
      var _this = this;
      _this.loading = true;
      this.$axios
        .get("https://www.bilibili.com/")
        .then((res) => {
          let data = res.data;
          _this.$message({
            type: "success",
            message: "操作成功！系统正在重启，请稍等1-2分钟后刷新页面",
            duration: 5000,
            showClose: true,
          });
        })
        .catch((err) => {
          _this.$message({
            type: "error",
            message: err,
            showClose: true,
          });
        });
    },
  },
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
