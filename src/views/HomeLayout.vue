<template>
  <el-container id="main-container" :style="'height:'+ windowHeight + 'px'">
    <el-header height="7.1%" class="el-header-header">
      <header-component></header-component>
    </el-header>
    <el-container>

      <el-aside width="200px">
        <aside-component></aside-component>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>


  <!--  放三个东西-->
  <!--  <el-header></el-header>
    <el-asider></el-asider>
    <router-view></router-view>-->
</template>

<script>
import {defineComponent} from "vue";
import HeaderComponent from "@/components/Header";
import AsideComponent from "@/components/Aside/index.vue";

export default defineComponent({
  name: "HomeLayout",
  components: {AsideComponent, HeaderComponent},
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    };
  },
  watch: {},
  mounted() {
    var that = this;
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        that.windowHeight = window.fullHeight; // 高
        that.windowWidth = window.fullWidth; // 宽
      })();
    }
  }


})

</script>

<style lang="scss" scoped>

.el-header-header {
  padding: 0 !important;
}

body {
  background: $html-background;
}

.el-header,
.el-footer {
  text-align: center;
  line-height: 66px;
}

.el-aside {
  text-align: center;
}

.el-main {
  text-align: center;
  padding: 0 !important;
}

.el-container {
  height: 91.7%;
}


</style>