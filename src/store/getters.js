/**
 * 全局共用的状态放到这里取(例如登录状态、用户信息), 局部公用的放到相对应的module文件中
 * 此处可能导致局部和全局命名冲突问题
 * 我的解决方案是局部与全局前缀统一，例如local/public
 */
export default {
  publicExampleContent: state => state.example.publicExampleContent,
};