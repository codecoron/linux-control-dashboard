import $axios from '../utils/request';

// account模块
// export const $accountAdd = (data) => {
//   return $axios.post('/account/add', data);
// }
// export const $accountList = () => {
//   return $axios.get('/account/list');
// }
// export const $accountLogin = (params) => {
//   return $axios.post('/account/login', params);
// }
// export const $accountDel = (data = {}) => {
//   return $axios.post('/account/del', data);
// }

// security模块
// export const $securityAdd = (data) => {
//   return $axios.post('/security/add', data);
// }
// export const $securityList = () => {
//   return $axios.get('/security/list');
// }
// export const $securityEdit = (data = {}) => {
//   return $axios.post('/security/edit', data);
// }
// export const $securityDel = (data = {}) => {
//   return $axios.post('/security/del', data);
// }


// sensor模块(传感器)
// export const $sensorAdd = (data) => {
//   return $axios.post('/sensor/add', data);
// }
// export const $sensorList = (params) => {
//   return $axios.get('/sensor/list', { params });
// }
// export const $sensorDel = (data = {}) => {
//   return $axios.post('/sensor/del', data);
// }
export const $sensorCount = () => {
  return $axios.get('/sensor/count');
}
// export const $sensorChangGroup = (params) => {
//   return $axios.get('/sensor/changeGroup', { params });
// }

// device设备
// export const $deviceCount = () => {
//   return $axios.get('/device/count');
// }
export const $deviceSensorList = () => {
  return $axios.get('/device/sensorList');
}
// 设备群组
// export const $groupList = (data = {}) => {
//   return $axios.post('/group/list', data);
// }
// export const $groupAdd = (data = {}) => {
//   return $axios.post('/group/add', data);//新增设备群组
// }
// export const $groupEdit = (data = {}) => {
//   return $axios.post('/group/edit', data);//编辑群组
// }
// export const $groupDel = (data = {}) => {
//   return $axios.post('/group/del', data);//删除群组
// }
// 设备网关
// export const $gatewayList = (data = {}) => {
//   return $axios.post('/gateway/list', data);
// }


// 计费模块
// export const $feeAdd = (data = {}) => {
//   return $axios.post('/fee/recharge', data); // 充值
// }
// export const $feeDel = (data = {}) => {
//   return $axios.post('/fee/del', data);
// }
// export const $feeEdit = (data = {}) => {
//   return $axios.post('/fee/edit', data);
// }
// export const $feeBalance = (params = {}) => {
//   return $axios.get('/fee/balance', { params });
// }
// export const $feeRechargeList = (params = {}) => {
//   return $axios.get('/fee/rechargeList', { params }); // 充值记录
// }

// export const $feeUsageList = (params = {}) => {
//   return $axios.get('/fee/usageList', { params }); // 使用记录
// }

// 测量类型模块
// export const $measurementList = (params = {}) => {
//   return $axios.get('measurement/list', { params });
// }
// export const $measurementAdd = (data = {}) => {
//   return $axios.post('measurement/add', data);
// }
// export const $measurementEdit = (data = {}) => {
//   return $axios.post('measurement/edit', data);
// }
// export const $measurementDel = (params = {}) => {
//   return $axios.get('measurement/del', { params });
// }