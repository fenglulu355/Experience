<template>
  <div class="home-product">
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <div class="cont">
      <div class="navbox">{{title}}</div>
      <!-- <transition name="slide" mode="out-in">-->
      <keep-alive>
        <component :is="curPage"></component>
      </keep-alive>
      <!--   </transition>-->
      <div class="tabBar">
        <section
          class="tabitem"
          v-for="(item, index) in tabnav"
          :key="index"
          @click="tabClick({item,index})"
        >{{item.title}}</section>
        <!-- <section class="cursor" :style="{left}"></section> -->
      </div>
    </div>
  </div>
</template>

<script>
import bd from "../components/home-map";
export default {
  name: "homeproduct",
  data() {
    return {
      tabnav: [
        { title: "我的主页", page: "Home" },
        { title: "我的新闻", page: "News" },
        { title: "我的关于", page: "About" },
        { title: "个人中心", page: "Mine" }
      ],
      title: "我的主页",
      curPage: "Home"
    };
  },
  mounted() {},
  methods: {
    tabClick({ item, index }) {
      this.curPage = item.page;
      // console.log(item.page);
      this.title = item.title;

      // this.left = 25 * index + "%";
    }
  },
  components: {
    Home: { template: `<div style="background:pink;" class="page">主页</div>` },
    News: bd,
    Mine: {
      template: `<div style="background:orange;" class="page">我的</div>`
    },
    About: {
      template: `<div style="background:blue;"  class="page">关于</div>`
    }
  }
};
</script>
<style lang="less" scoped>