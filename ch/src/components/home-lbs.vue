<template>
  <div class="home-lb" :style="backgroundImg">
    <!-- 轮播 -->
    <div class="warpper clearFix" @mouseover="clearInv" @mouseout="runInv">
      <!-- 向左向右按钮 -->
      <ul class="slide-pages fr">
        <li class="bottom prev" @click="goto(prevIndex)">
          <img src="../assets/home/pro_left.png" alt />
        </li>
        <li class="pages">
          <div
            class="pages-box"
            :class="{show: index === nowIndex}"
            v-for="(item, index) in slides"
            :key="index"
            @click="goto(index)"
          ></div>
        </li>
        <li class="bottom next" @click="goto(nextIndex)">
          <img src="../assets/home/pro_right.png" alt />
        </li>
      </ul>
      <!-- 图片 -->
      <div class="slide-img">
        <a :href="slides[nowIndex].href">
          <transition name="slide-trans">
            <img v-if="isShow" :src="slides[nowIndex].src" />
          </transition>
          <transition name="slide-trans-old">
            <img v-if="!isShow" :src="slides[nowIndex].src" />
          </transition>
        </a>
      </div>
    </div>
    <div class="toTel clearFix">
      <div class="toteltext fr">
        <p class="text">全国24小时服务热线</p>
        <p class="tel">138-8181-9315</p>
        <p class="bottom">立即咨询</p>
      </div>
    </div>
  </div>
</template>
<script>
import hotle from "./lb-hotle.vue";
import lbtwo from "./lb-tow.vue";
export default {
  name: "homelb",
  data() {
    return {
      backgroundImg: {
        backgroundImage: "url(" + require("@/assets/bg-black.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      nowIndex: 0,
      isShow: true,
      slides: [
        { src: require("../assets/product.png") },
        { src: require("../assets/01.jpg") },
        { src: require("../assets/01.jpg") }
      ]
    };
  },
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  methods: {
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  },
  mounted() {
    this.runInv();
  },
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 3000
    }
  },
  components: {
    hotle,
    lbtwo
  }
};
</script>

<style lang="less" scoped>
img {
  vertical-align: middle;
}
.slide-trans-enter-active {
  transition: all 0.5s linear;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.5s ease-in-out;
  transform: translateX(-900px);
}
.home-lb {
  width: 100%;
  min-width: 1200px;
  .warpper {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    //图片
    .slide-img {
      height: 1000px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // 按钮
    .slide-pages {
      width: 400px;
      height: 170px;
      position: relative;
      .pages {
        width: 200px;
        height: 30px;
        margin: 112px auto;
        display: flex;
        justify-content: space-between;
        .pages-box {
          background: #f5f0f0;
          width: 55px;
          height: 5px;
          cursor: pointer;
        }
        .show {
          background: linear-gradient(to right, #ae6f66, #e3a576);
        }
      }
      .bottom {
        position: absolute;
        bottom: 30px;
        cursor: pointer;
      }
      .next {
        right: 0;
      }
    }
  }
}
.toTel {
  width: 80%;
  min-width: 1200px;
  margin: 0 auto;
  .toteltext {
    box-sizing: border-box;
    padding-top: 25px;
    width: 200px;
    height: 150px;
    color: white;
    text-align: right;
    .text {
      font-size: 13px;
    }
    .tel {
      padding: 5px 0;
      font-size: 20px;
      font-weight: bold;
    }
    .bottom {
      float: right;
      width: 80px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      font-size: 15px;
      border-radius: 15px;
      background: linear-gradient(to right, #ae6f66, #e3a576);
    }
  }
}
</style>