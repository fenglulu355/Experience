<template>
  <div
    class="home-about"
    :style="{backgroundImage: 'url(' + require('../assets/home/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
  >
    <div class="bg">
      <div
        class="topbg"
        :style="{backgroundImage: 'url(' + require('../assets/about/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
    </div>
    <div class="content">
      <div class="prev btn">
        <div
          @click="prev"
          class="mainpic"
          :style="{backgroundImage: 'url(' + require('../assets/about/left.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
        ></div>
      </div>
      <!-- <honer></honer>
      <organized></organized>
      <ldea></ldea>
      <timeline></timeline>
      <intruduece></intruduece>-->
      <router-view></router-view>
      <div class="next btn">
        <div
          @click="next"
          class="mainpic"
          :style="{backgroundImage: 'url(' + require('../assets/about/right.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import honer from "../components/about-Honor";
import organized from "../components/about-organize";
import ldea from "../components/about-ldea";
import timeline from "../components/about-timeline";
import intruduece from "../components/about-intru";
export default {
  name: "about",
  data() {
    return {
      transa: false,
      trans: false
    };
  },
  mounted() {
    this.trans = true;
    this.transa = true;
  },
  methods: {
    prev() {
      if (this.$route.path == "/about") {
        this.$router.push({ path: "/about/honor" });
        return;
      }
      if (this.$route.path == "/about/honor") {
        this.$router.push({ path: "/about/timeline" });
        return;
      }
      if (this.$route.path == "/about/timeline") {
        this.$router.push({ path: "/about/organize" });
        return;
      }
      if (this.$route.path == "/about/organize") {
        this.$router.push({ path: "/about/idea" });
        return;
      }
      if (this.$route.path == "/about/idea") {
        this.$router.push({ path: "/about" });
        return;
      }
    },
    next() {
      if (this.$route.path == "/about") {
        this.$router.push({ path: "/about/idea" });
        return;
      }
      if (this.$route.path == "/about/idea") {
        this.$router.push({ path: "/about/organize" });
        return;
      }
      if (this.$route.path == "/about/organize") {
        this.$router.push({ path: "/about/timeline" });
        return;
      }
      if (this.$route.path == "/about/timeline") {
        this.$router.push({ path: "/about/honor" });
        return;
      }
      if (this.$route.path == "/about/honor") {
        this.$router.push({ path: "/about" });
        return;
      }
    }
  },
  components: {
    honer,
    organized,
    ldea,
    timeline,
    intruduece
  }
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
  position: relative;
  .bg {
    // padding-top: 88px;
    position: absolute;
    top: 88px;
    z-index: 0;
    box-sizing: border-box;
    width: 100%;
    .topbg {
      width: 100%;
      height: 210px;
    }
  }
  .content {
    .btn {
      width: 50px;
      height: 100px;
      position: absolute;
      z-index: 11;
      top: 50%;
      transform: translateY(-50%);
      .mainpic {
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
    }
    .next {
      right: 0;
    }
  }
}
</style>