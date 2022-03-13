# 项目说明

## 基本介绍

**介绍**：**尚品汇商城**前端服务，本项目基于Vue2开发。

**技术栈**：Vue2全家桶

**主要功能**：商城首页页面、登录注册页面、搜索页面的呈现以及相应的逻辑业务

**项目目录结构**：

```
|-- SPH							#尚品汇
    |-- .gitignore
    |-- babel.config.js			
    |-- jsconfig.json			
    |-- package-lock.json		
    |-- package.json
    |-- README.md
    |-- vue.config.js			#配置跨域代理
    |-- public					#静态资源
    |-- src
        |-- App.vue
        |-- main.js				#入口文件
        |-- api					#统一处理请求
        |-- assets				#组件共用的静态资源
        |-- components			#通用组件
        |-- mock				#请求模拟器
        |-- pages				#路由组件
        |-- router				#配置路由
        |-- store				#vuex仓库
        |-- utils				#其他处理
```

## 运行项目

**初始准备**

安装Git

**克隆项目**

```
git clone git@github.com:jiu2021/SPH-vue2.git
```

**安装依赖**

```
npm install ...
//见package.json文件
```

**启动项目**

```
npm run serve
//服务已在http://localhost:8080启动
```

