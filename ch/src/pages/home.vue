<template>
  <div
    class="home"
    :style="{backgroundImage: 'url(' + require('../assets/home/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
  >
    <!-- 轮播 -->

    <div class="carousel">
      <homebanner id="pro"></homebanner>
    </div>
    <homeproduct :srcoll="scrolldis"></homeproduct>
    <homecase :srcoll="scrolldis"></homecase>
    <homecontact :srcoll="scrolldis"></homecontact>
  </div>
</template>

<script>
import homebanner from "../components/home-banner";
import homeproduct from "../components/home-product";
import homecase from "../components/home-case";
import homeabout from "../components/home-about";
import homecontact from "../components/hmap";
import homenews from "../components/home-news";
export default {
  name: "home",
  data() {
    return {
      scrolldis: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll: function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrolldis = scrollTop;
    }
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    homebanner,
    homeproduct,
    homecase,
    homeabout,
    homecontact,
    homenews
  }
};
</script>
<style lang="less" scoped>
.home {
  // min-width: 1200px;
  width: 100%;
  height: 100%;
}
</style>