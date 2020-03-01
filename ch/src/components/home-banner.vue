<template>
  <div class="home-banner">
    <div class="warpper">
      <van-swipe :autoplay="3000" touchable indicator-color="#82C41C">
        <van-swipe-item v-for="(item, index) in slides" :key="index">
          <img :src="baseurl+`/public/`+item.image_url" alt />
          <p>{{index}}</p>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 展示 -->
    <div class="guide">
      <ul class="guidelist">
        <li
          class="guideli"
          v-for="(item, index) in guidelist"
          :key="index"
          @click="toProduct(item,index)"
        >
          <div class="icon">
            <img :src="item.src" alt />
          </div>
          <div class="name">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import httpUrl from "../utils/url";

export default {
  name: "homebanner",
  data() {
    return {
      baseurl: "",
      inv: 3000,
      nowIndex: 0,
      isShow: true,
      slides: [],
      guidelist: [
        {
          value: "17",
          productClass: "1",
          src: require("../assets/home/homebanner/1.png"),
          name: "湿地水景",
          transform: 0
        },
        {
          value: "29",
          productClass: "4",
          src: require("../assets/home/homebanner/2.png"),
          name: "花镜花海",
          transform: 310
        },
        {
          value: "27",
          productClass: "3",
          src: require("../assets/home/homebanner/3.png"),
          name: "彩叶观赏草",
          transform: 200
        },
        {
          value: "21",
          productClass: "2",
          src: require("../assets/home/homebanner/4.png"),
          name: "水生态修复",
          transform: 120
        },
        {
          value: "31",
          productClass: "6",
          src: require("../assets/home/homebanner/5.png"),
          name: "深水浮岛",
          transform: 590
        },
        {
          value: "32",
          productClass: "7",
          src: require("../assets/home/homebanner/6.png"),
          name: "私人庭院",
          transform: 720
        },
        {
          value: "30",
          productClass: "5",
          src: require("../assets/home/homebanner/7.png"),
          name: "市政景观",
          transform: 470
        },
        {
          src: require("../assets/home/homebanner/8.png"),
          name: "关于长湖"
        }
      ]
    };
  },
  created() {
    this.baseurl = httpUrl.httpUrl;
    this.requstBanner();
  },
  methods: {
    requstBanner() {
      this.$axios.post("/index/api/getBanner").then(res => {
        this.slides = res.data.data;
        // console.log(res);
      });
    },
    toProduct(item, index) {
      if (index == 7) {
        sessionStorage.setItem("footerindex", 3);
        this.$router.push({ path: "/about" });
        this.$router.go(0);
      } else {
        // 存储头部列表下标
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        sessionStorage.setItem("footerindex", 1);
        // 存储产品分类下标
        sessionStorage.setItem("productClass", item.productClass);
        // 带分类id跳转至产品页面
        sessionStorage.setItem("transform", item.transform);
        let id = item.value;
        this.$router.push({
          path: "/product",
          query: { id: id }
        });
        // 刷新页面
        this.$router.go(0);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.home-banner {
  background: white;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0 25px;
  .warpper {
    box-sizing: border-box;
    padding-top: 110px;
    width: 100%;
    height: 420px;
    .van-swipe {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 引导
  .guide {
    width: 100%;
    padding-bottom: 40px;
    .guidelist {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      .guideli {
        display: inline-block;
        text-align: center;
        width: 100%;
        height: 100%;
        color: #333333;
        box-sizing: border-box;
        font-size: 23px;
        .icon {
          padding-top: 45px;
          width: 66px;
          height: 66px;
          margin: 0 auto;
          img {
            height: 100%;
          }
        }
        .name {
          padding-top: 20px;
        }
        // &:hover {
        //   cursor: pointer;
        //   color: white;
        // }
      }
    }
  }
}
</style>