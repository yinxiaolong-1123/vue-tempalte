/**
 * table多选函数提供，具体使用可参考追溯 异常订单配置模块
 * 该多选方法具有一定局限(通过id比对数据是否重复)，数据加_checked表示已选(iView UI)
 * 需注意一定条件下需使用resetTableSelectData方法对数据清空处理
 */
export default {
  data() {
    return {
      selectedTableList: [],        // 当前table列表所有被选择的数据
      currentTableList: [],         // 当前table列表页所选择数据
    };
  },

  methods: {
    /**
     * table单选
     */
    tableSelectHandler(selection, row) {
      this.selectedTableList.push(row);
    },

    /**
     * table单选取消
     */
    tableSelectCancelHandler(selection, row) {
      this.selectedTableList = this.selectedTableList.filter(item => {
        return item.id !== row.id;
      });
    },

    /**
     * table全选
     */
    tableSelectAllHandler(selection) {
      const obj = {};

      this.currentTableList = selection;
      this.selectedTableList = this.selectedTableList.concat(selection).reduce((cur,next) => {
        obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
        return cur;
      },[]);
    },

    /**
     * table全选取消
     */
    tableSelectAllCancelHandler() {
      const indexArr = [];

      this.currentTableList.forEach(item => {
        indexArr.push(item.id);
      });

      this.selectedTableList = this.selectedTableList.filter(item => {
        return indexArr.indexOf(item.id) < 0;
      });
    },

    /**
     * 清空table所选数据
     */
    resetTableSelectData() {
      this.selectedTableList = [];
      this.currentTableList = [];
    },

    /**
     * table数据选中,添加_checked属性(iview UI)
     */
    getSelectedTableData(data = [], key = '') {
      const indexArr = [];

      this.selectedTableList.forEach(item => {
        indexArr.push(item[key]);
      });

      return data.filter(item => {
        item._checked = indexArr.indexOf(item[key]) > -1;

        return item;
      });
    }
  },
};

