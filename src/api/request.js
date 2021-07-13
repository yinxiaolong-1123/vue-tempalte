import axios from "axios";
import qs from "qs";
import { requestHeaderParams } from "./params";
import { responseHandler } from "./response";

axios.defaults.timeout = 10000;

/**
 * 请求头参数规则 token + client + version + language + timezone
 */
function getAuthenticator() {
  return `${ccutils.getToken()} ${requestHeaderParams.CLIENT_FLAG} ${
    requestHeaderParams.version
  } ${ccutils.getHeaderLanguage()} ${requestHeaderParams.TIMEZONE_FLAG}`;
}

/**
 * 普通get请求
 */
export const get = async function(url, params = {}) {
  let res = await axios.get(url, {
    params,
    headers: {
      "Ovo-Authorization": getAuthenticator(),
    },
  });

  return responseHandler(res);
};

/**
 * 普通post请求
 */
export const post = async function(url, params = {}) {
  let res = await axios.post(url, qs.stringify(params), {
    headers: {
      "Ovo-Authorization": getAuthenticator(),
    },
  });

  return responseHandler(res);
};

/**
 * json格式的Post请求
 */
export const postJson = async function(url, params = {}) {
  let res = await axios.post(url, params, {
    headers: {
      "Content-Type": "application/json",
      "Ovo-Authorization": getAuthenticator(),
    },
  });

  return responseHandler(res);
};

/**
 * postBody请求
 */
export const postRaw = async function(url, params = {}, bodyParams = []) {
  let res = await axios.post(url + "?" + qs.stringify(params), bodyParams, {
    headers: {
      "Ovo-Authorization": getAuthenticator(),
    },
  });

  return responseHandler(res);
};
