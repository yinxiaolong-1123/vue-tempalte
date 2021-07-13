import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import iView from "view-design";

Vue.use(VueRouter);

// http://localhost:8080/example?nToken=xxxxx 进行项目查看
const router = new VueRouter({
  mode: "history",
  base: '/project-template/index.html',
  routes,
});

let judgeTimes = 0;

/**
 * 路由拦截处理
 */
router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title);
  iView.LoadingBar.start();

  const ticket = ccutils.getToken();

  if (!ticket) {
    iView.LoadingBar.finish();
    ccutils.goToLoginPage();
  } else if (window.location.href.indexOf('undefined') > -1) {
    judgeTimes = 0;
    goHomePage();
  } else {
    next();
  }
});

/**
 * 路由拦截处理
 */
router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

/**
 * url中含有undefined, 跳转首页
 */
function goHomePage() {
  if (ccutils.judgeSystemServersReady()) {
    ccutils.goToHomePage();
  } else if (judgeTimes > 100) {
    ccutils.goToLoginPage();
    return;
  } else {
    setTimeout(() => {
      goHomePage();
    }, 500);
  }
}

export default router;