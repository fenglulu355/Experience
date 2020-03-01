
export default {
    //windowAdd 给window添加滚动条事件
    // windowAdd(name,events){
    //     window.addEventListener(name, this.events, true);
    // },
    //handleScroll 判断滚动长度
    // handleScroll(distance,zt) {
    //     let scrollTop =
    //       window.pageYOffset ||
    //       document.documentElement.scrollTop ||
    //       document.body.scrollTop;
    //       console.log(distance)
    //     if (scrollTop <= distance) {
    //         this.zt = false;
           
    //     } else {
    //         this.zt = true;
    //     }
    //   },
      //销毁滚动条
    //   deswindowAdd(name,event){
    //     window.removeEventListener(name, event);
    //   },
    // 方法1
    testMethod1: function () {
      console.log('对，我只是一个测试公共方法')
    },
    // 方法2
    testMethod2: function (val) {
      console.log('巧了，我也是测试公共方法，我是', val)
    }
  }
 