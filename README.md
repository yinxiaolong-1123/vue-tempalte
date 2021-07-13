# project-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目结构说明
|—api                         - - 接口文件夹
|  |—example                  - - 接口请求示例
| |—params.js           - - 请求头静态参数文件              
| |—request.js          - - 请求封装文件               
| |—response.js              - - 请求返回校验文件
|—assets                      - - 图片文件夹
|—components                  - - 公共组件文件夹
|—common                      - - 公共js文件夹
| |—mixins                   - - mixins混入文件夹
| |—dict.js                  - - 字典文件
| |—publicMethods.js         - - 公共方法文件
| |—utils.js                 - - 工具文件
|—locale                      - - 翻译文件夹
|—plugins                     - - 插件文件夹
| |—iview-theme              - - iview-theme 主题配置文件
| |—cookie.js                - - cookie 配置文件
| |—i18n.js                  - - i18n 配置文件
| |—iview.js                 - - iview 配置文件
| |—moment.js                - - moment 配置文件
|—router                      - - 路由文件夹
| |—config                   - - 功能模块路由文件夹
| |—index.js                 - - 路由配置文件
| |—routes.js                - - 路由合并文件
|—store                       - - vuex文件夹
| |—modules                  - - vuex modules 文件夹
| |—getters.js               - - vuex getters 文件
| |—index.js                 - - vuex 配置文件
|—views                       - - vue views 文件夹
|—App.vue                     - - vue 入口文件
|—main.js                     - - vue 入口配置文件
|—.eslintrc.js                - - eslint 配置文件
|—.gitignore.js               - - git 不提交配置文件
|—babel.config.js             - - babel 配置文件
|—package.js                  - - 包管理文件
|—vue.config.js               - - vue 项目配置文件

### 项目查看
http://localhost:8080/example?nToken=xxxxx 进行项目查看