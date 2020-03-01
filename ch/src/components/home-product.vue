<template>
  <div class="home-product">
    <div class="show-title">
      <p class="cname">产品展示</p>
      <p class="ename">PRODUCTS</p>
    </div>
    <div class="warpper">
      <van-swipe :autoplay="3000" touchable indicator-color="#82C41C">
        <van-swipe-item v-for="(item, index) in slides" :key="index">
          <img :src="baseurl+`/public/`+item.image_url" alt />
          <!-- <p>{{index}}</p> -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <div class="cont-right">
        <div class="crtop">
          <!-- <transition name="trans-rtpro"> -->
          <!-- v-if="trans" -->
          <ul class="prolist">
            <li
              class="proli"
              v-for="(item, index) in prolista"
              :key="index"
              @click="todetail(item)"
            >
              <div
                v-if="item.image_url"
                class="mainpic"
                :style="{backgroundImage: 'url(' +baseurl+`/public/`+item.image_url +  ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
              ></div>
              <p class="title">{{item.article_title}}</p>
            </li>
          </ul>
          <!-- </transition> -->
        </div>
        <div class="crcenter probox">
          <transition name="centera">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistb[0]">
                <div
                  class="mainpic"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + prolistb[0].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                  @click="todetail(prolistb[0])"
                ></div>
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
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+ prolistb[1].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistb[1])">{{prolistb[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="centerc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistb[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolistb[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+ prolistb[2].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistb[2])">{{prolistb[2].article_title}}</p>
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
                  :style="{backgroundImage: 'url('+baseurl+`/public/` +  prolistc[0].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
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
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + prolistc[1].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistc[1])">{{prolistc[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="proarrc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistc[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolistc[2])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + prolistc[2].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistc[2])">{{prolistc[2].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="fourbt probox">
          <transition name="fourbta">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistd[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolistd[0])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` +  prolistd[0].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistd[0])">{{prolistd[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="fourbtb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistd[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolistd[1])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + prolistd[1].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistd[1])">{{prolistd[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="fourbtc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistd[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolistd[2])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + prolistd[2].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistd[2])">{{prolistd[2].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="fivebt probox">
          <transition name="fivebta">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="proliste[0]">
                <div
                  class="mainpic"
                  @click="todetail(proliste[0])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` +  proliste[0].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(proliste[0])">{{proliste[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="fivebtb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="proliste[1]">
                <div
                  class="mainpic"
                  @click="todetail(proliste[1])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + proliste[1].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(proliste[1])">{{proliste[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="fivebtc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="proliste[2]">
                <div
                  class="mainpic"
                  @click="todetail(proliste[2])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + proliste[2].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(proliste[2])">{{proliste[2].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- more -->
    <div class="more">
      <p @click="tomore">查看更多</p>
    </div>
  </div>
</template>

<script>
import moPagination from "../components/pagenation";
import httpUrl from "../utils/url";
export default {
  name: "homeproduct",
  data() {
    return {
      baseurl: "",
      trans: false,
      proClass: 0,
      navlist: [],
      prolista: [],
      prolistb: [],
      prolistc: [],
      prolistd: [],
      proliste: [],
      class_id: "",
      res: [],
      infos: [],
      slides: []
    };
  },
  created() {
    this.requst();
    this.baseurl = httpUrl.httpUrl;
  },
  methods: {
    tomore() {
      this.$router.push({ path: "/product" });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      sessionStorage.setItem("productClass", 0);
      sessionStorage.setItem("footerindex", 1);
      sessionStorage.setItem("transform", 0);
      // 刷新页面
      this.$router.go(0);
    },
    todetail(item) {
      let id = item.article_id;
      this.$router.push({
        path: "/detail",
        query: { id: id, kind: "product" }
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    // 请求数据
    requst() {
      this.$axios.post("/index/api/getProductClass").then(respro => {
        this.res = respro.data.data;
        this.class_id = this.res[0].class_id;
        this.requstKind(this.class_id, 1);
      });
    },
    requstKind(val, page) {
      this.$axios
        .post("/index/api/getProductList", {
          id: val,
          limit: 15,
          page: page
        })
        .then(res => {
          // console.log(res);
          this.count = res.data.data.total.length;
          this.prolista = res.data.data.data.slice(0, 3);
          this.prolistb = res.data.data.data.slice(3, 6);
          this.prolistc = res.data.data.data.slice(6, 9);
          this.prolistd = res.data.data.data.slice(9, 12);
          this.proliste = res.data.data.data.slice(12, 15);
          this.slides = res.data.data.data.slice(4, 7);
        });
    },
    getList(page) {
      this.requstKind(this.class_id, page);
    },
    pageChange(index) {
      this.currentPage = index;
      this.getList(index);
    },
    toNav(item, index) {
      this.proClass = index;
      this.class_id = item.class_id;
      this.requstKind(this.class_id);
    }
  },
  watch: {
    srcoll(val) {
      // console.log(val,'val');
      if (val <= 35) {
        this.trans = false;
      } else {
        this.trans = true;
      }
    }
  },
  props: ["srcoll"],
  components: { moPagination }
};
</script>
<style lang="less" scoped>
// 右边
.trans-rtpro-enter-active {
  transition: all 2s ease-in-out;
}
.trans-rtpro-enter {
  transform: translateY(0px);
}
// 右二
.centera-enter-active {
  transition: all 0.5s linear;
}
.centerb-enter-active {
  transition: all 1s linear;
}
.centerc-enter-active {
  transition: all 1.5s linear;
}
.centera-enter,
.centerb-enter,
.centerc-enter {
  transform: translateY(30px);
}
// 右三
.proarra-enter-active {
  transition: all 2s ease-in-out;
}
.proarrb-enter-active {
  transition: all 2.5s ease-in-out;
}
.proarrc-enter-active {
  transition: all 3s ease-in-out;
}
.proarra-enter,
.proarrb-enter,
.proarrc-enter {
  transform: translateY(40px);
}
// 右四
.fourbta-enter-active {
  transition: all 3.5s ease-in-out;
}
.fourbtb-enter-active {
  transition: all 4s ease-in-out;
}
.fourbtc-enter-active {
  transition: all 4.5s ease-in-out;
}
.fourbta-enter,
.fourbtb-enter,
.fourbtc-enter {
  transform: translateY(40px);
}
// 右五
.fivebta-enter-active {
  transition: all 5s ease-in-out;
}
.fivebtb-enter-active {
  transition: all 5.5s ease-in-out;
}
.fivebtc-enter-active {
  transition: all 6s ease-in-out;
}
.fivebta-enter,
.fivebtb-enter,
.fivebtc-enter {
  transform: translateY(40px);
}

.home-product {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0 25px;
  .warpper {
    // box-sizing: border-box;
    padding: 20px 0;
    width: 100%;
    height: 320px;
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
  .show-title {
    text-align: center;
    color: white;
    .cname {
      font-size: 32px;
      font-weight: bold;
      position: relative;
      padding: 20px 0 10px 0;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 40%;
        // transform: translateY(-50%);
        z-index: 0;
        width: 35%;
        height: 2px;
        background: #e2ead7;
        opacity: 0.3;
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 40%;
        // transform: translateY(-50%);
        z-index: 0;
        width: 35%;
        height: 2px;
        background: #e2ead7;
        opacity: 0.3;
      }
    }
    .ename {
      font-size: 20px;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    .cont-right {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      .proli {
        width: 100%;
        height: 220px;
        position: relative;
        .mainpic {
          width: 100%;
          height: 170px;
        }
        .title {
          width: 100%;
          height: 40px;
          box-sizing: border-box;
          padding: 10px 0;
          text-align: center;
          color: white;
          font-size: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .crtop {
        width: 100%;
        // margin-bottom: 1%;
        .prolist {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .proli {
            width: 32%;
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
          width: 32%;
          height: 100%;
          .proli {
            width: 100%;
          }
        }
      }
    }
  }
  .more {
    width: 200px;
    height: 44px;
    background: #82c41c;
    text-align: center;
    margin: 30px auto;
    border-radius: 10px;
    p {
      color: white;
      font-size: 24px;
      line-height: 44px;
    }
  }
}
</style>