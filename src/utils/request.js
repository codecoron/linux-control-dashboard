import axios from "axios";
// import { Message, Loading } from "element-ui";
// import store from "../store";
let isDev = process.env.NODE_ENV === "development";
let baseURL;
// 这里idDev为true即开发模式
if (!isDev) {
  // baseURL = "http://localhost:3007";
  baseURL = "http://192.168.28.193:3000";
} else {
  // baseURL = "http://81.71.65.4:3007";
  // baseURL = "http://106.55.50.108:3007";
  // baseURL = "http://localhost:3007";
  baseURL = "http://192.168.28.193:3000";
  // 原本是生产环境才用的地址，但由于不想用本地数据库，所以加个取反!
}

const service = axios.create({
  baseURL,
  timeout: 30000, // 请求超时时间(因为需要调试后台,所以设置得比较大)
});

let loadObj;
// request拦截器
// service.interceptors.request.use(
//   (config) => {
//     let port = 7004; // 7001~7040
//     config.data = {
//       ...config.data,
//       port,
//     };
//     config.params = {
//       ...config.params,
//       port,
//     };
//     if (!loadObj) {
//       loadObj = Loading.service({
//         lock: true,
//         target: "#loading",
//         text: "努力加载中...",
//         spinner: "el-icon-loading",
//         background: "rgba(0, 0, 0, 0.7)",
//       });
//     }
//     // 请求头添加token
//     config.headers["user-token"] = store.state.token;
//     let roleType = store.state.userInfo.type * 1;
//     if (config.method === "post" && roleType === 3) {
//       return Promise.reject({
//         message: "没有权限,请使用管理员账号登录",
//       });
//     } else {
//       return config;
//     }
//   },
//   (error) => {
//     setTimeout(() => {
//       loadObj.close();
//     }, 300);
//     return Promise.reject(error);
//   }
// );

// response 拦截器
// TODO 如何把拦截器都取消？
service.interceptors.response.use(
  (response) => {
    return response.data;
    // setTimeout(() => {
    //   // loadObj.close();
    // }, 300);
    // const res = response.data;
    // // DEBUG
    // console.log(res.code)
    // if (res.code == 666) {
    //   return res;
    // } else {
    //   Message({
    //     message: res.msg,
    //     type: "error",
    //   });
    //   return Promise.reject(res.msg);
    // }
  },
  (error) => {
    // setTimeout(() => {
    //   // loadObj.close();
    // }, 300);
    // Message({
    //   message: error.message,
    //   type: "error",
    // });
    // return Promise.reject(error.message);
  }
);

export default service;
