<template>
  <div class="home-about">
    <div class="bg">
      <div
        class="topbg"
        :style="{backgroundImage: 'url(' + require('../assets/home/topbg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
      <div
        class="btbg"
        :style="{backgroundImage: 'url(' + require('../assets/home/btbg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
    </div>
    <div class="content">
      <div class="conttop">
        <transition name="lfbg">
          <div v-if="trans" class="lfbg backg">
            <img src="../assets/home/homeabout/bt.png" alt />
          </div>
        </transition>
        <transition name="ctbg">
          <div v-if="trans" class="ctbg backg">
            <img src="../assets/home/homeabout/about.png" alt />
          </div>
        </transition>
        <transition name="rtbg">
          <div v-if="trans" class="rtbg backg">
            <img src="../assets/home/homeabout/logo.png" alt />
          </div>
        </transition>
      </div>
      <div class="contmain">
        <transition name="video">
          <div v-if="trans" class="playvideo">
            <div class="videobg">
              <div
                class="videopic"
                :style="{backgroundImage: 'url(' + require('../assets/home/homeabout/video.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
              ></div>
              <img @click="play" class="play" src="../assets/home/homeabout/play.png" alt />
            </div>
            <div class="videos" v-if="videoPlay">
              <p class="close" @click="close">关闭</p>
              <video controls autoplay>
                <source src="../assets/mp4/video.mp4" />
              </video>
            </div>
          </div>
        </transition>

        <transition name="des">
          <div v-if="trans" class="des">
            <p>
              成都长湖生态环境艺术工程有限公司，是一家专注于水污染治理、生态系统修复、公园湿地景观、高尔夫草坪建造、植物幕墙造景、水生态浮岛绿化、市政景观设计、营造于一体的生态造景公司，公司秉承“保护自然、天人合一”的企业理念，用心创造品牌价值，力求让自然水生态环境回归到人们的生活中。公司2002年成立以来，坚持梦想，用心致力于为客户定制最具贴合度的全方位解决方案，推广公司自主研发的自然生态修复景观治理技术与理念，服务于热爱自然的各类社会团体、企业、个人。现公司现有专业管理人员50人，研发基地1800亩，常年进行生态植物栽培、环境研发的技术人员10余人，自主研发品种100种以上，经过多年的探索与实践，已形成一整套专业的生态营造治理技术，先后参与并完成国内多家数十个项目的生态修复治理工程。
              我们本着“精益求精”“用心经营”创造优质专业产品的发展方向，力争成为了全国最具专业度的生态造景公司
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeabout",
  data() {
    return {
      transa: false,
      trans: false,
      videoPlay: false
    };
  },
  methods: {
    play() {
      this.videoPlay = true;
    },
    close() {
      this.videoPlay = false;
    }
  },
  watch: {
    srcoll(val) {
      if (val <= 2500) {
        this.trans = false;
      } else {
        this.trans = true;
      }
    }
  },
  props: ["srcoll"]
};
</script>
<style lang="less" scoped>
// 左边
.lfbg-enter-active,
.ctbg-enter-active,
.rtbg-enter-active,
.video-enter-active,
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
.video-enter {
  transform: translateX(-50px);
}
.des-enter {
  transform: translateY(50px);
}

.home-about {
  // background: orange;
  width: 100%;
  height: 980px;
  position: relative;
  .bg {
    width: 100%;
    height: 980px;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    .topbg {
      width: 100%;
      height: 280px;
    }
    .btbg {
      width: 100%;
      height: 700px;
    }
  }
  .content {
    width: 100%;
    .conttop {
      width: 100%;
      height: 280px;
      position: relative;
      .backg {
        position: absolute;
      }
      .lfbg {
        top: 70px;
        left: 5%;
      }
      .ctbg {
        right: 21%;
        bottom: 10px;
        z-index: 2;
      }
      .rtbg {
        top: 70px;
        right: 5%;
        z-index: 2;
      }
    }
    .contmain {
      width: 100%;
      position: relative;
      .playvideo {
        position: absolute;
        top: 30px;
        left: 1%;
        width: 70%;
        background: #111111;
        height: 605px;
        .videobg {
          width: 100%;
          height: 100%;
          position: relative;
          .videopic {
            margin: 2%;
            width: 95%;
            height: 90%;
          }
          .play {
            cursor: pointer;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%);
          }
        }
        .videos {
          width: 100%;
          height: 100%;
          video {
            background: #111111;
            position: absolute;
            z-index: 11;
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
          }
          .close {
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 5px;
            z-index: 111;
            color: white;
            background: red;
            width: 3em;
            text-align: center;
            height: 25px;
            line-height: 25px;
          }
        }
      }
      .des {
        border: 10px solid #939393;
        width: 28.3%;
        height: 690px;
        position: absolute;
        top: -130px;
        right: 1%;
        p {
          margin: 180px auto;
          color: white;
          line-height: 24px;
          opacity: 0.8;
          font-size: 14px;
          width: 80%;
        }
      }
    }
  }
}
</style>