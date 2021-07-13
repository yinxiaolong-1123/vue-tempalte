export default {
  methods: {
    /**
     * 字典遍历，注意与数据字典格式搭配(label, value)
     */
    $dictFilter (dicData = [], valueData = '--') {
      if (valueData === '--') {
        return '--';
      }
    
      for( let item of dicData) {
        if (item.value.toString() === valueData.toString()) {
          return item.label;
        }
      }
    
      return '--';
    },

    /**
     * 数组对象数据遍历更替(无效数据替换为"--")
     */
    $arrObjFormat (arrData = []) {
      arrData.forEach(item => {
        for (let key in item) {
          if (!item[key] && item[key] !== 0) {
            item[key] = "--";
          }
        }
      });
    
      return arrData;
    }
  }
};