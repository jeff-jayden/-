<template>
  <el-container class="main-container">
    <!--    边上得内容-->
    <el-aside class="main-left">
      <div>
        <el-row class="header-row">
          <el-col :span="12">
            <div class="left">对比记录</div>
          </el-col>
          <el-col :span="12">
            <div class="right">
              <svg-icon icon-class="add" @click="openUploadDialog()"/>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="orders">
        <ul>
          <li>
            <el-row class="order">
              <el-col>
                <div>
                  <el-row>
                    <el-col :span="16">
                      <span class="notice">名称：</span>
                      <span>{{
                          111111
                        }}</span>
                    </el-col>

                    <el-col :span="4" class="compare">
                      <a @click="gotoCompareResult(1)">对比</a>
                    </el-col>

                    <el-col :span="4" class="download">
                      <a @click="downloadCompareResult(1)">下载</a>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col>
                      <span class="notice">状态：</span>
                      <span class="success">已完成</span>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col>
                      <span class="notice">时间：</span>
                      <span>{{ 333333 }}</span>
                    </el-col>
                  </el-row>
                  <!--                  <div v-if="!isFoldArray[val.id]">
                                      <el-row>
                                        <el-col class="spilit-line">
                                          <span></span>
                                        </el-col>
                                      </el-row>

                                      <el-row class="file-list">
                                        <el-col :span="20">
                                          <span>{{ val.title ? val.title : "对比1" }}</span>
                                        </el-col>
                                        <el-col :span="4">
                                          <span class="success">已完成</span>
                                        </el-col>
                                      </el-row>

                                      <el-row class="file-list">
                                        <el-col :span="20">
                                          <span>{{ val.title ? val.title : "对比2" }}</span>
                                        </el-col>
                                        <el-col :span="4">
                                          <span class="normal">已完成</span>
                                        </el-col>
                                      </el-row>
                                      <el-row class="time-line">
                                        <el-col :span="2">
                                          <svg-icon
                                              v-if="val.status == '已完成' || true"
                                              icon-class="play"
                                          ></svg-icon>
                                          <svg-icon v-else icon-class="clock"></svg-icon>
                                        </el-col>
                                        <el-col :span="19">
                                          <el-progress
                                              :percentage="val.status == '已完成' || true ? 100 : 0"
                                              :stroke-width="10"
                                              :show-text="false"
                                          >
                                          </el-progress>
                                        </el-col>
                                        <el-col :span="3">
                                          <div>
                                            <span
                                            >{{
                                                val.status == "已完成" || true ? 100 : 0
                                              }}%</span
                                            >
                                          </div>
                                        </el-col>
                                      </el-row>
                                    </div>

                                    <el-row v-if="!isFoldArray[val.id]">
                                      <el-col class="more">
                                        <span class="fold" @click="foldItem(val.id)">收起</span>
                                      </el-col>
                                    </el-row>

                                    <el-row v-else>
                                      <el-col class="more">
                                        <span class="fold" @click="foldItem(val.id)"
                                        >查看更多
                                        </span>
                                        <svg-icon icon-class="angle-bottom"></svg-icon>
                                      </el-col>
                                    </el-row>-->
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </el-aside>

    <!--    主体内容-->
    <el-main class="main-right">
      <el-container>
        <el-header>
          <el-row class="main-right-header">
            <el-col :span="4">
              <span class="gray">图纸名称：</span>
              <span>{{ 1111 }}</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">图纸大小：</span>
              <span>20M</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">图纸分辨率：</span>
              <span>3000*4000</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">红色：</span>
              <span>代表修改部分</span>
            </el-col>
            <el-col :span="5">
              <span class="gray">绿色：</span>
              <span>代表删除部分</span>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <div class="right-main-img">
            <img :src="compareImgUrl" alt=""/>
          </div>
        </el-main>
      </el-container>
    </el-main>

  </el-container>
</template>

<script>

export default {
  name: "CompareIndex",
  components: {
  },
  computed: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      IsUploadDialogShow: false,
      IsPayDialogShow: false,
      compareLogData: [], //数据条目
      currentPage: 0,
      pageSize: 3, //每页数据总数
      totalPages: 0, //总页数
      isLoading: false, //是否在加载中，绑定给loading图标用
      isFoldArray: [],
      compareImgUrl: "",
      compareWorkName: "对比任务",
    }
  },
  beforeUpdate() {
    if (this.compareImgUrl == "") {
      let url = process.env.BASE_URL + "images/251.png";
      this.compareImgUrl = url;
      console.log(process.env.BASE_URL)
    }
  },

  beforeCreate() {

  }
}
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  align-items: stretch;
  padding: 18px;
  box-sizing: border-box;
  $radius: 4px;

  .main-left {
    flex: {
      basis: 23%;
    }
    background: white;
    border-top-left-radius: $radius;
    border-bottom-left-radius: $radius;
    $pad: 20px;
    padding: {
      left: $pad;
      right: $pad;
    }
    border-right: 1px solid #e5e7ed;

    .header-row {
      line-height: 60px;
      font-size: 16px;

      .left {
        text-align: left;
      }

      .right {
        .svg-icon {
          cursor: pointer;
        }

        text-align: right;
      }
    }

    .orders {
      height: 90%;
      overflow-y: auto;

      .order {
        margin-bottom: 20px;
        border: 1px solid #e5e7ed;
        border-radius: 4px;
        padding: 15px;
        text-align: left;

        .more {
          text-align: center;
          color: #25262b;
          margin-top: 0.5em;

          span {
            cursor: pointer;
          }
        }

        .el-row {
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        .success {
          color: #7ebf50;
        }

        .normal {
          color: #347eff;
        }

        .compare,
        .download {
          text-align: right;

          a {
            cursor: pointer;
            color: #347eff;
          }
        }

        .notice {
          color: #a8a8aa;
        }

        .time-line {
          text-align: center;
          line-height: 14px;
          font-size: 14px;

          .svg-icon {
            width: 1.2em;
            height: 1.2em;
            transform: translateY(-15%);
          }

          .el-progress {
            transform: translateY(15%);
          }
        }

        .spilit-line {
          border: 1px solid #e5e7ed;
        }
      }
    }
  }

  .main-right {
    .el-container {
      height: 100%;

    }

    .main-right-header {
      .el-col {
        &:first-of-type {
          text-align: left;
        }

        &:last-of-type {
          text-align: right;
        }
      }
    }

    .right-main-img {
      padding: 20px;
      width: 100%;
      height: 100%;
      border: 1px solid black;

      img {
        width: 100%;
        height: 100%;
      }
    }

    flex-basis: 77%;
    background: white;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}
</style>