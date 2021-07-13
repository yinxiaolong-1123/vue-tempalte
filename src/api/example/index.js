import { post } from '../request';
import url from './apiList';

export default {
  /**
   * 例子
   */
  getPrivilegeOrganizes(params = {}) {
    return post(url.getPrivilegeOrganizes, params);
  },
};