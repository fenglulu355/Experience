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
      name: ""
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
      let map = new window.BMap.Map(this.$refs.homemap); // 创建Map实例
      let point = new window.BMap.Point(this.item.jwd.lng, this.item.jwd.lat);
      map.centerAndZoom(point, 17); // 初始化地图,设置中心点坐标和地图级别
      let marker = new window.BMap.Marker(point);
      map.addOverlay(marker);
      var content = "<table>";
      content =
        content +
        `<tr><td class='gs'>` +
        this.item.article_title +
        `</td></tr>`;
      content =
        content +
        `<tr><td class='add'> 地址：` +
        this.item.article_address +
        `</td></tr>`;
      content =
        content +
        "<tr><td class='tel'>电话：" +
        this.item.article_tel +
        "(" +
        this.item.article_name +
        ")" +
        "</td></tr>";

      var a =
        `http://api.map.baidu.com/direction?origin=latlng:` +
        this.item.jwd.lat +
        `,` +
        this.item.jwd.lng +
        `|name:我的位置&destination=` +
        this.item.article_address +
        `&mode=driving&region=成都&output=html`;
      var b = this.item.article_address;
      var infowindow = new window.BMap.InfoWindow(content);
      marker.openInfoWindow(infowindow);
      marker.addEventListener("click", function() {
        this.openInfoWindow(infowindow);
        var r = confirm(`导航到` + `  ` + b + `  ` + `去`);
        if (r == true) {
          window.location.href = a;
        } else {
          return;
        }
        //
        // console.log("click " + a);
      });
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.OverviewMapControl());
      // map.addControl(new BMap.GeolocationControl());
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
