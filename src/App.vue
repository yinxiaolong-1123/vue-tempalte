<template>
  <system-frame :system-no="systemNo" :breadcrumb="breadcrumb">
    <section slot="routerView" id="project-template-container">
      <router-view> </router-view>
    </section>
  </system-frame>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      systemNo: ccconstants.SYSTEM_NOS.Web_Project_Template || 1008,  // 注册系统编号
      breadcrumb: false,                                              // 是否显示面包屑导航
    };
  }
};
</script>

<style lang="scss">
// 基础公共样式更改
html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}

ul, li {
  list-style: none;
}
</style>
