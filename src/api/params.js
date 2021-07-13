/**
 * 请求头静态参数
 */
export const requestHeaderParams = {
  TIMEZONE_FLAG: 'GMT+8:00',          // 时区
  CLIENT_FLAG: 'PROJECT_TEMPLATE',    // 模块名
  LANGUAGE: 'SIMPLIFIED_CHINESE',     // 语言
  version: '1.0',                     // 版本号
};

/**
 * 返回请求错误码
 */
 export const ERROR_CODE = {
  OK: 'ok',
  TOKEN_INVALID: 113099,
  SUCCESS: 0,
  LOGOUT_CODE: ["9990001", "9990008", 9990001, 9990008], // token不存在/token失效
};