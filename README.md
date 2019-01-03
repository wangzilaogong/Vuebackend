# Vue 全家桶实践
## 目录结构
```
├── build                           //构建相关
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                          //webpack配置相关
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── src                             //源代码
│   ├── App.vue                     //入口页面
│   ├── api                         //api 所有请求
│   │   ├── api.js
│   │   └── mock.js                 //mock数据
│   ├── assets                      //主题字体图片等静态资源
│   │   ├── css
│   │   ├── images
│   │   └── js
│   ├── commons                     //通用的页面&组件后期考虑组件分开
│   │   ├── 404
│   │   ├── header
│   │   └── footer
│   ├── components                  //视图层
│   │   └── test
│   ├── config                      //通用开发配置
│   │   └── index.js
│   ├── language                    //多语言
│   │   ├── index.js
│   │   ├── language.js
│   │   └── message.js
│   ├── main.js                     //入口文件·加载组件·初始化
│   ├── router                      //路由设置
│   │   └── index.js
│   ├── utils                      //工具类
│   │   └── tool.js
│   └── vuex                        //全局store管理
│       └── store.js
├── static
└── test                            //测试相关
│    ├── e2e
│    │   ├── custom-assertions
│    │   ├── nightwatch.conf.js
│    │   ├── runner.js
│    │   └── specs
│    └── unit
│        ├── jest.conf.js
│        ├── setup.js
│        └── specs
├── index.html                      //html模板
├── package-lock.json
├── package.json
├── README.md
```
## 目录规范
* commons 基本上是公用组件或者功能页面
* components 视图页面|视图页面需要到子页面，统一一个文件夹
* 。。。