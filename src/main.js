import Vue from 'vue'
import App from './App.vue'
import '@/assets/icons';

//element-ui插件的导入和使用
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";
import axios from "axios";


Vue.config.productionTip = false

Vue.use(element)

new Vue({
  router,

  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$axios = axios
  },

  render: h => h(App),
}).$mount('#app')



/*
-----------------------------------------第一部分----------------------------------------
  第一级目录名称小写 二级大写（单文件->index文件）

  0.基础配置（插件，main文件）
* 1.组件（样式）
* 2.路由
* 3.视图（样式）
* 4.图标处理
*
  1.组成一个页面可以由组件也可以由视图
  2.将多个页面组成为一个spa
  3.页面之间跳转使用router路由

  图片展示插件 处理图标

-----------------------------------------第二部分----------------------------------------

  1.配置vuex存储
  2.配置axios
  3.页面布局 编写compare页面
  4.组件编写

* */