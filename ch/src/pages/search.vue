<template>
  <div
    class="search"
    :style="{backgroundImage: 'url(' + require('../assets/home/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
  >
    <div class="content">
      <transition name="trans-rtpro">
        <ul class="prolist" v-if="trans">
          <li class="proli" v-for="(item, index) in prolist" :key="index">
            <div class="probox" @click="todetail(item)">
              <div
                class="mainpic"
                :style="{backgroundImage: 'url(' +baseurl+`/public/`+item.image_url +  ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
              ></div>
              <div class="infos">
                <p class="title">{{item.article_title}}</p>
                <p class="des" v-html="item.desc"></p>
                <!-- <p class="des" v-html="item.article_content"></p> -->
              </div>
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import moPagination from "../components/pagenation";
import httpUrl from "../utils/url";
export default {
  name: "product",
  data() {
    return {
      keywords: "",
      baseurl: "",
      pronameshow: false,
      pageSize: 24, // 每页显示20条数据
      currentPage: 1, // 当前页码
      count: 1, // 总记录数,
      trans: false,
      transa: false,
      proClass: 0,
      prolistclass: 0,
      scrolldis: "",
      navlist: [],
      prolist: [],
      class_id: "",
      res: [],
      total: [],
      infos: [],
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          scrollingY: true,
          speed: 500
        },
        rail: {
          background: "#090909",
          opacity: 1,
          size: "6px",
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
  created() {
    this.baseurl = httpUrl.httpUrl;
    this.keywords = this.$route.query.search;
    this.requst(this.keywords);
  },
  mounted() {
    this.trans = true;
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    todetail(item) {
      // console.log(item);
      let id = item.article_id;
      this.$router.push({
        path: "/detail",
        query: { id: id }
      });
    },
    // 请求数据
    requst(val) {
      this.$axios.post("/index/api/getProductClass").then(res => {
        this.res = res.data.data;
        this.class_id = this.res[0].class_id;
        this.requstKind(this.class_id, 1);
        this.requstSearch(val);
      });
    },
    requstKind(val, page) {
      this.$axios
        .post("/index/api/getProductList", {
          id: val,
          limit: 24,
          page: page
        })
        .then(res => {
          this.total = res.data.data.total.reverse();
        });
    },
    requstSearch(val, page) {
      this.$axios
        .post("/index/api/getProductList", {
          keyword: val
        })
        .then(res => {
          this.count = res.data.data.total.length;
          this.prolist = res.data.data.data;
          // console.log(res);
        });
    },
    handleScroll: function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrolldis = scrollTop;
      //   console.log(this.scrolldis);
      if (this.scrolldis >= 950) {
        this.transa = true;
      }
    },
    getList(page) {
      this.requstKind(this.class_id, page);
    },
    pageChange(index) {
      this.currentPage = index;
      // console.log( this.currentPage)
      this.getList(index);
    },
    toNav(item, index) {
      this.proClass = index;
      this.class_id = item.class_id;
      this.requstKind(this.class_id);
      // this.pronameshow = !this.pronameshow
    },
    toproitem(item, index) {
      this.prolistclass = index;
      // console.log(index);
      let id = item.article_id;
      this.$router.push({
        path: "/detail",
        query: { id: id }
      });
    }
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: { moPagination }
};
</script>
<style lang="less" scoped>
// 左边
.trans-pro-enter-active {
  transition: all 1.5s ease-in-out;
}
.trans-prolfli-enter-active {
  transition: all 2s ease-in-out;
}
.trans-pro-enter,
.trans-prolfli-enter {
  transform: translateX(-100px);
}
// 第一排
.trans-rtpro-enter-active {
  transition: all 2s ease-in-out;
}
.trans-rtpro-enter {
  transform: translateY(0px);
}

.search {
  // background: orange;
  width: 100%;
  min-height: 1550px;
  position: relative;
  box-sizing: border-box;
  padding-top: 110px;
  .content {
    width: calc(100% - 50px);
    margin: 0 auto;
    .prolist {
      .proli {
        height: 220px;

        .probox {
          border-radius: 10px;
          background: white;
          box-sizing: border-box;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          height: 200px;
          .mainpic {
            width: 208px;
            height: 160px;
            border-radius: 20px;
          }
          .infos {
            width: calc(100% - 228px);
            color: #333333;
            .title {
              font-size: 28px;
            }
            .des {
              font-size: 22px;
              padding-top: 15px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  .pagenation {
    box-sizing: border-box;
    padding: 90px 0 0 0;
  }
}
</style>