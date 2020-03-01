<template>
  <div class="home-news">
    <div class="bg">
      <div
        class="topbg"
        :style="{backgroundImage: 'url(' + require('../assets/home/tpbanner.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
      <div
        class="btbg"
        :style="{backgroundImage: 'url(' + require('../assets/home/btbg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
    </div>
    <div class="content">
      <div class="conttop">
        <transition name="lfbg">
          <div v-if="trans" class="lfbg backg">
            <img src="../assets/home/homenews/bt.png" alt />
          </div>
        </transition>
      </div>
      <div class="contmain">
        <transition name="newspic">
          <div v-if="trans" class="contmain-left">
            <ul class="news-pic">
              <li class="news-pic-li" v-if="newslist[0].image_url" @click="todetail(newslist[0])">
                <div
                  class="newspic"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` +newslist[0].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
              </li>
              <li class="news-pic-li" v-if="newslist[1].image_url" @click="todetail(newslist[1])">
                <div
                  class="newspic"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` +newslist[1].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
              </li>
              <li class="news-pic-li" v-if="newslist[2].image_url" @click="todetail(newslist[2])">
                <div
                  class="newspic"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` +newslist[2].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
              </li>
              <li class="news-pic-li" v-if="newslist[3].image_url" @click="todetail(newslist[3])">
                <div
                  class="newspic"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` +newslist[3].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
              </li>
            </ul>
          </div>
        </transition>
        <div class="newsinfo">
          <div class="news newstp">
            <div class="name">
              <p class="chnews">
                长湖新闻
                <span>Changhu News</span>
              </p>
              <span class="more">...MORE</span>
            </div>
            <ul class="newslist">
              <transition name="newslista">
                <li v-if="trans" class="newsli">
                  <p class="time" v-if="newslist[0].created_time">{{newslist[0].created_time}}</p>
                  <p
                    class="title"
                    v-if="newslist[0].article_title"
                    @click="todetail(newslist[0])"
                  >{{newslist[0].article_title}}</p>
                </li>
              </transition>
              <transition name="newslistb">
                <li v-if="trans" class="newsli">
                  <p class="time" v-if="newslist[1].created_time">{{newslist[1].created_time}}</p>
                  <p
                    class="title"
                    v-if="newslist[1].article_title"
                    @click="todetail(newslist[1])"
                  >{{newslist[1].article_title}}</p>
                </li>
              </transition>
              <transition name="newslistc">
                <li v-if="trans" class="newsli">
                  <p class="time" v-if="newslist[2].created_time">{{newslist[2].created_time}}</p>
                  <p
                    class="title"
                    v-if="newslist[2].article_title"
                    @click="todetail(newslist[2])"
                  >{{newslist[2].article_title}}</p>
                </li>
              </transition>
            </ul>
          </div>
          <div class="news">
            <div class="name">
              <p class="chnews">
                行业动态
                <span>Changhu News</span>
              </p>
              <span class="more">...MORE</span>
            </div>
            <ul class="newslist">
              <transition name="newslista">
                <li v-if="trans" class="newsli">
                  <p class="time" v-if="hydtlist[0].created_time">{{hydtlist[0].created_time}}</p>
                  <p
                    class="title"
                    v-if="hydtlist[0].article_title"
                    @click="todetail(hydtlist[0])"
                  >{{hydtlist[0].article_title}}</p>
                </li>
              </transition>
              <transition name="newslistb">
                <li v-if="trans" class="newsli">
                  <p class="time" v-if="hydtlist[1].created_time">{{hydtlist[1].created_time}}</p>
                  <p
                    class="title"
                    v-if="hydtlist[1].article_title"
                    @click="todetail(hydtlist[1])"
                  >{{hydtlist[1].article_title}}</p>
                </li>
              </transition>
              <transition name="newslistc">
                <li v-if="trans" class="newsli">
                  <p class="time" v-if="hydtlist[2].created_time">{{hydtlist[2].created_time}}</p>
                  <p
                    class="title"
                    v-if="hydtlist[2].article_title"
                    @click="todetail(hydtlist[2])"
                  >{{hydtlist[2].article_title}}</p>
                </li>
              </transition>
            </ul>
          </div>
        </div>

        <transition name="des">
          <div v-if="trans" class="des">
            <div class="des-box">
              <div class="point">
                <img src="../assets/home/homenews/gd.png" alt />
              </div>
              <div class="des-top">
                <p class="title">{{pointlist.article_title}}</p>
              </div>
              <div class="des-cont" v-html="pointlist.article_content"></div>
            </div>

            <p class="more" @click="todetail(pointlist)">MORE</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import httpUrl from "../utils/url";
export default {
  name: "homeabout",
  data() {
    return {
      trans: false,
      baseurl: "",
      mewspic: [
        require("../assets/home/homenews/bg1.png"),
        require("../assets/home/homenews/bg2.png"),
        require("../assets/home/homenews/bg3.png"),
        require("../assets/home/homenews/bg4.png")
      ],
      newslist: [],
      hydtlist: [],
      class_id: "",
      res: [],
      pointlist: []
    };
  },
  updated() {
    let a = document.getElementById("des-cont");
    let imgs = a.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.width = "100%";
      imgs[i].style.height = "100%";
    }
  },
  created() {
    this.requst();
    this.baseurl = httpUrl.httpUrl;
  },
  methods: {
    todetail(item) {
      // console.log(item);
      let id = item.article_id;
      this.$router.push({
        path: "/newsdetail",
        query: { id: id }
      });
    },
    // 请求数据
    requst() {
      this.$axios.post("/index/api/getNewsClass").then(respro => {
        this.res = respro.data.data;
        // console.log(this.res);
        this.requstNews();
        this.requstPoint();
        this.requstHydt();
      });
    },
    // news
    requstNews() {
      this.$axios
        .post("/index/api/getNewsList", {
          pid: this.res[0].class_id,
          limit: 4,
          page: 1
        })
        .then(res => {
          // console.log(res, "news");
          this.newslist = res.data.data.data;
        });
    },
    // point
    requstPoint() {
      this.$axios
        .post("/index/api/getNewsList", {
          pid: this.res[1].class_id,
          limit: 1,
          page: 1
        })
        .then(res => {
          this.pointlist = res.data.data.data[0];
          // console.log(this.pointlist, "pointlist");
        });
    },
    // hangye
    requstHydt() {
      this.$axios
        .post("/index/api/getNewsList", {
          pid: this.res[2].class_id,
          limit: 3,
          page: 1
        })
        .then(res => {
          // console.log(res, "hy");
          this.hydtlist = res.data.data.data;
        });
    }
  },
  watch: {
    srcoll(val) {
      if (val <= 3400) {
        this.trans = false;
      } else {
        this.trans = true;
      }
    }
  },
  props: ["srcoll"]
};
</script>
<style  scoped>
/* 左边 */
.lfbg-enter-active,
.newspic-enter-active,
.des-enter-active {
  transition: all 1.5s ease-in-out;
}
.lfbg-enter {
  transform: translateX(-100px);
}
.newspic-enter {
  transform: translateX(-50px);
}
.des-enter {
  transform: translateY(50px);
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
.newslista-enter,
.newslistb-enter,
.newslistc-enter {
  transform: translateY(-50px);
}
.home-news {
  /* background: orange; */
  width: 100%;
  height: 960px;
  position: relative;
}
.home-news .bg {
  width: 100%;
  height: 960px;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
}
.home-news .bg .topbg {
  width: 100%;
  height: 280px;
}
.home-news .bg .btbg {
  width: 100%;
  height: 680px;
}
.home-news .content {
  width: 100%;
}
.home-news .content .conttop {
  width: 100%;
  height: 280px;
  position: relative;
}
.home-news .content .conttop .lfbg {
  position: absolute;
  top: 20px;
  left: 5%;
}
.home-news .content .contmain {
  width: 100%;
  position: relative;
}
.home-news .content .contmain .contmain-left {
  position: absolute;
  top: 50px;
  left: 2%;
  width: 40%;
  height: 605px;
}
.home-news .content .contmain .contmain-left .news-pic {
  width: 100%;
  height: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.home-news .content .contmain .contmain-left .news-pic .news-pic-li {
  width: 48%;
  height: 50%;
}
.home-news .content .contmain .contmain-left .news-pic .news-pic-li .newspic {
  width: 100%;
  height: 250px;
}
.home-news .content .contmain .newsinfo {
  width: 20%;
  position: absolute;
  top: 50px;
  left: 45%;
}
.home-news .content .contmain .newsinfo .news {
  width: 100%;
}
.home-news .content .contmain .newsinfo .news .name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #82c41c;
}
.home-news .content .contmain .newsinfo .news .name p {
  color: #82c41c;
  line-height: 24px;
}
.home-news .content .contmain .newsinfo .news .name span {
  color: #939393;
  font-size: 14px;
}
.home-news .content .contmain .newsinfo .news .name .more {
  cursor: pointer;
  font-size: 12px;
}
.home-news .content .contmain .newsinfo .news .newslist .newsli {
  cursor: pointer;
  border-bottom: 1px dashed #939393;
}
.home-news .content .contmain .newsinfo .news .newslist .newsli .time {
  color: #939393;
  font-size: 13px;
  padding: 5px 0 8px 0;
}
.home-news .content .contmain .newsinfo .news .newslist .newsli .title {
  color: #dddddd;
  line-height: 24px;
  font-size: 14px;
}
.home-news .content .contmain .newsinfo .newstp {
  margin-bottom: 60px;
}
.home-news .content .contmain .des {
  border-top: 10px solid #222222;
  background: #111111;
  width: 28%;
  height: 735px;
  position: absolute;
  top: -140px;
  right: 1%;
}
.home-news .content .contmain .des .des-box {
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.home-news .content .contmain .des .des-box .point {
  position: absolute;
  top: 30px;
  right: 10%;
}
.home-news .content .contmain .des .des-box .des-top {
  border-bottom: 1px dashed #939393;
  width: 100%;
  height: 120px;
  color: white;
  position: relative;
}
.home-news .content .contmain .des .des-box .des-top p {
  position: absolute;
  bottom: 10px;
  font-size: 20px;
  font-weight: 400;
}
.home-news .content .contmain .des .des-box .des-cont {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0;
  color: #666666;
  font-size: 13px;
  line-height: 24px;
  white-space: pre-wrap;
  white-space: pre-line;
  word-break: break-all;
  /* 超出点点点 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 18;
  overflow: hidden;
}
.home-news .content .contmain .des .more {
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 20px;
  width: 120px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px dashed rgba(147, 147, 147, 1);
  font-size: 13px;
  color: #82c41c;
}
</style>