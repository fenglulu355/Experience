<template>
  <div class="ldea">
    <transition name="idea">
      <div class="content" v-if="trans">
        <div class="logo">
          <div class="left-logo">
            <img src="../assets/about/logo.png" alt />
          </div>
          <div class="right-about">
            <p class="cname">组织架构</p>
            <p class="ename">Structure</p>
          </div>
        </div>
        <div class="des clearFix">
          <div class="des-left">
            <vue-scroll :ops="ops">
              <div class="desl-top">
                <p class="name">组织架构：</p>
                <p class="infos">
                  总经理：负责整个公司发展规划，制定详细计划，重大项目合作的指导
                  行政部：管理公司所有行政事项，接待客户，公司内勤等事务
                  财务部：负责公司内外资金支出与收入的审计核算
                  客服部：接待客户来电咨询，以及项目完工后，后期客户维护的事情
                  市场部：采购公司所需物资，设备等
                  销售部：负责代表公司与客户进行洽淡，达成合作意向
                </p>
              </div>
              <div class="desl-bot">
                <p class="name">售后服务：</p>
                <p class="infos">
                  1、工程竣工交付使用后，在保修期内，由工程项目负责人带领有关人员定期或不定期回访，听取使用单位对工程质量的意见。
                  2、无论什么原因造成的质量问题，我公司负责无偿保修和换苗。
                  3、质量检验及技术措施。
                  4、各分项工程质量严格执行三检制，对各班定时、定点、部位施工，层层把关，做好质量等级的验评工作。
                  5、所有苗木必须有检疫证明。
                  6、苗木种植前，必须经业主、监理、质检站及有关验收单位签字认可，才能组织下道工序施工。
                  7、苗木的规格及形状必须通过专职质检员的检验，方能进行种植。
                  8、加强成品、半成品的保护工作。
                  9、严格检查制度，做好预防措施。
                  10、检查质量参控措施,检查其是否符合实际，内容是否齐全，是否有针对性，主要检查项目是：
                  A、选择施工队伍的标准；
                  B、项目技术交底内容；
                  C、关键工序质量控制措施；
                  D、细部处理统一施工方法；
                  E、样板工程的质量标准；
                  F、后期养护质量检测方法。
                  11、强化管理监督、落实预控措施。
                  12、组织质检员和各工种班组认真学习质量标准和施工工艺标准，做到每个人员都掌握各自的施工工序和验收标准，精心施工，责任落实到人，保证工程质量。
                  13、严格执行自检、互检、交接检制度，实行主要工程操作者名字、级别质量等级挂牌上墙制、奖优罚劣。
                  14、项目质检员要经常深入施工现场，掌握施工质量动态，分析质量情况，加强检查验收，找出影响的薄弱环节，提出改进措施，把质量问题控制在萌芽状态，推动工程总体质量水平提高。
                </p>
              </div>
            </vue-scroll>
          </div>
          <div class="des-right fr">
            <div
              class="mainpic"
              :style="{backgroundImage: 'url(' + require('../assets/about/organize.png')+ ')',
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
  min-height: 1200px;
  .content {
    box-sizing: border-box;
    width: calc(100% - 50px);
    margin: 0 auto;
    padding: 160px 0 120px 0px;

    .logo {
      box-sizing: border-box;
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
          box-sizing: border-box;
          padding-top: 50px;
          font-size: 22px;
          color: #bbbbbb;
        }
      }
    }
    .des {
      // background: pink;
      width: 100%;
      position: relative;
      &::after {
        content: "";
        display: block;
        height: 400px;
      }
      .des-left {
        position: absolute;
        top: 60px;
        z-index: 1;
        width: 65%;
        height: 737px;
        background: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        padding: 40px 20px;
        .name {
          font-size: 24px;
          color: #82c41c;
          padding-top: 25px;
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
        height: 420px;
        .mainpic {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>