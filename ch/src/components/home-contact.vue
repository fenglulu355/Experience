<template>
  <div class="home-contact">
    <div class="content">
      <div
        class="conttop"
        :style="{backgroundImage: 'url(' + require('../assets/home/homecontact/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
      <div class="contmain">
        <transition name="map">
          <div v-if="trans" class="map">
            <homemap v-if="mapinfos[0]" :item="mapinfos"></homemap>
          </div>
        </transition>
        <div class="address" v-show="show">
          <transition name="maplist">
            <ul v-if="trans" class="maplist">
              <li class="mapli" v-for="(item, index) in mapinfos" :key="index">
                <div class="mapinfos">
                  <p class="name">{{item.article_title}}</p>
                  <p class="address" @click="todaohang(item)">{{item.article_address}}</p>
                </div>
              </li>
            </ul>
          </transition>
        </div>
        <div class="address" v-show="!show">
          <transition name="maplist">
            <ul v-if="trans" class="addlist">
              <li class="addli" v-for="(item, index) in mapinfos" :key="index">
                <div class="mapinfos">
                  <p
                    class="name"
                    @click="todaohang(item)"
                  >{{item.article_title}}:{{item.article_address}}</p>
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
import homemap from "../components/home-map";
export default {
  name: "homeabout",
  data() {
    return {
      trans: false,
      mapinfos: [],
      show: true
    };
  },
  created() {
    this.requst();
    if (this.$route.name != "product" && this.$route.name != "cases") {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  methods: {
    todaohang(item) {
      this.$dialog
        .confirm({
          title: item.article_address,
          message: "到这里去"
        })
        .then(() => {
          window.location.href =
            `http://api.map.baidu.com/direction?origin=latlng:` +
            item.jwd.lat +
            `,` +
            item.jwd.lng +
            `|name:我的位置&destination=` +
            item.article_address +
            `&mode=driving&region=成都&output=html`;
        })
        .catch(() => {
          return;
        });
    },
    requst() {
      this.$axios.post("/index/api/getBaseList").then(res => {
        this.mapinfos = res.data.data;
        // console.log(this.mapinfos);
      });
    }
  },
  components: { homemap },
  watch: {
    srcoll(val) {
      // console.log(val,'val');
      this.trans = true;
      if (val <= 100) {
        this.trans = false;
      } else {
        this.trans = true;
      }
    }
  },
  props: ["srcoll"]
};
</script>
<style lang="less" scoped>
// 左边
.lfbg-enter-active {
  transition: all 1.5s ease-in-out;
}
.lfbg-enter {
  transform: translateX(-100px);
}
// 地图
.map-enter-active {
  transition: all 2s ease-in-out;
}
.map-enter,
.maplist-enter {
  transform: translateY(100px);
}
.maplist-enter-active {
  transition: all 2.5s ease-in-out;
}

.home-contact {
  // background: orange;
  width: 100%;
  position: relative;
  .content {
    width: 100%;
    min-height: 620px;
    box-sizing: border-box;
    padding: 40px 0;
    .conttop {
      width: 100%;
      height: 210px;
    }
    .contmain {
      box-sizing: border-box;
      width: 100%;
      .maplist {
        box-sizing: border-box;
        width: calc(100% - 50px);
        height: 100%;
        margin: 25px auto;
        border-top: 1px dashed #012c1c;
        border-left: 1px dashed #012c1c;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .mapli {
          display: inline-block;
          box-sizing: border-box;
          width: calc(100% / 2);
          height: 184px;
          border-right: 1px dashed #012c1c;
          border-bottom: 1px dashed #012c1c;
          background: #ffffff;
          color: #333333;
          text-align: center;
          .name {
            box-sizing: border-box;
            font-size: 24px;
            font-weight: bold;
            padding: 30px 0 10px 0;
          }
          .address {
            font-size: 22px;
            width: 85%;
            margin: 0 auto;
          }
        }
      }
      .addlist {
        box-sizing: border-box;
        padding: 40px 25px;
        .addli {
          .mapinfos {
            color: #ffffff;
            font-size: 24px;
            line-height: 60px;
          }
        }
      }
    }
  }
}
</style>