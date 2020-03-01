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
              <p class="cname">关于长湖</p>
              <p class="ename">About Longlake</p>
            </div>
          </div>
          <div class="des">
            <vue-scroll :ops="ops" style="height:445px">
              <p>
                企业简介：【成都长湖生态环境艺术工程有限公司】(长湖水景观赏草，水生植物种植基地) 位于川西平原腹心【郫县和新津】。
                公司一号基地：四川省成都市郫县新民场镇金柏村二组；公司二号基地：成都新津花源镇串头村。 地处西南特大中心城市——成都市近郊，距成都市区仅10公里，交通十分便捷。种植面积200亩以上，生态环境优美；春天百花齐放、夏日花红翠绿、繁花似锦、满园春色，是西南大型的水生植物湿地。
                我场始建于2002年，现有员工50余人，长年专业从事水生植物培植的技术人员10余人，水生植物品种50种以上，储货量800万苗木，公司拥有丰富的种植，栽培技术经验，并拥有百亩以上专业水生植物种植基地，是一家专门从事水生花卉研发与栽培，特殊异型大树及主景景观大树栽植，销售及水面绿化为一体的专业民营企业。
                【 成都长湖生态环境艺术工程有限公司】借助【四川成都】得天独厚的地理环境资源与产品资源优势，依附于科学的管理和专业的团队，心对心、面对面的诚信经营，经过多年的摸索与实践，已形成了一整套专业的种植和推广经验。花卉种植规模初步已形成产、供、销为一体的良好格局，我们本着“精益求精”“用心经营”创造优质专业产品的发展方向，使成都长湖生态环境艺术工程有限公司在西南花卉市场成为绿色生产基地，力争成为了西南****、**具特色的水生植物种植企业。
                企业经营项目：
                ★专业提供：荷花、睡莲、花叶芦竹、香蒲、千屈菜、花叶水葱、青叶水葱、水菖蒲、石菖蒲、马蹄莲、再力花、水生美人蕉、旱伞草【水竹】、黄花鸢尾、西伯利亚鸢尾、马兰花、花叶芒、斑叶芒、细叶芒、狼尾草、玉带草、梭鱼草、金娃娃【萱草】、日本血草、灯心草、沙草、曼陀罗、射干、慈姑、蒲苇、矮蒲苇、天堂鸟【鹤望兰】等植物。
                ★专业承接:公园、庭院、花苑小区、景点旅游、河道绿化、水域置景、沼泽湿地、人工浮岛绿化、污水净化处理、水景设计、施工、养护。
                ★专业提供:园林绿化苗木、园林绿化种子
                ★特殊****异型大树供应：如：异型朴树、异型菩提树、异型柳树、多头银杏、多头朴树、等特殊景观大树及水景大树。
                ★地被植物及园林绿化苗木批发
                ★盆景培育、花木租售
              </p>
            </vue-scroll>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      transa: false,
      trans: false,
      videoPlay: false,
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
  mounted() {
    this.trans = true;
    this.transa = true;
  },
  methods: {
    play() {
      this.videoPlay = true;
    },
    close() {
      this.videoPlay = false;
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

        p {
          box-sizing: border-box;
          margin: 0px auto;
          color: white;
          opacity: 0.8;
          font-size: 14px;
          padding: 0 40px;
          white-space: pre-wrap;
          white-space: pre-line;
          word-break: break-all;
        }
      }
    }
  }
}
</style>