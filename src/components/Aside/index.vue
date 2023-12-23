<template>
  <div class="aside">
    <el-row>
      <el-col>
        <div
            @click="redirectTo('/compare')"
            :class="{ active: isHomeCompare}"
        >
          <span class="compare-icon"></span>
          图纸对比
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>
          <span class="note-icon"></span>
          历史记录
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AsideComponent",
  methods: {
    redirectTo(router) {
      this.$router.push(router);
    }
  },

  computed: {
    isHomeCompare() {
      return this.$route.name === 'HomeCompare';
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  $aside-background: 'white';
  background: $aside-background;
  height: 100%;

  .el-row {
    $height: 37px;
    box-sizing: content-box;
    height: $height;
    line-height: $height;
    $pad: 16px;
    padding: {
      left: $pad;
      right: $pad;
    };
    margin-bottom: 20px;

    &:first-child {
      padding: {
        top: 20px;
      }
    }

    //&符号表示父选择器
    &:last-child {
      margin-bottom: 0;
    }

    .el-col {
      text-align: left;

      .compare-icon {
        mask: url("/public/images/svg/compare.svg") no-repeat;
      }

      .note-icon {
        mask: url("/public/images/svg/note.svg") no-repeat;
      }

      [class$="-icon"] {
        background: white;
        width: 20px;
        min-height: 20px;
        background: #636d7e;
        vertical-align: text-top;
        display: inline-block;
      }
    }

    .active {
      background: $aside-active-background;
      color: white;

      [class$='-icon'] {
        background: white;
      }
    }
    div {
      padding-left: 20px;
      border-radius: 4px;
    }
  }


}
</style>