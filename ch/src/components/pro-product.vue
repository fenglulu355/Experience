<template>
  <div class="home-product">
    <div
      class="conttop"
      :style="{backgroundImage: 'url(' + require('../assets/product/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
    ></div>
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
                  @click="todetail(prolistb[0])"
                  :style="{backgroundImage: 'url('+baseurl+`/public/` + prolistb[0].image_url+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
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
          <transition name="foura">
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
          <transition name="fourb">
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
          <transition name="fourc">
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
        <div class="fifthbt probox">
          <transition name="fiftha">
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
                <p class="title" @click="todetail(proliste[0])">{{proliste[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="fifthb">
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
                <p class="title" @click="todetail(proliste[1])">{{proliste[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="fifthc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="proliste[2]">
                <div
                  class="mainpic"
                  @click="todetail(proliste[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+proliste[2].image_url + ')',
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
        <div class="sixthbt probox">
          <transition name="sixtha">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistf[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolistf[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistf[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistf[0])">{{prolistf[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="sixthb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistf[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolistf[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistf[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistf[1])">{{prolistf[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="sixthc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistf[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolistf[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistf[2].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistf[2])">{{prolistf[2].article_title}}</p>
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
      pageSize: 12, // 每页显示30条数据
      currentPage: 1, // 当前页码
      count: 1, // 总记录数,
      trans: false,
      proClass: 0,
      navlist: [],
      prolista: [],
      prolistb: [],
      prolistc: [],
      prolistd: [],
      proliste: [],
      prolistf: [],
      class_id: "",
      res: [],
      infos: [],
      heights: this.height
    };
  },
  created() {
    this.requst();
    this.baseurl = httpUrl.httpUrl;
  },
  mounted() {
    // console.log(this.height)
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
    todetail(val) {
      let id = val.article_id;
      this.$router.push({
        path: "/detail",
        query: { id: id, kind: "case" }
      });
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
          limit: 18,
          page: page
        })
        .then(res => {
          this.count = res.data.data.total.length;
          this.prolista = res.data.data.data.slice(0, 3);
          this.prolistb = res.data.data.data.slice(3, 6);
          this.prolistc = res.data.data.data.slice(6, 9);
          this.prolistd = res.data.data.data.slice(9, 12);
          this.proliste = res.data.data.data.slice(12, 15);
          this.prolistf = res.data.data.data.slice(15, 18);
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
      // console.log(val)
      this.trans = true;
      // if (val <= 500) {
      //   this.trans = false;
      // } else {
      //   this.trans = true;
      // }
    }
  },
  props: {
    srcoll: {
      type: Number,
      default: 0
    }
  },
  components: { moPagination }
};
</script>
<style lang="less" scoped>
// 第一排
.trans-rtpro-enter-active {
  transition: all 2s ease-in-out;
}
.trans-rtpro-enter {
  transform: translateY(0px);
}
// 2
.centera-enter-active {
  transition: all 1.5s ease-in-out;
}
.centerb-enter-active {
  transition: all 2s ease-in-out;
}
.centerc-enter-active {
  transition: all 2.5s ease-in-out;
}
.centera-enter,
.centerb-enter,
.centerc-enter {
  transform: translateY(40px);
}
// 右三
.proarra-enter-active {
  transition: all 3s ease-in-out;
}
.proarrb-enter-active {
  transition: all 3.5s ease-in-out;
}
.proarrc-enter-active {
  transition: all 4s ease-in-out;
}
.proarra-enter,
.proarrb-enter,
.proarrc-enter {
  transform: translateY(50px);
}
// 4
.foura-enter-active {
  transition: all 4.5s ease-in-out;
}
.fourb-enter-active {
  transition: all 5s ease-in-out;
}
.fourc-enter-active {
  transition: all 5.5s ease-in-out;
}
.foura-enter,
.fourb-enter,
.fourc-enter {
  transform: translateY(60px);
}
//第五排
.fiftha-enter-active {
  transition: all 5s ease-in-out;
}
.fifthb-enter-active {
  transition: all 5.5s ease-in-out;
}
.fifthc-enter-active {
  transition: all 6s ease-in-out;
}

.fiftha-enter,
.fifthb-enter,
.fifthc-enter {
  transform: translateY(70px);
}
//第六排
.sixtha-enter-active {
  transition: all 6.5s ease-in-out;
}
.sixthb-enter-active {
  transition: all 7s ease-in-out;
}
.sixthc-enter-active {
  transition: all 7.5s ease-in-out;
}

.sixtha-enter,
.sixthb-enter,
.sixthc-enter {
  transform: translateY(80px);
}
.home-product {
  // background: pink;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  .conttop {
    width: 100%;
    height: 210px;
  }
  .content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 25px 30px 25px;
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

        // &:hover .todetail {
        //   cursor: pointer;
        //   display: flex;
        //   justify-content: space-between;
        // }
      }
      .crtop {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 1%;
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
        box-sizing: border-box;
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
    margin: 0px auto;
    border-radius: 10px;
    p {
      color: white;
      font-size: 24px;
      line-height: 44px;
    }
  }
}
</style>