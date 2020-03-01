<template>
  <div class="honor">
    <div class="content">
      <div class="conttop">
        <transition name="lfbg">
          <div v-if="trans" class="lfbg backg">
            <img src="../assets/home/homeabout/bt.png" alt />
          </div>
        </transition>
        <transition name="ctbg">
          <div v-if="trans" class="ctbg backg">
            <img src="../assets/honer.png" alt />
          </div>
        </transition>
        <transition name="rtbg">
          <div v-if="trans" class="rtbg backg">
            <img src="../assets/home/homeabout/logo.png" alt />
          </div>
        </transition>
      </div>
      <div class="contmain">
        <transition name="honer">
          <div v-if="trans" class="honer">
            <vue-scroll :ops="ops" style="height:545px">
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
        </transition>
        <transition name="des">
          <div v-if="trans" class="des">
            <p class="title">公司荣誉：</p>
            <vue-scroll :ops="ops" style="height:420px">
              <ul class="honer-list">
                <li class="honer-li" v-for="(item, index) in honerlist" :key="index">
                  <p>*{{item.article_title}}</p>
                </li>
              </ul>
            </vue-scroll>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import httpUrl from "../utils/url";
export default {
  name: "honer",
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
          background: " #111111",
          opacity: 1,
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
.lfbg-enter-active,
.ctbg-enter-active,
.rtbg-enter-active,
.honer-enter-active,
.des-enter-active {
  transition: all 1.5s ease-in-out;
}
.lfbg-enter {
  transform: translateX(-100px);
}
.ctbg-enter {
  transform: translateX(20px);
}
.rtbg-enter {
  transform: translateY(30px);
}
.honer-enter {
  transform: translateX(-50px);
}
.des-enter {
  transform: translateY(50px);
}

.honor {
  // background: orange;
  width: 100%;
  height: 1080px;
  position: relative;
  .bg {
    width: 100%;
    height: 1080px;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    .topbg {
      width: 100%;
      height: 360px;
    }
    .btbg {
      width: 100%;
      height: 720px;
    }
  }
  .content {
    width: 100%;
    .conttop {
      width: 100%;
      height: 360px;
      position: relative;
      .backg {
        position: absolute;
      }
      .lfbg {
        top: 150px;
        left: 5%;
      }
      .ctbg {
        right: 21%;
        bottom: 10px;
        z-index: 2;
      }
      .rtbg {
        top: 150px;
        right: 5%;
        z-index: 2;
      }
    }
    .contmain {
      width: 100%;
      position: relative;
      .honer {
        position: absolute;
        top: 30px;
        left: 1%;
        width: 70%;
        background: #111111;
        height: 605px;
        box-sizing: border-box;
        padding: 2% 3% 2% 2%;
        .honerlist {
          width: 95%;
          box-sizing: border-box;
          border-top: 1px dashed #999999;
          border-left: 1px dashed #999999;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .honerli {
            width: 25%;
            height: 220px;
            box-sizing: border-box;
            padding: 2% 2% ;
            border-right: 1px dashed #999999;
            border-bottom: 1px dashed #999999;
            .honerpic {
              width: 100%;
              height: 145px;
            }
          }
        }
      }
      .des {
        box-sizing: border-box;
        border: 10px solid #939393;
        background: #111111;
        width: 29.3%;
        height: 690px;
        position: absolute;
        top: -130px;
        right: 1%;
        padding: 150px 3% 0 2%;
        .title {
          box-sizing: border-box;
          color: white;
          font-size: 18px;
          font-weight: bold;
          position: relative;
          width: 25%;
          padding-bottom: 15px;
          border-bottom: 1px dashed #939393;
             margin-bottom: 20px;
        }
        .honer-list{
          li{
            margin-bottom: 10px;
          }
          p{
            font-size: 14px;
            color: white;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>