<template>
  <div class="intruduece">
    <div class="content">
      <transition name="des">
        <div class="contmain" v-if="trans">
          <div class="logo">
            <div class="left-logo">
              <img src="../assets/about/logo.png" alt />
            </div>
            <div class="right-about">
              <p class="cname">长湖荣誉</p>
              <p class="ename">Longlake Honor</p>
            </div>
          </div>
          <div class="des">
            <vue-scroll :ops="ops" style="height:445px">
              <ul class="honerlist">
                <li class="honerli" v-for="(item, index) in honerlist" :key="index">
                  <div
                    class="honerpic"
                    :style="{backgroundImage: 'url(' +baseurl+`/public/`+item.image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                  ></div>
                </li>
              </ul>
            </vue-scroll>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import httpUrl from "../utils/url";
export default {
  name: "about",
  data() {
    return {
      baseurl: "",
      transa: false,
      trans: false,
      honerlist: [],
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
          background: "#090909",
          opacity: 0,
          size: "5px",
          specifyBorderRadius: false,
          gutterOfEnds: "4%", //轨道距 x 和 y 轴两端的距离
          gutterOfSide: "1%", //距离容器的距离
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
    this.baseurl = httpUrl.httpUrl;
  },
  mounted() {
    this.trans = true;
    this.transa = true;
  },
  methods: {
    requst() {
      this.$axios.post("/index/api/getRongyu").then(res => {
        this.honerlist = res.data.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
// 左边
// .logo-enter-active,
// .right-enter-active {
//   transition: all 1.5s ease-in-out;
// }
// .logo-enter {
//   transform: translateX(-50px);
// }
// .right-enter {
//   transform: translateX(100px);
// }
.des-enter-active {
  transition: all 1.5s ease-in-out;
}
.des-enter {
  transform: translateY(150px);
}

.intruduece {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  .content {
    width: 100%;
    padding: 160px 0 70px 0;
    .contmain {
      background: rgba(0, 0, 0, 0.5);
      width: calc(100% - 50px);
      margin: 0 auto;
      padding-bottom: 25px;
      border: 10px solid #939393;
      .logo {
        padding: 30px 40px;
        text-align: right;
        display: flex;
        justify-content: space-between;
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
        box-sizing: border-box;

        .honerlist {
          width: calc(100% - 78px);
          margin: 0 auto;
          box-sizing: border-box;
          border-top: 1px dashed #999999;
          border-left: 1px dashed #999999;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .honerli {
            width: 50%;
            height: 220px;
            box-sizing: border-box;
            padding: 37px 40px;
            border-right: 1px dashed #999999;
            border-bottom: 1px dashed #999999;
            .honerpic {
              width: 100%;
              height: 145px;
            }
          }
        }
      }
    }
  }
}
</style>