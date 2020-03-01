<template>
  <div
    class="news-detail"
    :style="{backgroundImage: 'url(' + require('../assets/home/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
  >
    <div class="content">
      <div class="cont-right">
        <transition name="intruinfos">
          <div v-if="trans" class="intru-infos">
            <p class="title">【{{res.article_title}}】</p>

            <div class="intru-cont" v-if="res.article_content" v-html="res.article_content"></div>
            <div class="intru-des" v-if="res.desc" v-html="res.desc"></div>
            <!--案例 -->
            <!-- <div class="case" v-if="iscase">
              <div class="intru-cont" v-html="res.desc"></div>
              <div
                class="intru-des"
                id="casecont"
                v-if="res.article_contents"
                v-html="res.article_contents"
              ></div>
            </div>-->
          </div>
        </transition>
      </div>
      <transition name="trans-pro">
        <div v-if="trans" class="cont-left">
          <ul class="piclist">
            <li class="picli" id="picli" v-for="(item, index) in res.article_pics_url" :key="index">
              <div class="mainpic">
                <img ref="mainpic" v-if="item" :src="baseurl+`/public/`+item " alt />
              </div>
            </li>
          </ul>
        </div>
      </transition>
      <transition name="othernews">
        <div v-if="trans" class="othernews">
          <div class="prev" @click="toprev">
            <span class="btn tbt" v-if="prevtitle">上一个产品：</span>
            <span class="name">{{prevtitle}}</span>
          </div>
          <div class="next" @click="tonext">
            <span class="btn" v-if="nexttitle">下一个产品：</span>
            <span class="name">{{nexttitle}}</span>
          </div>
        </div>
      </transition>
      <transition name="recom">
        <div v-if="trans" class="recom">
          <div class="recombox" v-for="(item, index) in chnewslit" :key="index">
            <div
              v-if="item.image"
              @click="toThisNews(item)"
              class="mainpic"
              :style="{backgroundImage: 'url(' +baseurl+`/public/`+item.image +')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
            ></div>
            <p class="name" @click="toThisNews(item)">{{item.article_title}}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import httpUrl from "../utils/url";
export default {
  name: "product",
  data() {
    return {
      iscase: false,
      bg: require("../assets/product/tpbg.png"),
      previd: "",
      nextid: "",
      prevtitle: "",
      nexttitle: "",
      detailid: "",
      baseurl: "",
      pronameshow: false,
      trans: false,
      proClass: 0,
      prolistclass: 0,
      scrolldis: "",
      proNameList: [],
      class_id: "",
      res: [],
      total: [],
      infos: [],
      chnewslit: [],
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
          background: " #111111",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: "250px ", //轨道距 x 和 y 轴两端的距离
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
  updated() {
    let imgs = this.$refs.mainpic;
    if (imgs) {
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.width = "100%";
        imgs[i].style.height = "100%";
      }
    }
  },
  created() {
    this.baseurl = httpUrl.httpUrl;
    this.detailid = this.$route.query.id;
    if (this.$route.query.kind == "case") {
      this.iscase = true;
      this.bg = require("../assets/case/casebanner.png");
      this.requstCase(this.detailid);
    } else {
      this.requstPro(this.detailid);
    }
  },
  mounted() {
    this.trans = true;
  },
  methods: {
    // 请求数据
    requstCase(id) {
      this.$axios.post("/index/api/getCaseShow", { id: id }).then(resAll => {
        this.res = resAll.data.data;
        // console.log(resAll, "resAll");
        this.previd = resAll.data.data.prov;
        this.nextid = resAll.data.data.next;
        this.chnewslit = resAll.data.data.baselist;
        let api = "/index/api/getCaseShow";
        this.requstprev(api);
        this.requstnext(api);
      });
    },
    requstPro(id) {
      this.$axios.post("/index/api/getNewsShow", { id: id }).then(resAll => {
        this.res = resAll.data.data;
        // console.log(resAll, "resAll");
        this.previd = resAll.data.data.prov;
        this.nextid = resAll.data.data.next;
        this.chnewslit = resAll.data.data.baselist;
        let api = "/index/api/getNewsShow";
        this.requstprev(api);
        this.requstnext(api);
      });
    },
    requstnext(api, id) {
      this.$axios.post(api, { id: this.nextid }).then(res => {
        this.nexttitle = res.data.data.article_title;
      });
    },
    requstprev(api, id) {
      this.$axios.post(api, { id: this.previd }).then(res => {
        this.prevtitle = res.data.data.article_title;
      });
    },
    toThisNews(val) {
      // console.log(val);
      this.detailid = val.article_id;
      if (this.$route.query.kind == "case") {
        this.requstCase(this.detailid);
      } else {
        this.requstPro(this.detailid);
      }
    },
    toprev() {
      if (this.$route.query.kind == "case") {
        this.requstCase(this.previd);
      } else {
        this.requstPro(this.previd);
      }
    },
    tonext() {
      if (this.$route.query.kind == "case") {
        this.requstCase(this.nextid);
      } else {
        this.requstPro(this.nextid);
      }
    }
  }
};
</script>
<style  scoped>
/* // 左边 */
.trans-pro-enter-active {
  transition: all 1.5s ease-in-out;
}
.trans-pro-enter {
  transform: translateX(-100px);
}

/* 右边 */
.intruinfos-enter-active {
  transition: all 1.5s ease-in-out;
}
.othernews-enter-active {
  transition: all 2.5s ease-in-out;
}
.recom-enter-active {
  transition: all 3.5s ease-in-out;
}
.intruinfos-enter,
.othernews-enter,
.recom-enter {
  transform: translateX(50px);
}

.news-detail {
  width: 100%;
  height: 100%;
  position: relative;
}
.news-detail .content {
  width: calc(100% - 50px);
  margin: 0 auto;
}
.news-detail .content .cont-left {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
}
.news-detail .content .cont-left .piclist {
  width: 100%;
  height: 100%;
  /* background: pink; */
}
.news-detail .content .cont-left .piclist .picli {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.news-detail .content .cont-right {
  box-sizing: border-box;
  width: 100%;
  padding: 120px 0px 10px 0px;
  position: relative;
}
.news-detail .content .cont-right .intru-infos {
  box-sizing: border-box;
  padding-bottom: 20px;
  color: #ffffff;
}
.news-detail .content .cont-right .intru-infos .title {
  box-sizing: border-box;
  padding: 40px 0px 30px 0px;
  font-size: 32px;
  position: relative;
}
.news-detail .content .cont-right .intru-infos .title::before {
  content: "";
  width: 240px;
  height: 4px;
  background: #82c41c;
  position: absolute;
  top: 20px;
  left: -100px;
  z-index: 11;
}
.news-detail .content .cont-right .intru-infos .intru-cont {
  box-sizing: border-box;
  padding: 10px 0px 30px 0px;
  font-size: 24px;
  white-space: pre-wrap;
  white-space: pre-line;
  word-break: break-all;
}
.news-detail .content .cont-right .intru-infos .intru-des {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0px 0px 0px;
  font-size: 24px;
  white-space: pre-wrap;
  white-space: pre-line;
  word-break: break-all;
}

.news-detail .content .othernews {
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px dashed #f5f5f5;
  font-size: 24px;
  padding: 20px 0px 20px 0px;
}

.news-detail .content .othernews .btn {
  color: #cdcdcd;
  cursor: pointer;
}
.news-detail .content .othernews .btn :hover {
  color: #82c41c;
}
.news-detail .content .othernews .name {
  color: #82c41c;
}
.news-detail .content .othernews .next {
  box-sizing: border-box;
  padding-top: 5px;
}
.news-detail .content .recom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 20px 0px 20px 0px;
}
.news-detail .content .recom .recombox {
  width: 30%;
  height: 100%;
}
.news-detail .content .recom .recombox .mainpic {
  width: 100%;
  height: 170px;
}
.news-detail .content .recom .recombox .name {
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #cdcdcd;
  font-size: 14px;
  padding: 10px 0px 20px 0px;
}
</style>