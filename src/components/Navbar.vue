<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="实例详情" name="first">
      <el-descriptions title="基本信息"> </el-descriptions>
      <el-descriptions title="Centos    运行中">
        <el-descriptions-item label="实例ID">akshalksv5a</el-descriptions-item>
        <el-descriptions-item label="IP">200.201.18.5</el-descriptions-item>
        <el-descriptions-item label="主机名">hostname</el-descriptions-item>
        <el-descriptions-item label="操作">
          <button>重启</button>
          <button>关机</button>
          <!-- <el-tag size="small"> 重启</el-tag> -->
          <!-- <el-tag size="small">关机</el-tag> -->
        </el-descriptions-item>
        <el-descriptions-item label=""></el-descriptions-item>
        <el-descriptions-item label="描述">
          <el-tag size="small">描述</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-tab-pane>
    <el-tab-pane label="监控" name="second">监控</el-tab-pane>
    <el-tab-pane label="远程命令/文件" name="third">远程命令/文件 </el-tab-pane>
    <el-tab-pane label="操作记录" name="fourth">操作记录</el-tab-pane>
    <el-tab-pane label="服务安装" name="fifth"> </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<!-- centos(200.201.18.5) -->
<!-- centos(200.201.18.6) -->
<!-- centos(200.201.18.7) -->