## VUE、多个组件过渡，tab选项卡效果 

1、导航栏

```
   <!-- 导航栏 -->
    <div class="navbox">{{title}}</div>
```

2、内容

```
<!-- 内容 -->
    <div class="cont">
      <!-- <transition name="slide" mode="out-in">
      <keep-alive>-->
       onent>
      <!-- </keep-alive>
      </transition>-->
    </div>
```

3、菜单栏

```
<!-- tab选项 -->
    <div class="tabBar">
      <section
        class="tabitem"
        v-for="(item, index) in tabnav"
        :key="index"
        @click="tabClick({item,index})"
      >{{item.title}}</section>
      <!-- <section class="cursor" :style="{left}"></section> -->
    </div>
```

4、data

```
 data() {
    return {
      tabnav: [
        { title: "我的主页", page: "Home" },
        { title: "我的新闻", page: "News" },
        { title: "我的关于", page: "About" },
        { title: "个人中心", page: "Mine" }
      ],
      title: "我的主页",
      curPage: "Home"
      // left: 0
    };
  },
```

5、组件

```
 components: {
    Home: { template: `<div style="background:pink;" class="page">主页</div>` },
    News: {
      template: `<div style="background:green;" class="page">新闻</div>`
    },
    Mine: {
      template: `<div style="background:orange;" class="page">我的</div>`
    },
    About: {
      template: `<div style="background:blue;"  class="page">关于</div>`
    }
  },
```

6、点击事件

```
 methods: {
    tabClick({ item, index }) {
      this.curPage = item.page;
      console.log(item.page);
      this.title = item.title;

      // this.left = 25 * index + "%";
    }
  }
```

