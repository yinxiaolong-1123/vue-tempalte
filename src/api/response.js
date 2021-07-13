import { ERROR_CODE } from "./params";
import { Message } from "view-design";

/**
 * 请求返回数据处理
 * 由于后台返回值暂无统一数据格式，目前只能遇到一种兼容一种
 * 部分后台无数据/请求出错，就返回仅仅一个空数组或者空对象，导致无法确认请求是否出错，
 * 所以部分格式判断只有resolve，无reject
 */
export const responseHandler = (res) => {
  const originData = res.data || {};
  if (
    originData.hasOwnProperty("result") &&
    originData.hasOwnProperty("code")
  ) {
    // 格式1：{ result: ok, code: 0, data: <any> }
    return new Promise((resolve, reject) => {
      if (originData.code === ERROR_CODE.SUCCESS) {
        resolve(originData.data);
      } else if (originData.code === ERROR_CODE.TOKEN_INVALID || ERROR_CODE.LOGOUT_CODE.indexOf(originData.code) > -1) {
        resolve(originData.data);

        Message.error('用户信息过期');
        setTimeout(() => {
          ccutils.goToLoginPage();
        }, 1000);
      } else {
        reject(originData);
      }
    });
  } else if (
    originData.hasOwnProperty("result") &&
    originData.hasOwnProperty("data")
  ) {
    // 格式2：{ result: ok, data: <any> }
    return new Promise((resolve, reject) => {
      if (originData.result === ERROR_CODE.OK) {
        resolve(originData.data);
      } else if (originData.result === ERROR_CODE.TOKEN_INVALID || originData.result === 'TOKEN_EXPIRED') {
        Message.error('用户信息过期');
        reject(originData);
        setTimeout(() => {
          ccutils.goToLoginPage();
        }, 1000);
      } else {
        Message.error(originData.result || '请求返回出错');
        resolve(originData.data);
      }
    });
  } else if (
    originData.hasOwnProperty("isError") &&
    originData.hasOwnProperty("code")
  ) {
    // 格式3：{ result: ok, data: <any> }
    return new Promise((resolve, reject) => {
      if (!originData.isError && originData.code === '0') {
        resolve(originData.data);
      } else {
        reject(originData);
        Message.error('请求返回出错');
      }
    });
  }
  else if (
    originData.hasOwnProperty("status") &&
    originData.hasOwnProperty("data")
  ) {
    // 格式2：{ result: ok, data: <any> }
    // eslint-disable-next-line
    return new Promise((resolve, reject) => {
      if (originData.status === 0) {
        resolve(originData.data);
      } else {
        Message.error(originData.desc || '请求返回出错');
        resolve(originData.data);
      }
    });
  }
};
