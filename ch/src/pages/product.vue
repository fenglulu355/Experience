<template>
  <div
    class="product"
    :style="{backgroundImage: 'url(' + require('../assets/home/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
  >
    <div class="content" ref="element">
      <div class="cont-nav">
        <div class="icon">
          <img src="../assets/product/more.png" alt />
        </div>
        <transition name="nav">
          <!--:style="{transform:'translatex('+transform+')'}"  -->
          <ul class="cllist" ref="gouzi">
            <vue-scroll :ops="ops" style="height:25px">
              <li
                class="clli"
                :id="item.class_id"
                v-for="(item, index) in res"
                :key="index"
                :class="proClass ==index?'show':''"
              >
                <div class="cllibox" @click="toNav(item,index)">
                  <p>{{item.class_name}}</p>
                </div>
              </li>
            </vue-scroll>
          </ul>
        </transition>
      </div>

      <div class="cont-right">
        <div class="crtop">
          <transition name="trans-rtpro">
            <ul class="prolist">
              <li
                class="proli"
                v-for="(item, index) in prolista"
                :key="index"
                @click="todetail(item)"
              >
                <div
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
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistb[2].image_url + ')',
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
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistc[0].image_url + ')',
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
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistc[1].image_url + ')',
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
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistc[2].image_url + ')',
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
        <div class="btbt probox">
          <transition name="btarra">
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
                <p class="title" @click="todetail(prolistd[0])">{{prolistd[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="btarrb">
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
                <p class="title" @click="todetail(prolistd[1])">{{prolistd[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="btarrc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistd[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolistd[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistd[2].image_url + ')',
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
        <div class="prog probox">
          <transition name="proga">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistg[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolistg[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistg[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistg[0])">{{prolistg[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="progb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistg[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolistg[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistg[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistg[1])">{{prolistg[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="progc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistg[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolistg[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistg[2].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistg[2])">{{prolistg[2].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="proh probox">
          <transition name="proha">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolisth[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolisth[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolisth[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolisth[0])">{{prolisth[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="prohb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolisth[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolisth[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolisth[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolisth[1])">{{prolisth[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="prohc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolisth[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolisth[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolisth[2].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolisth[2])">{{prolisth[2].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="proi probox">
          <transition name="proia">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolisti[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolisti[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolisti[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolisti[0])">{{prolisti[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="proib">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolisti[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolisti[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolisti[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolisti[1])">{{prolisti[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="proic">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolisti[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolisti[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolisti[2].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolisti[2])">{{prolisti[2].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="proj probox">
          <transition name="proja">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistj[0]">
                <div
                  class="mainpic"
                  @click="todetail(prolistj[0])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistj[0].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistj[0])">{{prolistj[0].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="projb">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistj[1]">
                <div
                  class="mainpic"
                  @click="todetail(prolistj[1])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistj[1].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistj[1])">{{prolistj[1].article_title}}</p>
              </div>
            </div>
          </transition>
          <transition name="projc">
            <div class="prolist" v-if="trans">
              <div class="proli" v-if="prolistj[2]">
                <div
                  class="mainpic"
                  @click="todetail(prolistj[2])"
                  :style="{backgroundImage: 'url(' +baseurl+`/public/`+prolistj[2].image_url + ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
                ></div>
                <p class="title" @click="todetail(prolistj[2])">{{prolistj[2].article_title}}</p>
              </div>
            </div>
          </transition>
        </div>

        <mo-pagination
          :page-index="currentPage"
          :total="count"
          :page-size="pageSize"
          @change="pageChange"
        ></mo-pagination>
      </div>
    </div>

    <procase :srcoll="scrolldis"></procase>
    <bdmap :srcoll="scrolldis"></bdmap>
  </div>
</template>

<script>
import moPagination from "../components/pagenation";
import httpUrl from "../utils/url";
import procase from "../components/pro-case";
import products from "../components/pro-product";
import bdmap from "../components/home-contact";
export default {
  name: "product",
  data() {
    return {
      domHeight: "",
      baseurl: "",
      pronameshow: false,
      pageSize: 30, // 每页显示20条数据
      currentPage: 1, // 当前页码
      count: 1, // 总记录数,
      trans: false,
      transa: false,
      proClass: 0,
      prolistclass: 0,
      scrolldis: null,
      navlist: [],
      prolista: [],
      prolistb: [],
      prolistc: [],
      prolistd: [],
      proliste: [],
      prolistf: [],
      prolistg: [],
      prolisth: [],
      prolisti: [],
      prolistj: [],
      class_id: "",
      res: [],
      total: [],
      infos: [],
      transform: null,
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          scrollingX: true,
          speed: 500,
          initialScrollX: ""
        },
        rail: {
          background: "#090909",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null, //轨道距 x 和 y 轴两端的距离
          gutterOfSide: "0", //距离容器的距离
          keepShow: false, //是否即使 bar 不存在的情况下也保持显示
          border: "none" //边框
        },
        bar: {
          disable: true,
          minSize: 0.3,
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "#82c41c" //颜色
        }
      }
    };
  },
  beforeCreate() {},
  created() {
    this.baseurl = httpUrl.httpUrl;
    if (!this.$route.query.id) {
      this.requst();
    } else {
      this.requst(this.$route.query.id);
    }
    if (sessionStorage.getItem("productClass")) {
      this.proClass = sessionStorage.getItem("productClass");
    } else {
      this.proClass = 0;
    }
  },
  mounted() {
    let a = sessionStorage.getItem("transform");
    this.$set(this.ops.scrollPanel, "initialScrollX", a);
    this.trans = true;
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    aaa() {},
    todetail(item) {
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
        if (!val) {
          this.class_id = this.res[0].class_id;
          this.requstKind(this.class_id, 1);
        } else {
          this.class_id = val;
          this.requstKind(this.class_id, 1);
        }
      });
    },
    requstKind(val, page) {
      this.$axios
        .post("/index/api/getProductList", {
          id: val,
          limit: 30,
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
          this.prolistg = res.data.data.data.slice(18, 21);
          this.prolisth = res.data.data.data.slice(21, 24);
          this.prolisti = res.data.data.data.slice(24, 27);
          this.prolistj = res.data.data.data.slice(27, 30);
          this.total = res.data.data.total.reverse();
        });
    },
    handleScroll: function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrolldis = scrollTop;
      // console.log(this.scrolldis);
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
  components: { moPagination, procase, bdmap, products }
};
</script>
<style lang="less" scoped>
// 左边
// .nav-enter-active {
//   transition: all 1.5s linear;
// }
// .nav-enter {
//   transform: translateX(-100px);
// }
// 第一排
.trans-rtpro-enter-active {
  transition: all 2s ease-in-out;
}
.trans-rtpro-enter {
  transform: translateY(0px);
}
// 第二排
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
// 第三排
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

//第四排
.btarra-enter-active {
  transition: all 3.5s ease-in-out;
}
.btarrb-enter-active {
  transition: all 4s ease-in-out;
}
.btarrc-enter-active {
  transition: all 4.5s ease-in-out;
}
.btarra-enter,
.btarrb-enter,
.btarrc-enter {
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
//第七排
.proga-enter-active {
  transition: all 8s ease-in-out;
}
.progb-enter-active {
  transition: all 8.5s ease-in-out;
}
.progc-enter-active {
  transition: all 9s ease-in-out;
}

.proga-enter,
.progb-enter,
.progc-enter {
  transform: translateY(90px);
}
//第八排
.proha-enter-active {
  transition: all 9.5s ease-in-out;
}
.prohb-enter-active {
  transition: all 10s ease-in-out;
}
.prohc-enter-active {
  transition: all 10.5s ease-in-out;
}

.proha-enter,
.prohb-enter,
.prohc-enter {
  transform: translateY(100px);
}
//第九排
.proia-enter-active {
  transition: all 11s ease-in-out;
}
.proib-enter-active {
  transition: all 11.5s ease-in-out;
}
.proic-enter-active {
  transition: all 12s ease-in-out;
}

.proia-enter,
.proib-enter,
.proic-enter {
  transform: translateY(110px);
}
//第十排
.proja-enter-active {
  transition: all 12.5s ease-in-out;
}
.projb-enter-active {
  transition: all 13s ease-in-out;
}
.projc-enter-active {
  transition: all 13.5s ease-in-out;
}

.proja-enter,
.projb-enter,
.projc-enter {
  transform: translateY(120px);
}
.product {
  // background: orange;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 88px 0 0 0px;
  .content {
    width: 100%;
    .cont-nav {
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      .icon {
        position: absolute;
        top: 5px;
        right: 30px;
      }
      .cllist {
        margin: 30px auto;
        box-sizing: border-box;
        width: calc(100% - 50px);
        padding-right: 25px;
        border-bottom: 4px solid #82c41c;
        white-space: nowrap;
        .clli {
          // width: 300px;
          margin-right: 69px;
          display: inline-block;
          color: white;
          font-size: 28px;
          // text-align: center;
        }
        .show {
          color: #82c41c;
        }
      }
    }
    .cont-right {
      width: calc(100% - 50px);
      margin: 0 auto;
      height: 100%;
      box-sizing: border-box;
      padding-top: 30px;
      .proli {
        width: 100%;
        height: 220px;
        position: relative;
        .mainpic {
          width: 100%;
          height: 170px;
          border-radius: 20px;
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
        // &:hover .title {
        //   display: none;
        // }
        // &:hover .todetail {
        //   cursor: pointer;
        //   display: flex;
        //   justify-content: space-between;
        // }
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
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px 0;
        .prolist {
          width: 32%;
          height: 100%;
          .proli {
            width: 100%;
          }
        }
      }
    }
    .pagenation {
      box-sizing: border-box;
      padding: 40px 0 40px 0;
    }
  }
}
</style>