<template>
  <div class="navgation">
    <div class="navtop">
      <div class="logo">
        <div class="logopic">
          <img src="../assets/navgetion/LOGO.png" @click="tohome" alt />
        </div>
      </div>
      <div class="search">
        <input type="text" @blur="toSerach" placeholder="请输入产品关键词" v-model="search" />
        <div
          @click="toSerach"
          class="searchimg"
          :style="{backgroundImage: 'url(' + require('../assets/navgetion/search.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
        ></div>
      </div>
      <div class="nav-right">
        <div
          @click="nav=!nav"
          class="icon"
          :style="{backgroundImage: 'url(' + require('../assets/navgetion/nav.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
        ></div>
      </div>
    </div>
    <div class="nav" v-show="nav">
      <div class="leftbox" @click="nav=!nav"></div>
      <div class="navlist">
        <section class="navli" @click="tohome" :class="{'cur':ishome}">
          <p class="tonav">首页</p>
        </section>
        <section class="navli" :class="{'cur':proshow}">
          <p class="tonav" @click="productshow">长湖产品</p>
          <div class="minnav" v-show="proshow">
            <p
              class="minnavli"
              v-for="(item, index) in prores"
              :key="index"
              @click="toproduct(item,index)"
            >{{item.name}}</p>
          </div>
        </section>
        <section class="navli" :class="{'cur':caseshow}">
          <p class="tonav" @click="casesshow">长湖案例</p>
          <div class="minnav" v-show="caseshow">
            <p
              class="minnavli"
              v-for="(item, index) in prores"
              :key="index"
              @click="tocase(item, index)"
            >{{item.name}}</p>
          </div>
        </section>
        <section class="navli" :class="{'cur':aboutshow}">
          <p class="tonav" @click="aboutsshow">关于长湖</p>
          <div class="minnav" v-show="aboutshow" @click="nav=!nav">
            <router-link class="minnavli" to="/about">长湖简介</router-link>
            <router-link class="minnavli" to="/about/idea">长湖理念</router-link>
            <router-link class="minnavli" to="/about/organize">组织架构</router-link>
            <router-link class="minnavli" to="/about/timeline">长湖大记事</router-link>
            <router-link class="minnavli" to="/about/honor">长湖荣誉</router-link>
          </div>
        </section>
        <section class="navli" :class="{'cur':newshow}">
          <p class="tonav" @click="newsshow">新闻动态</p>
          <div class="minnav" v-show="newshow">
            <p
              class="minnavli"
              v-for="(item, index) in newres"
              :key="index"
              @click="tonews(item,index)"
            >{{item.class_name}}</p>
          </div>
        </section>
        <section class="navli" @click="tocontact" :class="{'cur':iscontact}">
          <p class="tonav">联系我们</p>
        </section>
      </div>
      <div class="none" @click="nav=!nav"></div>
    </div>
  </div>
</template>

<script>
import httpUrl from "../utils/url";
let timer = null; //定义初始值
export default {
  name: "navgation",
  data() {
    return {
      ishome: true,
      iscontact: false,
      nav: false,
      trans: false,
      search: "",
      newres: [],
      newshow: false,
      prores: [
        {
          value: "16",
          productClass: "0",
          name: "规划设计",
          transform: 0
        },
        {
          value: "17",
          productClass: "1",
          name: "湿地水生植物",
          transform: 0
        },
        {
          value: "21",
          productClass: "2",

          name: "水生态治理修复",
          transform: 100
        },
        {
          value: "27",
          productClass: "3",
          name: "彩叶观赏草",
          transform: 200
        },
        {
          value: "29",
          productClass: "4",
          name: "花镜花海造景",
          transform: 310
        },
        {
          value: "30",
          productClass: "5",

          name: "房地产市政景观",
          transform: 420
        },
        {
          value: "31",
          productClass: "6",

          name: "生态浮岛深水治理",
          transform: 590
        },
        {
          value: "32",
          productClass: "7",

          name: "屋顶花园私人庭院",
          transform: 720
        },
        {
          value: "33",
          productClass: "8",

          name: "商业综合体垂直绿化",
          transform: 900
        },
        {
          value: "34",
          productClass: "9",
          name: "标准级草坪",
          transform: 950
        }
      ],
      proshow: false,
      caseres: [],
      caseshow: false,
      aboutres: [],
      aboutshow: false,
      proClass: 0,
      baseurl: "",
      selClass: 0,
      navlist: [
        { name: "首页", path: "/" },
        { name: "长湖产品", path: "/product" },
        { name: "长湖案例", path: "/cases" },
        { name: "关于长湖", path: "/about" },
        { name: "新闻动态", path: "/news" },
        { name: "联系我们", path: "/contact" }
      ],

      scrolldis: "",
      searchRes: "",
      webinfo: []
    };
  },
  created() {
    // this.requstProduct();
    // this.requstCases();
    this.requstNews();
    this.requstWeb();
    this.baseurl = httpUrl.httpUrl;
    if (!sessionStorage.getItem("curindex")) {
      this.activeClass = 0;
    } else {
      this.activeClass = sessionStorage.getItem("curindex");
    }
    //
  },
  methods: {
    toSerach() {
      // 正则表达式判断，只能输入中文、数字、英文字符
      let pattern = /^[\u4E00-\u9FA5A-Za-z0-9]+|$ /,
        searchInfo = pattern.test(this.search);
      if (this.search == "") {
        alert("输入值为空");
      } else {
        if (searchInfo == true) {
          this.$axios
            .post("/index/api/getProductList", {
              keyword: this.search
            })
            .then(res => {
              // 判断是否有内容
              this.searchRes = res.data.data.data[0];
              if (res.data.data.data.length == 0) {
                alert("您搜索的内容不存在");
              } else {
                // console.log(this.search,'aaaaaa')
                // let id = this.searchRes.article_id;
                this.$router.push({
                  path: "/searchs",
                  query: { search: this.search }
                });
                this.$router.go(0);
              }
            });
        } else {
          alert("只能输入中文、数字、英文字符");
        }
      }
    },
    requstNews() {
      this.$axios.post("/index/api/getNewsClass").then(resa => {
        this.newres = resa.data.data;
      });
    },
    requstProduct() {
      this.$axios.post("/index/api/getProductClass").then(respro => {
        this.prores = respro.data.data;
      });
    },
    // 案例的分类接口
    requstCases() {
      this.$axios.post("/index/api/getProductClass").then(respro => {
        this.caseres = respro.data.data;
        // console.log(this.caseres, "  this.prores ");
      });
    },
    requstWeb() {
      this.$axios.post("/index/api/web_config").then(res => {
        this.webinfo = res.data.data;
      });
    },
    tohome() {
      this.proshow = false;
      this.caseshow = false;
      this.aboutshow = false;
      this.newshow = false;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.$router.push({
        path: "/"
      });
      sessionStorage.setItem("footerindex", 0); // 刷新页面
      this.$router.go(0);
    },
    tocontact() {
      this.proshow = false;
      this.caseshow = false;
      this.aboutshow = false;
      this.newshow = false;
      this.iscontact = true;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      sessionStorage.setItem("footerindex", 3);
      this.$router.push({
        path: "/contact"
      });
      // 刷新页面
      this.$router.go(0);
    },
    tonews(item, index) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.nav = false;
      let id = item.class_id;
      this.$router.push({
        path: "/news",
        query: { id: id }
      });
      // 刷新页面
      this.$router.go(0);
    },
    tocase(item, index) {
      sessionStorage.setItem("footerindex", 2);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      // 存储产品分类下标
      sessionStorage.setItem("caseproClass", index);
      sessionStorage.setItem("casetransform", item.transform);
      this.nav = false;
      let id = item.value;
      this.$router.push({
        path: "/cases",
        query: { id: id }
      });
      // 刷新页面
      this.$router.go(0);
    },
    toproduct(item, index) {
      this.curindex = 1;
      sessionStorage.setItem("footerindex", 1);
      // 存储产品分类下标
      sessionStorage.setItem("productClass", index);
      sessionStorage.setItem("transform", item.transform);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.nav = false;
      let id = item.value;
      this.$router.push({
        path: "/product",
        query: { id: id }
      });
      // 刷新页面
      this.$router.go(0);
    },
    productshow() {
      this.ishome = false;
      this.proshow = !this.proshow;
      this.caseshow = false;
      this.aboutshow = false;
      this.newshow = false;
    },
    casesshow() {
      this.ishome = false;
      this.proshow = false;
      this.caseshow = !this.caseshow;
      this.aboutshow = false;
      this.newshow = false;
    },
    aboutsshow() {
      this.ishome = false;
      this.proshow = false;
      this.caseshow = false;
      this.aboutshow = !this.aboutshow;
      this.newshow = false;
    },
    newsshow() {
      this.ishome = false;
      this.proshow = false;
      this.caseshow = false;
      this.aboutshow = false;
      this.newshow = !this.newshow;
    }
  }
};
</script>
<style lang="less" scoped>
.navgation {
  width: 100%;
  height: 88px;
  background: #012c1c;
  position: relative;
  .navtop {
    display: flex;
    // justify-content: space-between;
    box-sizing: border-box;
    padding: 0 1%;
    .logo {
      width: 224px;
      box-sizing: border-box;

      .logopic {
        width: 224px;
        height: 88px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .search {
      width: 340px;
      line-height: 88px;
      position: relative;
      input {
        box-sizing: border-box;
        border: 1px solid #dde0df;
        background: white;
        width: 255px;
        height: 46px;
        border-radius: 25px;
        padding-left: 50px;
        color: #999999;
        &::placeholder {
          color: #999999;
          font-size: 24px;
        }
      }
      .searchimg {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
      }
    }

    .nav-right {
      width: calc(100% - 570px);
      position: relative;
      height: 88px;
      .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 56px;
        height: 56px;
      }
    }
  }
  .nav {
    position: fixed;
    z-index: 11111;
    top: 88px;
    right: 0;
    width: 100%;
    .leftbox {
      display: inline-block;
      width: 55%;
      height: 400px;
      // background: #82c41c;
    }
    .navlist {
      width: 45%;
      float: right;
      // height: 360px;
      .navli {
        width: 100%;
        text-align: center;
        background: #333;
        border-bottom: 1px solid #333;
        .tonav {
          width: 100%;
          display: inline-block;
          height: 60px;
          line-height: 60px;
          color: #ffffff;
        }
        .minnav {
          display: flex;
          flex-wrap: wrap;
          .minnavli {
            background: black;
            width: 100%;
            height: 60px;
            line-height: 60px;
            color: #f5f5f5;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
            &:last-child {
              border-bottom: none;
            }
            &:active {
              background: #82c41c;
              color: #f5f5f5;
            }
          }
        }
      }
      .cur {
        background: #82c41c;
      }
    }
    .none {
      width: 100%;
      // opacity: 0;
      // background: pink;
      height: 900px;
    }
  }
}
</style>