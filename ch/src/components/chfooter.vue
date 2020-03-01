<template>
  <div class="chfooter">
    <ul class="navlist">
      <li
        class="navli"
        :class="activeClass ==index?'sel':''"
        v-for="(item, index) in navlist"
        :key="index"
      >
        <router-link :to="item.path">
          <div class="icon" @click="toNav(index)">
            <img v-show="activeClass !=index" :src="item.img" alt />
            <img v-show="activeClass ==index" :src="item.curimg" alt />
          </div>
          <p class="title" @click="toNav(index)">{{item.name}}</p>
        </router-link>
        <!-- 电话 -->
        <!-- <a v-if="index == 3" href="tel:028-89541286">
          <div class="icon" @click="toNav(index)">
            <img v-show="activeClass !=index" :src="item.img" alt />
            <img v-show="activeClass ==index" :src="item.curimg" alt />
          </div>
          <p class="title" @click="toNav(index)">{{item.name}}</p>
        </a>-->
      </li>
    </ul>
  </div>
</template>

<script>
import httpUrl from "../utils/url";
export default {
  name: "chfooter",
  data() {
    return {
      activeClass: 0,
      baseurl: "",
      navlist: [
        {
          img: require("../assets/footer/home.png"),
          curimg: require("../assets/footer/home.png"),
          name: "首页",
          path: "/"
        },
        {
          img: require("../assets/footer/pro.png"),
          curimg: require("../assets/footer/home.png"),
          name: "产品",
          path: "/product"
        },
        {
          img: require("../assets/footer/case.png"),
          curimg: require("../assets/footer/home.png"),
          name: "案例",
          path: "/cases"
        },
        {
          img: require("../assets/footer/tel.png"),
          curimg: require("../assets/footer/home.png"),
          name: "电话",
          path: "/contact"
        }
      ]
    };
  },
  created() {
    sessionStorage.setItem("transform", 0);
    sessionStorage.setItem("casetransform", 0);
    if (!sessionStorage.getItem("footerindex")) {
      this.activeClass = 0;
    } else {
      this.activeClass = sessionStorage.getItem("footerindex");
    }
  },
  methods: {
    toNav(index) {
      this.activeClass = index;
      sessionStorage.setItem("transform", 0);
      sessionStorage.setItem("casetransform", 0);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="less" scoped>
.chfooter {
  background: #012c1c;
  width: 100%;
  height: 100px;
  .navlist {
    width: 100%;
    .navli {
      display: inline-block;
      width: 25%;
      text-align: center;

      box-sizing: border-box;
      padding-top: 2%;
      a {
        display: inline-block;
        color: white;
      }
    }
    .icon {
      height: 40px;
      img {
        height: 100%;
      }
    }

    .sel {
      color: #82c41c;
      a {
        color: #82c41c;
      }
    }
  }
}
</style>