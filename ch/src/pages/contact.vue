<template>
  <div
    class="contact"
    :style="{backgroundImage: 'url(' + require('../assets/home/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
  >
    <div class="bg">
      <div
        class="topbg"
        :style="{backgroundImage: 'url(' + require('../assets/contact/bg.png')+ ')',
             backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
            }"
      ></div>
    </div>
    <div class="content">
      <transition name="map">
        <ul v-if="trans" class="maplist">
          <li class="mapli" v-for="(item, index) in mapinfos" :key="index">
            <div class="mapconts">
              <div class="mapbox">
                <bdmap v-if="item.jwd" :item="item"></bdmap>
              </div>
              <div class="mapinfos">
                <p class="location" @click="todaohang(item)">地址：{{item.article_address}}</p>
                <div class="phone">
                  <span>微信号：{{item.article_wx}}</span>
                  <span>邮件：{{item.article_email}}</span>
                  <span
                    @click="callPhone(item.article_tel)"
                  >{{item.article_name}}：{{item.article_tel}}</span>
                  <span @click="callPhone(item.article_phone)">
                    办公室电话：
                    {{item.article_phone}}
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import bdmap from "../components/bdmap";
export default {
  name: "about",
  data() {
    return {
      transa: false,
      trans: false,
      mapinfos: []
    };
  },

  created() {
    this.requst();
  },
  mounted() {
    this.trans = true;
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
      });
    },
    callPhone(phoneNumber) {
      window.location.href = "tel:" + phoneNumber;
    },
    wakeBaidu(item) {
      var geolocation = new BMap.Geolocation();
      // console.log(item);
      geolocation.getCurrentPosition(function(result) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          console.log(result);
          var latCurrent = result.latitude; //获取到的纬度
          var lngCurrent = result.longitude; //获取到的经度
          if (latCurrent && lngCurrent) {
            var scheme = "";

            // urlObject 是我这边地址栏查询参数对象
            var queryStr =
              "?origin=name:我的位置|latlng:" +
              latCurrent +
              "," +
              lngCurrent +
              "&destination=" +
              urlObject.lat +
              "," +
              urlObject.lng +
              "&region=" +
              urlObject.city +
              "&coord_type=bd09ll&mode=driving";

            if (isIOS()) {
              // ios 端
              scheme = "baidumap://map/direction" + queryStr;
            } else {
              // android 端
              scheme = "bdapp://map/direction" + queryStr;
            }

            // 主要实现代码
            window.location.href = scheme;

            var startTime = Date.now();
            var count = 0;
            var endTime = 0;

            var t = setInterval(function() {
              count += 1;
              endTime = Date.now() - startTime;
              if (endTime > 800) {
                clearInterval(t);
              }
              if (count < 30) return;
              if (!(document.hidden || document.webkitHidden)) {
                window.location.href =
                  "http://api.map.baidu.com/direction" +
                  queryStr +
                  "&output=html";
              }
            }, 20);

            window.onblur = function() {
              clearInterval(t);
            };
          } else {
            alert("获取不到定位，请检查手机定位设置");
          }
        }
      });
    }
  },
  components: { bdmap }
};
</script>
<style lang="less" scoped>
// 左边
.map-enter-active {
  transition: all 1.5s linear;
}
.map-enter {
  transform: translateY(150px);
}

.contact {
  width: 100%;
  min-height: 1600px;
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
    width: 100%;
    box-sizing: border-box;
    position: relative;
    .maplist {
      width: calc(100% - 50px);
      margin: 0 auto;
      box-sizing: border-box;
      padding: 160px 25px 20px 25px;
      // width: 100%;
      // 内容撑大自适应关键
      min-height: 620px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .mapli {
        background: #111111;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 50px 50px;
        margin-bottom: 20px;
        .mapconts {
          width: 100%;
          box-sizing: border-box;
          border: 1px dashed #999999;
          padding: 11px 11px;
          .mapbox {
            width: 100%;
            background: #82c41c;
          }
          .mapinfos {
            box-sizing: border-box;
            p {
              width: 100%;
              font-size: 24px;
              color: white;
              padding: 30px 0 26px 0;
            }
            .phone {
              width: 100%;
              font-size: 14px;
              color: #bbbbbb;
              span {
                display: inline-block;
                width: 100%;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>