<template>
  <div class="product">
    <div class="content">
      <div class="cont-right">
        <div class="crtop">
          <transition name="trans-rtpro">
            <ul class="prolist" v-if="trans">
              <li class="proli" v-for="(item, index) in prolista" :key="index">
                <div
                  class="mainpic"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+item.image_url +  ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title">{{item.article_title}}</p>
                <div class="todetail" @click="todetail(item)">
                  <span>{{item.article_title}}</span>
                  <span>
                    <img src="../assets/home/lf.png" alt />
                  </span>
                </div>
              </li>
            </ul>
          </transition>
        </div>

      </div>
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
          this.prolist = res.data.data.data
          console.log(res);
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


.product {
  // background: orange;
  width: 100%;
  min-width: 1200px;
  height: 2546px;
  position: relative;
  .bg {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -2;
    .topbg {
      width: 100%;
      height: 360px;
    }
    .ctbg {
      width: 100%;
      height: 2186px;
    }
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .cont-left {
      box-sizing: border-box;
      width: 20%;
      padding: 160px 0 0 7px;
      text-align: center;
      .icon {
        height: 200px;
        img {
          height: 100%;
        }
      }
      .cllist {
        margin: 30px auto;
        width: 80%;
        border-top: 4px solid #82c41c;
        color: white;
        background: #090909;
        .cllibox {
          box-sizing: border-box;
          width: 100%;
          height: 28px;
          line-height: 28px;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          margin: 10px auto;
          padding: 0px 5%;
        }
        .show > .cllibox {
          background: #82c41c;
        }
        .proName {
          width: 95%;
          .pronamelist {
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            border-top: 1px dashed #f5f5f5;
            // border-bottom: 1px dashed #f5f5f5;
            .pronameli {
              cursor: pointer;
              width: 49.5%;
              border-bottom: 1px dashed #f5f5f5;
              .title {
                width: 100%;
                text-align: left;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .probox {
                box-sizing: border-box;
                width: 100%;
                height: 28px;
                line-height: 28px;
                font-size: 12px;
                display: flex;
                justify-content: flex-start;
                margin: 10px auto;
                padding: 0px 5%;
              }
              .show {
                background: #82c41c;
              }
              &:hover .probox {
                background: #82c41c;
              }
            }
            // :last-child {
            //   border-bottom: none;
            // }
            // :nth-last-child(2) {
            //   border-bottom: none;
            // }
          }
        }
        .clli {
          cursor: pointer;
          margin: 0 auto;
          width: 85%;
          border-bottom: 1px dashed #f5f5f5;

          &:hover .cllibox {
            background: #82c41c;
          }
        }
        :not(:first-child) {
          border-top: none;
        }
      }
    }
    .cont-right {
      width: 80%;
      height: 100%;
      margin: 315px 0 0 0;
      padding-right: 20px;
      .proli {
        height: 230px;
        position: relative;
        .mainpic {
          width: 100%;
          height: 100%;
        }
        .title {
          background: rgba(0, 0, 0, 1);
          opacity: 0.6;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: white;
          font-size: 14px;
        }
        .todetail {
          box-sizing: border-box;
          width: 100%;
          height: 40px;
          background: #82c41c;
          opacity: 0.9;
          position: absolute;
          bottom: 0;
          left: 0;
          color: white;
          font-size: 14px;
          line-height: 40px;
          padding: 0 20px;
          display: none;
        }
        &:hover .title {
          display: none;
        }
        &:hover .todetail {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
        }
      }
      .crtop {
        width: 100%;
        margin-bottom: 1%;
        .prolist {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .proli {
            width: 24%;
          }
        }
      }
      .probox {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 1%;
        .prolist {
          width: 24%;
          height: 100%;
          .proli {
            width: 100%;
          }
        }
      }
      .othercase {
        .other-pic {
          margin-bottom: 40px;
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