export default {
  state: {
    publicExampleContent: '',
    localExampleContent: '局部我丢~'
  },

  //局部使用
  getters: {
    localExampleContent: state => state.localExampleContent
  },

  mutations: {
    SET_EXAMPLE: (state, data) => {
      state.publicExampleContent = data;
    },
  },

  actions: {
    async GET_PUBLIC_TEXT({ commit }, params) {
      // 此处假装数据请求
      const data = params;

      commit('SET_EXAMPLE', data);
    },
  }
};