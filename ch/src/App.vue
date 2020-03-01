<template>
  <div id="app">
    <navgation></navgation>
    <router-view  />
    <chfooter></chfooter> 
  </div>
</template>

<script>
import navgation from "../src/components/navgation";
import chfooter from "../src/components/chfooter";
import normalized from "./assets/normalized.css";
export default {
  name: "App",
  components: { navgation, chfooter }
};
</script>

<style lang='less'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding-bottom: 100px;
  .navgation {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
  }
  .chfooter {
    position: fixed;
    bottom: 0px;
    left: 0;
    z-index: 111;
  }
}
</style>
