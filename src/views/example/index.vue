<template>
  <div id="example">
    <!-- 注意换行 注意代码语义化 注意加注释 -->
    <!-- 全局例子内容 -->
    <header>{{ $store.getters.publicExampleContent }}</header>

    <!-- 局部例子内容 -->
    <nav>{{ $store.getters.localExampleContent }}</nav>

    <!-- 页面主体部分 -->
    <main class="main">
      <img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3">
    </main>

    <!-- 页面页脚部分 -->
    <footer>
      <Example></Example>
      {{ $moment(Date.now()).format('YYYY/MM/DD') }}
    </footer>
  </div>
</template>
<script>
/**
 * 公共组件引入请按照本页面示例
 * 引入名称与相关文件名称保持一致
 * 引入名称大写
 * 使用文件夹命名法
 * 公共组件使用保持大写，用以区分iviewUI
 */
import Example from 'components/example';
export default {
  name: 'example',

  components: { Example },

  mounted() {
    /**
     * vuex个人偏爱链式调用，直观并且减少页面options
     * vuex的辅助函数本质是链式调用语法糖
     * 使用辅助函数注意命名问题，用以区分
     */
    this.$store.dispatch('GET_PUBLIC_TEXT', '全局我丢~');
  },
};
</script>
<style lang="scss" scoped>
#example {
  padding: 10px 25px;
  @keyframes ran {
    from { background-position: 0 0; }
    to { background-position: 2000px 0; }
  }
  header {
    font-size: 35px;
    font-weight: bold;
    background: linear-gradient(45deg, #70f7fe, #fbd7c6, #fdefac, #bfb5dd, #bed5f5);
    background-clip: text;
    color: transparent;
    animation: ran 10s linear infinite;
  }
  nav {
    font-size: 35px;
    font-weight: bold;
    background: linear-gradient(75deg, red, #fbd7c6, blue, #bfb5dd, green);
    background-clip: text;
    color: transparent;
    animation: ran 10s linear infinite;
  }
  main {
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }
}
</style>
