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
              <p class="name">长湖理念</p>
              <p class="infos">
                * 发展理念——创新务实 超越自我 追求卓越
                * 技术理念——日新月异 领先一步
                * 服务理念——人至上,客至尊
                * 人才理念——******且**合适的人
                * 合作理念——开诚布公，互相信任，团结奋斗。
                * 管理理念——文化的熏陶 制度的约束
                * 为人理念——提倡正直诚实、敢于创新、勇于负责的职业精神。
                * 生存理念——不进则退，随时都有灭亡的危险。
                * 追求共赢——以客户为中心，以员工为本，追求员工、公司、客户和社会的共赢。
                * 使 命——提供高品质的网络产品、技术和服务。
                * 发展理念——创新务实 超越自我 追求卓越
                * 技术理念——日新月异 领先一步
                * 服务理念——人至上,客至尊
                * 人才理念——******且**合适的人
                * 合作理念——开诚布公，互相信任，团结奋斗。
                * 管理理念——文化的熏陶 制度的约束
                * 为人理念——提倡正直诚实、敢于创新、勇于负责的职业精神。
                * 生存理念——不进则退，随时都有灭亡的危险。
                * 追求共赢——以客户为中心，以员工为本，追求员工、公司、客户和社会的共赢。
                * 使 命——提供高品质的网络产品、技术和服务。
              </p>
            </vue-scroll>
          </div>
          <div class="des-right fr">
            <div
              class="mainpic"
              :style="{backgroundImage: 'url(' + require('../assets/about/ldeabg.png')+ ')',
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
      transa: false,
      trans: false,
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
  mounted() {
    this.trans = true;
    this.transa = true;
  },
  methods: {}
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
        .name {
          font-size: 24px;
          color: #82c41c;
        }
        .infos {
          font-size: 24px;
          color: #bbbbbb;
          white-space: pre-wrap;
          white-space: pre-line;
          word-break: break-all;
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