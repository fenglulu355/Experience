<template>
  <div id="hmmap">
    <div id="homemap" ref="homemap"></div>
    <router-view name="map"></router-view>
  </div>
</template>
<script>
export default {
  name: "bdmap",
  data() {
    return {
      addr: "",
      phone: "",
      name: "",
      point: [],
      marker: []
    };
  },
  created() {
    //  console.log(this.lata)
  },
  mounted() {
    this.map();
  },
  methods: {
    map() {
      // console.log(this.item, "this.item");
      let map = new window.BMap.Map(this.$refs.homemap); // 创建Map实例
      for (var i in this.item) {
        this.point[i] = new window.BMap.Point(
          this.item[i].jwd.lng,
          this.item[i].jwd.lat
        );

        map.centerAndZoom(this.point[i], 17); // 初始化地图,设置中心点坐标和地图级别
        this.marker[i] = new window.BMap.Marker(this.point[i]);
        this.marker[i].address = this.item[i].article_address;
        this.marker[i].addEventListener("click", function(i) {
          var r = confirm(
            `导航到` + `  ` + i.currentTarget.address + `  ` + `去`
          );
          if (r == true) {
            window.location.href =
              `http://api.map.baidu.com/direction?origin=latlng:` +
              i.currentTarget.point.lat +
              `,` +
              i.currentTarget.point.lng +
              `|name:我的位置&destination=` +
              i.currentTarget.address +
              `&mode=driving&region=成都&output=html`;
          } else {
            return;
          }
        });

        map.addOverlay(this.marker[i]);
      }

      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.OverviewMapControl());
      map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    }
  },
  props: ["item"]
};
</script>
<style >
#hmmap {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#homemap {
  height: 400px;
  overflow: hidden;
}
.gs {
  color: #82c41c;
  font-size: 14px;
  font-weight: bold;
}
.add {
  font-size: 12px;
}
.tel {
  font-size: 12px;
}
</style>
