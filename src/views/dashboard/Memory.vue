<template>
  <div style="width: 300px; height: 150px">
    <!-- <div id="main" style="width: 600px; height: 400px"></div> -->
    <div style="width: 300px; text-align: center"><span>内存使用率</span></div>
    <div style="width: 300px; height: 150px" ref="chart1"></div>
    <div style="width: 300px; text-align: center">
      <span>689/1837(MB)</span>
    </div>

    <!-- <button @click="addcpu()">cpu负载提高</button> -->
  </div>
</template>

  <script>
import * as echarts from "echarts";

export default {
  data() {
    const total = 1837;
    var cpu = 639;
    var left = total - cpu;
    return {
      total: total,
      cpu: cpu,
      left: left,
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
    this.addcpu();
  },
  methods: {
    addcpu() {
      // setTimeout(() => {
      //   this.cpu++;
      //   this.left = this.total - this.cpu;
      // }, 1000);
      setInterval(() => {
        this.cpu++;
        this.left = this.total - this.cpu;
      }, 10000);
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
                  value: this.cpu,
                  itemStyle: {
                    color: "green",
                  },
                  label: {
                    show: true,
                  },
                },
                {
                  value: this.left,
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