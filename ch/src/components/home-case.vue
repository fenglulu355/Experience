<template>
  <div class="home-product">
    <div class="show-title">
      <p class="cname">成功案例</p>
      <p class="ename">CASE</p>
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
      class_id: "",
      res: [],
      infos: []
    };
  },
  created() {
    this.requst();
    this.baseurl = httpUrl.httpUrl;
  },
  methods: {
    tomore() {
      this.$router.push({ path: "/cases" });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      sessionStorage.setItem("caseproClass", 0);
      sessionStorage.setItem("footerindex", 2);
      sessionStorage.setItem("casetransform", 0);
      // 刷新页面
      this.$router.go(0);
    },
    todetail(item) {
      let id = item.article_id;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.$router.push({
        path: "/detail",
        query: { id: id, kind: "case" }
      }); // 刷新页面
      this.$router.go(0);
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
        .post("/index/api/getCaseList", {
          id: val,
          limit: 9,
          page: page
        })
        .then(res => {
          // console.log(res);
          this.count = res.data.data.total.length;
          this.prolista = res.data.data.data.slice(0, 3);
          this.prolistb = res.data.data.data.slice(3, 6);
          this.prolistc = res.data.data.data.slice(6, 9);
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
      if (val <= 680) {
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
.home-product {
  // background: pink;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0 25px;
  .show-title {
    text-align: center;
    color: white;
    .cname {
      box-sizing: border-box;
      font-size: 32px;
      font-weight: bold;
      position: relative;
      padding: 20px 0 10px 0;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 60%;
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
        top: 60%;
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
    box-sizing: border-box;
    padding-top: 50px;
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

          text-align: center;
          box-sizing: border-box;
          padding: 10px 0;
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
        width: 100%;
        box-sizing: border-box;
        padding: 1% 0;
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