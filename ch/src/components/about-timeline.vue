<template>
  <div class="ldea">
    <transition name="idea">
      <div class="content" v-if="trans">
        <div class="logo">
          <div class="left-logo">
            <div
              class="mainpic"
              :style="{backgroundImage: 'url(' + require('../assets/about/logo.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
            ></div>
          </div>
          <div class="right-about">
            <p class="cname">关于长湖</p>
            <p class="ename">About Longlake</p>
          </div>
        </div>
        <div class="des clearFix">
          <div class="des-left">
            <vue-scroll :ops="ops">
              <div class="intru">
                <ul class="intrubox">
                  <li class="yearli" v-for="(item, index) in res" :key="index">
                    <p class="year" @click="openYear(index)">{{item.article_y}}年</p>
                  </li>
                </ul>
                <ul
                  class="timelist"
                  v-show="proClass ==index"
                  v-for="(item, index) in res"
                  :key="'a'+index"
                >
                  <li class="timeli title">
                    <p class="thing">长湖大记事</p>
                  </li>
                  <li class="timeli" v-for="(items, index) in item.list" :key="index">
                    <span class="mone">{{items.article_m}}月</span>
                    <p
                      class="thing"
                      v-for="(itemss, index) in items.list"
                      :key="index"
                    >{{itemss.article_content}}</p>
                  </li>
                </ul>
              </div>
            </vue-scroll>
          </div>
          <div class="des-right fr">
            <div
              class="mainpic"
              :style="{backgroundImage: 'url(' + require('../assets/about/timebg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
            ></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "organized",
  data() {
    return {
      open: false,
      proClass: 0,
      transa: false,
      trans: false,
      res: [],
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          scrollingY: true,
          speed: 1000
        },
        rail: {
          background: " #111111",
          opacity: 0,
          size: "5px",
          specifyBorderRadius: false,
          gutterOfEnds: null, //轨道距 x 和 y 轴两端的距离
          gutterOfSide: "0", //距离容器的距离
          keepShow: false, //是否即使 bar 不存在的情况下也保持显示
          border: "none" //边框
        },
        bar: {
          minSize: 0.3,
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "#82c41c" //颜色
        }
      }
    };
  },
  created() {
    this.requst();
  },
  mounted() {
    this.trans = true;
    this.transa = true;
  },
  methods: {
    openYear(index) {
      //   this.open = !this.open
      this.proClass = index;
    },
    requst() {
      this.$axios.post("/index/api/getDsj").then(resa => {
        this.res = resa.data.data;
        // console.log(this.res);
      });
    }
  }
};
</script>
<style lang="less" scoped>
// 左边
.logo-enter-active,
.about-enter-active,
.rtbg-enter-active,
.intru-enter-active,
.idea-enter-active {
  transition: all 1.5s ease-in-out;
}
.logo-enter {
  transform: translateX(-100px);
}
.about-enter {
  transform: translateX(100px);
}
.rtbg-enter {
  transform: translateY(30px);
}
.intru-enter {
  transform: translateX(-50px);
}
.idea-enter {
  transform: translateY(150px);
}

.ldea {
  // background: orange;
  width: 100%;
  position: relative;
  .content {
    box-sizing: border-box;
    width: calc(100% - 50px);
    margin: 0 auto;
    padding: 160px 0 120px 0px;
    min-height: 1000px;
    .logo {
      padding: 30px 40px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      .mainpic {
        width: 123px;
        height: 93px;
      }
      .right-about {
        .cname {
          font-size: 26px;
          color: #ffffff;
          position: relative;
          &::after {
            content: "";
            width: 220px;
            height: 4px;
            background: #82c41c;
            position: absolute;
            top: 60px;
            right: 0;
          }
        }
        .ename {
          padding-top: 50px;
          font-size: 22px;
          color: #bbbbbb;
        }
      }
    }
    .des {
      width: 100%;
      position: relative;
      &::after {
        content: "";
        display: block;
        height: 100px;
      }
      .des-left {
        position: absolute;
        top: 60px;
        z-index: 1;
        width: 65%;
        height: 737px;
        background: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        padding-bottom: 40px;
        .intru {
          width: 100%;
          color: #82c41c;
          box-sizing: border-box;
          padding: 24px 20px;
          display: flex;
          justify-content: space-between;
          .intrubox {
            box-sizing: border-box;
            width: 25%;
            text-align: center;
            .yearli {
              cursor: pointer;
              width: 100%;
              display: flex;
              justify-content: space-around;
              font-size: 18px;
              font-weight: bold;
              padding-bottom: 30px;
            }
          }
          .timelist {
            box-sizing: border-box;
            width: 70%;
            .title {
              font-size: 24px;
              font-weight: bold;
              position: relative;
              .thing {
                height: 87px;
              }
              &::before {
                content: "";
                position: absolute;
                top: 4px;
                left: 52px;
                z-index: 111;
                width: 14px;
                height: 14px;
                background: url("../assets/about/point.png") no-repeat;
                background-size: cover;
              }
            }
            .timeli {
              box-sizing: border-box;
              width: 100%;
              position: relative;
              padding: 0 0 20px 100px;
              .mone {
                color: #cfcfcf;
                position: absolute;
                top: 0;
                left: 0px;
                font-size: 14px;
                &::before {
                  content: "";
                  position: absolute;
                  top: 4px;
                  left: 52px;
                  z-index: 111;
                  width: 14px;
                  height: 14px;
                  background: url("../assets/about/point.png") no-repeat;
                  background-size: cover;
                }
              }
              .thing {
                position: relative;
                width: 80%;
                font-size: 22px;
                min-height: 40px;
                line-height: 35px;
                &::before {
                  content: "";
                  width: 2px;
                  height: 100%;
                  background: #82c41c;
                  position: absolute;
                  position: absolute;
                  top: 21px;
                  left: -42px;
                }
              }
            }
          }
        }
      }
      .des-right {
        width: 50%;
        height: 800px;
        .mainpic {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>