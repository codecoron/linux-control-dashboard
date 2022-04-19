<template>
  <div id="app">
    <el-radio-group v-model="direction">
      <!-- <el-radio label="ltr"></el-radio> -->
      <!-- <el-radio label="rtl">从右往左开</el-radio>
      <el-radio label="ttb">从上往下开</el-radio>
      <el-radio label="btt">从下往上开</el-radio> -->
    </el-radio-group>

    <el-button @click="drawer = true" type="primary" style="margin-left: 16px">
      菜单
    </el-button>

    <el-drawer
      title="菜单"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>实例详情</span>
    </el-drawer>
  </div>
</template>



<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",
    };
  },
  methods: {
    handleClose(done) {
      done();
      //   this.$confirm("确认关闭？")
      //     .then((_) => {
      //       done();
      //     })
      //     .catch((_) => {});
    },
  },
};
</script>