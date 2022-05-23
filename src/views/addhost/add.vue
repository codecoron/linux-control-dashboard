<!-- Table -->
<template>
  <div>
    <el-button
      class="host-margin"
      type="text"
      @click="dialogTableVisible = true"
      >现有主机</el-button
    >

    <el-dialog title="受控主机" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="主机名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="接入IP"></el-table-column>
      </el-table>
    </el-dialog>

    <!-- Form -->
    <el-button class="host-margin" type="text" @click="dialogFormVisible = true"
      >添加主机</el-button
    >

    <el-dialog title="添加主机" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="主机Ip" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="root密码" :label-width="formLabelWidth">
          <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select> -->
          <el-input
            v-model="form.password"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addhost">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridData: [
        {
          date: "2022-05-24",
          name: "centos7",
          address: "200.201.20.2",
        },
        {
          date: "2022-05-23",
          name: "centos 7.6",
          address: "200.201.18.5",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        password: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    addhost() {
      console.log("添加主机", this.form.name, this.form.password);
      var mydate = new Date();
      var month = mydate.getMonth() + 1;
      var str_date =
        mydate.getFullYear() + "-" + month + "-" + mydate.getDate();
      this.gridData.push({
        date: str_date,
        name: this.form.name,
        address: this.form.password,
      });
      this.dialogFormVisible = false;
    },
  },
};
</script>


<style>
.host-margin {
  margin-left: 20px;
  margin-right: 20px;
}
</style>