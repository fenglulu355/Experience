<template>
  <div
    class="news-detail"
    :style="{backgroundImage: 'url(' + require('../assets/home/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
  >
    <div class="bg">
      <div
        class="topbg"
        :style="{backgroundImage: 'url(' + require('../assets/news/ban.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
    </div>
    <div class="content">
      <div class="cont-right">
        <div class="infosbox">
          <div class="infos-top">
            <p class="title" v-if="res.article_title">{{res.article_title}}</p>
            <p class="time" v-if="res.created_time">{{res.created_time}}</p>
          </div>
          <div class="infos-cont" id="infos-cont" v-html="res.article_content"></div>
          <div class="othernews" @click="toprev">
            <div class="prev">
              <span class="btn tbt" v-if="prevtitle">上一个项目：</span>
              <span class="name">{{prevtitle}}</span>
            </div>
            <div class="next" @click="tonext">
              <span class="btn" v-if="nexttitle">下一个项目：</span>
              <span class="name">{{nexttitle}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="other-box">
        <ul class="other-list" v-if="chnewslit">
          <li class="other-li" v-for="(item, index) in  chnewslit" :key="index">
            <div
              class="mainpic"
              @click="toThisNews(item)"
              :style="{backgroundImage: 'url(' +baseurl+`/public/`+item.image + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
            ></div>
            <p class="time">{{item.created_time}}</p>
            <p class="title" @click="toThisNews(item)">{{item.article_title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import httpUrl from "../utils/url";
export default {
  name: "product",
  data() {
    return {
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
      hydt: "",
      pointid: "",
      res: [],
      total: [],
      infos: [],
      chnewslit: [],
      Industry: [],
      point: [],
      newslist: []
    };
  },
  updated() {
    let a = document.getElementById("infos-cont");
    let imgs = a.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.width = "100%";
      imgs[i].style.height = "100%";
    }
  },
  created() {
    this.baseurl = httpUrl.httpUrl;
    this.detailid = this.$route.query.id;
    this.requst(this.detailid);
  },
  mounted() {
    this.trans = true;
  },
  methods: {
    // 请求数据
    requst(val) {
      this.$axios.post("/index/api/getNewsShow", { id: val }).then(resall => {
        this.res = resall.data.data;
        this.previd = resall.data.data.prov;
        this.nextid = resall.data.data.next;

        this.chnewslit = resall.data.data.baselist.splice(0, 4);
        // console.log(resall.data.data);
        this.requstnext();
        this.requstprev();
        this.requstclass();
      });
    },
    requstnext() {
      this.$axios
        .post("/index/api/getNewsShow", { id: this.nextid })
        .then(res => {
          this.nexttitle = res.data.data.article_title;
        });
    },
    requstprev() {
      this.$axios
        .post("/index/api/getNewsShow", { id: this.previd })
        .then(res => {
          this.prevtitle = res.data.data.article_title;
        });
    },
    requstclass() {
      this.$axios.post("/index/api/getNewsClass").then(res => {
        this.pointid = res.data.data[1].class_id;
        this.hydt = res.data.data[2].class_id;
        this.requstHy(this.hydt, 1);
        this.requstPoint(this.pointid, 1);
      });
    },
    // 请求行业动态
    requstHy(val, page) {
      this.$axios
        .post("/index/api/getNewsList", {
          pid: val,
          limit: 5,
          page: page
        })
        .then(res => {
          this.Industry = res.data.data.data;
        });
    },
    // 请求观点
    requstPoint(val, page) {
      this.$axios
        .post("/index/api/getNewsList", {
          pid: val,
          limit: 3,
          page: page
        })
        .then(res => {
          this.point = res.data.data.data;
          // console.log(this.point, "requstPoint");
        });
    },
    toThisNews(val) {
      this.detailid = val.article_id;
      this.requst(this.detailid);
    },
    toprev() {
      this.requst(this.previd);
    },
    tonext() {
      this.requst(this.nextid);
    }
  }
};
</script>
<style  scoped>
/* // 左边 */
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

/* 新闻列表动画 */
.newslista-enter-active {
  transition: all 2s ease-in-out;
}
.newslistb-enter-active {
  transition: all 2.5s ease-in-out;
}
.newslistc-enter-active {
  transition: all 3s ease-in-out;
}
.newslistd-enter-active {
  transition: all 3.5s ease-in-out;
}
.newsliste-enter-active {
  transition: all 4s ease-in-out;
}
.newslista-enter,
.newslistb-enter,
.newslistc-enter,
.newslistd-enter,
.newsliste-enter {
  transform: translateY(-50px);
}

.news-detail {
  width: 100%;
  position: relative;
}
.news-detail .bg {
  width: 100%;
  position: absolute;
  top: 88px;
  left: 0;
  z-index: 0;
}
.news-detail .bg .topbg {
  width: 100%;
  height: 210px;
}

.news-detail .content {
  width: calc(100% - 50px);
  margin: 0 auto;
  box-sizing: border-box;
  padding: 298px 0 60px 0;
}
.news-detail .content .cont-right {
  width: 100%;
  height: 100%;
  position: relative;
}
.news-detail .content .cont-right .infosbox {
  box-sizing: border-box;
  background: #111111;
  width: 100%;
  padding: 30px 30px;
}
.news-detail .content .cont-right .infosbox .infos-top {
  width: 100%;
  height: 40px;
  color: #82c41c;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 3px solid #82c41c;
  padding-bottom: 30px;
}
.news-detail .content .cont-right .infosbox .infos-top .title {
  font-size: 32px;
}
.news-detail .content .cont-right .infosbox .infos-top .time {
  font-size: 24px;
}
.news-detail .content .cont-right .infosbox .infos-cont {
  padding: 30px 0;
  width: 100%;
  min-height: 200px;
  color: #cdcdcd;
  font-size: 24px;
  white-space: pre-wrap;
  white-space: pre-line;
  word-break: break-all;
}
.news-detail .content .cont-right .infosbox .othernews {
  width: 100%;
  border-bottom: 1px dashed #939393;
  font-size: 24px;
  padding: 20px 0;
  box-sizing: border-box;
}

.news-detail .content .cont-right .infosbox .othernews .btn {
  color: #cdcdcd;
  cursor: pointer;
}
.news-detail .content .cont-right .infosbox .othernews .name {
  color: #82c41c;
}
.news-detail .content .cont-right .infosbox .othernews .next {
  margin-top: 5px;
}
.news-detail .content .other-box .other-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: RGBA(15, 19, 18, 1);
}
.news-detail .content .other-box .other-list .other-li {
  width: calc(50% - 20px);
  box-sizing: border-box;
  position: relative;
  background: #111111;
  box-sizing: border-box;
  padding: 30px 30px;
}
.news-detail .content .other-box .other-list .other-li .mainpic {
  width: 100%;
  height: 170px;
}
.news-detail .content .other-box .other-list .other-li .time {
  color: #82c41c;
  font-size: 14px;
  box-sizing: border-box;
  padding: 10% 0 5% 0;
}
.news-detail .content .other-box .other-list .other-li .title {
  cursor: pointer;
  color: #cdcdcd;
  font-size: 14px;
  font-weight: 400;
}
</style>