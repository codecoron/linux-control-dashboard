<template>
  <div class="">
    <ContentTitle :info="ctInfo" />

    <div>
      <!-- 设备概览 -->
      <div class="mainContent">
        <PreView class="fg1" />
        <!-- 公告 -->
        <el-card class="box-card bc3">
          <template #header>
            <div class="card-header">
              <div>
                <span>通知</span>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="当前管理主机发出的通知和警告。"
                  placement="right"
                >
                  <span class="iconfont icon-askoutline"></span>
                </el-tooltip>
              </div>
            </div>
          </template>
          <ul class="infoList">
            <!-- <li>ABCDEFGHIJKLMNOPQRSTUVWXYZ</li> -->
            <li>
              <p>
                <span class="iconfont icon-info"></span
                ><span>ABCDEFGHIJKLMNOPQRSTUVWXYZ </span>
              </p>
              <span class="cTitme">2020-02-13 14:28:07</span>
            </li>
            <li>
              <span>TODO 太丑了，信息和时间没有间隔</span>
            </li>
            <li>
              <span>TODO 整个card-box 宽度不知道是由什么决定的</span>
            </li>
          </ul>
        </el-card>
      </div>

      <div class="list-box">
        <el-card class="sensor-box box-card bc1 bc4 bc6">
          <template #header>
            <div class="card-header">
              <div>
                <span>「cenots 7」</span>
              </div>
              <span>运行图标</span>
              <span>运行中</span>
            </div>
          </template>
          <ul class="mt-20 list">
            <li class="item flex aic">
              <p>
                <span>主机名称 </span>
                <span class="margin-left=10px margin-right=10px"> : </span>
                <span>izwz996atlhrk55bzhnx5az</span>
              </p>
            </li>
            <li class="item flex aic">
              <p>
                <span>IP </span
                ><span class="margin-left=10px margin-right=10px"> : </span>
                <span>200.201.18.5</span>
              </p>
            </li>
            <li class="item flex aic">
              <p>
                <span>操作系统</span
                ><span class="margin-left=10px margin-right=10px"> : </span>
                <span>CentOS Linux release 7.2.1511 (Core)</span>
              </p>
            </li>
            <li class="item flex aic">
              <p>
                <span>CPU&内存</span
                ><span class="margin-left=10px margin-right=10px"> : </span>
                <span>1核 8Gibt</span>
              </p>
            </li>
            <li class="item flex aic">
              <p>
                <span>网卡数量</span
                ><span class="margin-left=10px margin-right=10px"> : </span>
                <span>1(eth0)</span>
              </p>
            </li>
            <li class="item flex aic">
              <p>
                <span>磁盘数量</span
                ><span class="margin-left=10px margin-right=10px"> : </span>
                <span>1</span>
              </p>
            </li>
            <li class="item flex aic">
              <p>
                <span>描述</span
                ><span class="margin-left=10px margin-right=10px"> : </span>
                <span>Web服务器</span>
              </p>
            </li>
          </ul>

          再插入一些图表信息,负载情况，CPU使用率，内存使用率，磁盘使用率
          <div>
            <load></load>
            <cpu></cpu>
            <memory></memory>
            <disk></disk>
          </div>
          <div>
            <eth></eth>
            <diskio></diskio>
          </div>
        </el-card>
      </div>

      <!-- <div class="list-box" v-for="(value, key) in sensorList" :key="key">
        <el-card class="sensor-box box-card bc1 bc4 bc6">
          <template #header>
            <div class="card-header">
              <div>
                <span>{{ key }}</span>
              </div>
              <div class="boxTools"></div>
            </div>
          </template>
        </el-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import ContentTitle from "@/components/ContentTitle.vue";
// import Chart from "./Chart.vue";
import PreView from "./PreView.vue";
import load from "./Load";
import cpu from "./Cpu";
import memory from "./Memory";
import disk from "./Disk";
import eth from "./eth";
import diskio from "./diskio";
// import { $deviceSensorList } from "@/api";
export default {
  name: "dashboard",
  components: { ContentTitle, PreView, load, cpu, memory, disk, eth, diskio },
  data() {
    return {
      ctInfo: {
        text: "仪表板",
        msg: "主机概览和监控页面",
        a: {
          href: "https://github.com/codecoron",
          text: "访问codecoron的主页",
        },
      },
      sensorList: [],
    };
  },
  created() {
    // this.getSensorList();
  },
  methods: {
    // getSensorList() {
    //   $deviceSensorList().then((res) => {
    //     this.sensorList = res.data;
    //     console.log(this.sensorList);
    //   });
    // },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
.dashboard-sensorlist {
  // margin-top: 10px;
}
.hostinfo {
  margin-left: 20%;
  margin-right: 20%;
}
.list-box {
  width: 100%;
  flex-grow: 1;
  & > * {
    margin: 10px 0 0;
  }

  .bc1 {
    .bcBody {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > img {
        &:first-child {
          width: 51px;
          height: auto;
        }

        &:nth-of-type(2) {
          width: 25px;
          height: auto;
        }
      }

      > .line {
        width: 2px;
        height: 60px;
        background: #e9eef6;

        &:nth-of-type(4) {
          height: 127px;
        }
      }

      > .getway,
      > .devNode {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;

        > span {
          &:nth-of-type(1) {
            font-size: 35px;
            line-height: 45px;
          }
        }
      }
    }
  }

  .bc2 {
    width: 240px;
    margin: 10px 10px 0;

    .monitorList {
      li {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        height: 36px;
        font-weight: 600;

        i {
          width: 46px;
          height: 21px;
          line-height: 21px;
          text-align: center;
          border-radius: 21px;
          background: rgba(85, 179, 100, 0.2);
          color: #3f8c4b;
        }

        &:last-child {
          i {
            background: rgba(236, 70, 78, 0.2);
            color: #ec464e;
          }
        }
      }
    }
  }

  .bc3 {
    .infoList {
      li {
        height: 34px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;

        p {
          span {
            vertical-align: middle;

            &.iconfont {
              font-weight: 600;
              font-size: 16px;
              color: rgb(6, 209, 6);
              margin-right: 3px;
            }
          }
        }
      }
    }
  }

  .bc4 {
    .boxTools {
      span {
        font-size: 22px;
        margin-left: 25px;
        color: #86919b;
        font-weight: 500;
        cursor: pointer;

        &:first-child {
          width: 22px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          color: #379aff;
          border: 1px solid #abafb38a;
          border-radius: 50%;

          &:hover {
            border-color: #379aff;
            box-shadow: 0 0 6px #379bff56;
          }
        }

        &:hover {
          color: #379aff;
        }
      }
    }

    .devList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li.fixed {
        height: 0;
        border: none;
      }
      li {
        position: relative;
        width: 12%;
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        box-shadow: 0 0 12px rgba(212, 212, 212, 0.301);
        margin-bottom: 10px;
        // margin-right: 10px;
        margin: 5px;
        font-size: 14px;

        &:nth-of-type(3n) {
          margin-right: 0;
        }

        > span.icon-Delete {
          position: absolute;
          top: 5px;
          right: 6px;
          font-size: 20px;
          color: #86919b;
          cursor: pointer;
          display: none;
        }

        &:hover > span.icon-Delete {
          display: block;

          &:hover {
            font-weight: 600;
          }
        }

        img {
          width: 15px;
          height: auto;
          margin-top: 20px;
        }

        .devValue {
          font-size: 18px;
          color: #434343;
          font-weight: 600;
          line-height: 24px;
        }

        .devName {
          font-size: 13px;
          color: #434343;
          line-height: 30px;
          font-weight: 600;
        }

        .devInfo {
          background: #f3f4f5;
          display: flex;
          width: 100%;
          color: #030609;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
          line-height: 25px;
        }
      }
    }
  }

  .bc5 {
    width: 1070px;
    margin-left: 10px;
    flex-grow: 1;
    align-self: flex-start;

    .humidityChart {
      height: 250px;
    }
  }

  .card-header {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #1f1f1f;
    font-weight: 600;

    .iconfont {
      font-size: 16px;
      color: #bdc0c4;
      font-weight: 400;
      margin-left: 3px;
    }
  }

  .icon-yalichuanganqi {
    font-size: 48px;
    transform: rotate(180deg);
  }
  .red {
    color: #f56c6c;
  }
}
.devItem {
  width: 25%;
  margin-top: 5px;
}
.server-index {
  align-content: flex-start;
  .card-box {
    width: 30.3%;
    flex-grow: 1;
    &.fix {
      padding-top: 0;
      margin-top: 0;
      height: 0;
      border: 0;
    }
  }
  .list {
    width: 500px;
  }
  .item {
    margin-top: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    justify-content: flex-start;
  }
  .url {
    margin-left: 15px;
  }
}
</style>
