<template>
  <div
    class="product"
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
        <div class="crtop">
          <transition name="trans-rtpro">
            <ul class="prolist" v-if="trans">
              <li class="proli" v-for="(item, index) in prolista" :key="index">
                <div
                  class="mainpic"
                  @click="todetail(item)"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+item.image_url +  ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{item.created_time}}</p>
                <p class="title" @click="todetail(item)">{{item.article_title}}</p>
              </li>
            </ul>
          </transition>
        </div>
        <div class="crcenter probox">
          <transition name="centera">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistb[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolistb[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistb[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{prolistb[0].created_time}}</p>
                <p class="title" @click="todetail(prolistb[0])">{{prolistb[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="centerb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistb[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolistb[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistb[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{prolistb[1].created_time}}</p>
                <p class="title" @click="todetail(prolistb[1])">{{prolistb[1].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="ctbt probox">
          <transition name="proarra">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistc[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolistc[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistc[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{prolistc[0].created_time}}</p>
                <p class="title" @click="todetail(prolistc[0])">{{prolistc[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="proarrb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistc[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolistc[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistc[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{prolistc[1].created_time}}</p>
                <p class="title" @click="todetail(prolistc[1])">{{prolistc[1].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="fourbt probox">
          <transition name="proarra">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistd[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolistd[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistd[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{prolistd[0].created_time}}</p>
                <p class="title" @click="todetail(prolistd[0])">{{prolistd[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="proarrb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistd[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolistd[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistd[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{prolistd[1].created_time}}</p>
                <p class="title" @click="todetail(prolistd[1])">{{prolistd[1].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="fivebt probox">
          <transition name="proarra">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="proliste[0]">
                <div
                  class="mainpic"
                  @click="todetail(proliste[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+proliste[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{proliste[0].created_time}}</p>
                <p class="title" @click="todetail(proliste[0])">{{proliste[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="proarrb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="proliste[1]">
                <div
                  class="mainpic"
                  @click="todetail(proliste[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+proliste[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="time">{{proliste[1].created_time}}</p>
                <p class="title" @click="todetail(proliste[1])">{{proliste[1].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <!-- 分页 -->
        <mo-pagination
          :page-index="currentPage"
          :total="count"
          :page-size="pageSize"
          @change="pageChange"
        ></mo-pagination>
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
      baseurl: "",
      pronameshow: false,
      pageSize: 10, // 每页显示20条数据
      currentPage: 1, // 当前页码
      count: 1, // 总记录数,
      trans: false,
      transa: false,
      proClass: 0,
      prolistclass: 0,
      scrolldis: "",
      navlist: [],
      prolista: [],
      prolistb: [],
      prolistc: [],
      prolistd: [],
      proliste: [],
      proNameList: [],
      class_id: "",
      pointid: "",
      point: [],
      res: [],
      total: [],
      infos: [],
      hydt: ""
    };
  },
  created() {
    if (!this.$route.query.id) {
      this.requst();
    } else {
      this.requst(this.$route.query.id);
    }

    this.baseurl = httpUrl.httpUrl;
  },
  mounted() {
    this.trans = true;
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    todetail(item) {
      let id = item.article_id;
      this.$router.push({
        path: "/newsdetail",
        query: { id: id }
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      // 刷新页面
      this.$router.go(0);
    },
    // 请求数据
    requst(val) {
      this.$axios.post("/index/api/getNewsClass").then(res => {
        this.res = res.data.data;
        if (!val) {
          this.class_id = this.res[0].class_id;
          this.requstKind(this.class_id, 1);
        } else {
          this.class_id = val;
          this.requstKind(this.class_id, 1);
        }
        this.requstPoint(this.res[1].class_id, 1);
      });
    },
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
    requstKind(val, page) {
      this.$axios
        .post("/index/api/getNewsList", {
          pid: val,
          limit: 10,
          page: page
        })
        .then(res => {
          // console.log(res.data.data,'aaa');

          this.count = res.data.data.total.length;
          this.prolista = res.data.data.data.slice(0, 2);
          this.prolistb = res.data.data.data.slice(2, 4);
          this.prolistc = res.data.data.data.slice(4, 6);
          this.prolistd = res.data.data.data.slice(6, 8);
          this.proliste = res.data.data.data.slice(8, 10);
          this.total = res.data.data.total.reverse();
        });
    },
    handleScroll: function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrolldis = scrollTop;
      // //   console.log(this.scrolldis);
      // if (this.scrolldis >= 950) {
      //   this.transa = true;
      // }
    },
    getList(page) {
      this.requstKind(this.class_id, page);
    },
    pageChange(index) {
      this.currentPage = index;
      // console.log( this.currentPage)
      this.getList(index);
    },
    tonews(item, index) {
      this.prolistclass = index;
      this.class_id = item.class_id;
      this.requstKind(this.class_id, 1);
    },
    toNav(item, index) {
      this.proClass = index;
      this.class_id = item.class_id;
      this.requstKind(this.class_id);
      // this.pronameshow = !this.pronameshow
    },
    toproitem(index) {
      this.prolistclass = index;
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
  transform: translateX(0px);
}
// 第二排
.centera-enter-active {
  transition: all 1.5s linear;
}
.centerb-enter-active {
  transition: all 2s linear;
}
.centerc-enter-active {
  transition: all 2.5s linear;
}
.centerd-enter-active {
  transition: all 3s linear;
}
.centera-enter,
.centerb-enter,
.centerc-enter,
.centerd-enter {
  transform: translateY(90px);
}
// 第三排
.proarra-enter-active {
  transition: all 3.5s ease-in-out;
}
.proarrb-enter-active {
  transition: all 4s ease-in-out;
}
.proarrc-enter-active {
  transition: all 4.5s ease-in-out;
}
.proarrd-enter-active {
  transition: all 5s ease-in-out;
}

.proarra-enter,
.proarrb-enter,
.proarrc-enter,
.proarrd-enter {
  transform: translateY(90px);
}

.product {
  // background: orange;
  width: 100%;
  position: relative;
  .bg {
    width: 100%;
    position: absolute;
    top: 88px;
    left: 0;
    z-index: 0;
    .topbg {
      width: 100%;
      height: 210px;
    }
  }
  .content {
    width: calc(100% - 50px);
    margin: 0 auto;
    .cont-right {
      width: 100%;
      height: 100%;
      padding: 300px 0 0 0;
      .proli {
        box-sizing: border-box;
        // width: 120px;
        position: relative;
        background: #111111;
        box-sizing: border-box;
        padding: 30px 30px;
        .mainpic {
          width: 100%;
          height: 170px;
        }
        .time {
          color: #82c41c;
          font-size: 14px;
          box-sizing: border-box;
          padding: 10% 0 5% 0;
        }
        .title {
          cursor: pointer;
          color: #cdcdcd;
          font-size: 14px;
          font-weight: 400;
        }
      }
      .crtop {
        width: 100%;
        margin-bottom: 30px;
        .prolist {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .proli {
            width: calc(50% - 20px);
          }
        }
      }
      .probox {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        .prolist {
          width: calc(50% - 20px);
          height: 100%;
          background: #111111;
          .proli {
            width: 100%;
            box-sizing: border-box;
            padding: 30px 30px;
            .time {
              color: #82c41c;
              font-size: 14px;
              box-sizing: border-box;
              padding: 10% 0 5% 0;
            }
            .title {
              cursor: pointer;
              color: #cdcdcd;
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
  .pagenation {
    box-sizing: border-box;
    padding: 40px 0 60px 0;
  }
}
</style>