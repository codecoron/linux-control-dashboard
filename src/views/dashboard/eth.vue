<template>
  <div style="width: 600px; height: 400px">
    <div><span>流量 kB/s</span></div>
    <div style="width: 600px; height: 400px" ref="chart1"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    var base = +new Date(2014, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];
    var data = [Math.random() * 150];
    var now = new Date(base);

    return {
      base: base,
      oneDay: oneDay,
      date: date,
      data: data,
      now: now,
      chart1: null,
    };
  },
  mounted() {
    this.initData();
    this.draw();
  },
  methods: {
    initData() {
      for (var i = 1; i < 100; i++) {
        this.addData();
      }
    },
    addData(shift) {
      var now = this.now;
      var date = this.date;
      var data = this.data;
      var oneDay = this.oneDay;

      now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/");
      date.push(now);
      data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);
      if (shift) {
        date.shift();
        data.shift();
      }
      now = new Date(+new Date(now) + oneDay);
    },
    draw() {
      this.chart1 = echarts.init(this.$refs.chart1);
      var mychart = this.chart1;
      var date = this.date;
      var data = this.data;

      var option;
      option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          boundaryGap: [0, "50%"],
          type: "value",
        },
        series: [
          {
            name: "成交",
            type: "line",
            smooth: true,
            symbol: "none",
            stack: "a",
            areaStyle: {
              normal: {},
            },
            data: data,
          },
        ],
      };

      var addData = this.addData;
      setInterval(function () {
        addData(true);
        mychart.setOption({
          xAxis: {
            data: date,
          },
          series: [
            {
              name: "成交",
              data: data,
            },
          ],
        });
      }, 500);

      option && mychart.setOption(option);
    },
  },
};
</script>