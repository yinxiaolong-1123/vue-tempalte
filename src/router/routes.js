import example from './config/example';


/**
 * 数组合并
 */
function concatArray(...arr) {
  return arr.reduce((prev, curr) => prev.concat(curr), []);
}

/**
 * 路由数据生成
 */
export default concatArray(
  example,
);
