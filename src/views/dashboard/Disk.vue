<template>
  <div style="width: 300px; height: 150px">
    <!-- <div id="main" style="width: 600px; height: 400px"></div> -->
    <div style="width: 300px; text-align: center"><span>根目录分区/</span></div>
    <div style="width: 300px; height: 150px" ref="chart1"></div>
    <div style="width: 300px; text-align: center">
      <!-- <span>{{ cpu }}/{{ size }}(GB)</span> -->
      <span>{{ cpu }}/{{ size }}(GB)</span>
    </div>

    <!-- <button @click="addcpu()">cpu负载提高</button> -->
  </div>
</template>

  <script>
import * as echarts from "echarts";
import { $diskinfo } from "@/api/index";

export default {
  data() {
    const total = 100;
    var size = 0;
    var cpu = 0;
    var left = 0;
    var cpuper = 0;
    var leftper = 0;
    return {
      total: total,
      cpu: cpu,
      left: left,
      cpuper: cpuper,
      leftper: leftper,
      size: size,
      chartList: {
        chart1: null,
        chart2: null,
        chart3: null,
      },
    };
  },
  created() {},
  mounted() {
    this.draw();
    this.requestdata();
    this.addcpu();
  },
  methods: {
    requestdata() {
      console.log("获取diskinfo数据");
      $diskinfo().then((res) => {
        // console.log(res);
        res.forEach((part) => {
          if (part["Mounted"] === "/") {
            // console.log("in if");
            this.cpu = part["Used"];
            this.left = part["Avail"];
            this.size = part["Size"];
            this.cpuper = Number(part["UsedPer"].replace("%", ""));
            this.leftper = 100 - this.cpuper;
            console.log(this.leftper);
            console.log(this.cpuper);
          }
          // console.log("in foreach");
          // console.log(part);
        });
      });
      // $diskinfo().then(() => {
      //   console.log("in pormise");
      // });
    },
    addcpu() {
      // var requestdata = this.requestdata;
      // setInterval(() => {
      //   // this.cpu++;
      //   // this.left = this.total - this.cpu;
      //   this.requestdata();
      // }, 10000);
      this.cpu = "6G";
      this.left = "12G";
      this.cpuper = 34;
      this.leftper = 66;
      this.size = 18;
    },
    draw() {
      this.chartList.chart1 = echarts.init(this.$refs.chart1);
      // var option;
      // const total = 100;
      // var cpu = 30;
      // var left = total - cpu;
      // option = {
      //   series: [
      //     {
      //       name: "",
      //       type: "pie",
      //       radius: ["40%", "50%"], //圆环大小
      //       center: ["50%", "50%"], //图表的位置
      //       avoidLabelOverlap: false, //是否启用防止标签重叠策略
      //       hoverAnimation: false, //动画效果
      //       label: {
      //         show: false,
      //         position: "center",
      //         formatter: "{d}%", // 显示百分比，
      //       },
      //       data: [
      //         {
      //           value: this.cpu,
      //           itemStyle: {
      //             color: "green",
      //           },
      //           label: {
      //             show: true,
      //           },
      //         },
      //         {
      //           value: this.left,
      //           itemStyle: {
      //             color: "white",
      //           },
      //         },
      //       ],
      //     },
      //   ],
      // };

      setInterval(() => {
        // addcpu();
        // option.series[0].data[0].value = this.cpu;
        // option.series[0].data[0].value = this.left;
        // console.log("cpu:", this.cpu);
        // console.log("left:", this.left);
        this.chartList.chart1.setOption({
          series: [
            {
              name: "",
              type: "pie",
              radius: ["60%", "80%"], //圆环大小
              center: ["50%", "50%"], //图表的位置
              avoidLabelOverlap: false, //是否启用防止标签重叠策略
              hoverAnimation: false, //动画效果
              label: {
                show: false,
                position: "center",
                formatter: "{d}%", // 显示百分比，
              },
              data: [
                {
                  value: this.cpuper,
                  itemStyle: {
                    color: "green",
                  },
                  label: {
                    show: true,
                  },
                },
                {
                  value: this.leftper,
                  itemStyle: {
                    color: "white",
                  },
                },
              ],
            },
          ],
        });
        // console.log(option);
      }, 1000);
      // option && this.chartList.chart1.setOption(option);
    },
  },
};
</script>