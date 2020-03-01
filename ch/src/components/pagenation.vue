
<template>
  <div class="pagenation">
    <ul class="mo-paging">
      <!-- first -->
      <!--<li-->
      <!--:class="['paging-item', 'paging-item&#45;&#45;first', {'paging-item&#45;&#45;disabled' : index === 1}]"-->
      <!--@click="first">首页</li>-->
      <!-- prev -->
      <li
        :class="['paging-item', 'paging-item--prev', 'paging-item-page', 'paging-item-page-prev', {'paging-item--disabled' : index === 1}]"
        @click="prev"
      >
        <div class="img">
          <img src="../assets/home/prev.png" alt />
        </div>
      </li>
      <li :class="['paging-item']">
        <div class="current">
          <span class="cur">{{ pageIndex }}</span>
          <span>/</span>
          <span>{{pages}}</span>
        </div>
      </li>
      <li :class="['paging-item', 'paging-item--more']"></li>
      <!-- next -->
      <li
        :class="['paging-item', 'paging-item--next','paging-item-page', 'paging-item-page-prev', {'paging-item--disabled' : index === pages}]"
        @click="next"
      >
        <div class="img">
          <img src="../assets/home/next.png" alt />
        </div>
      </li>
      <!-- last -->
      <!--<li-->
      <!--:class="['paging-item', 'paging-item&#45;&#45;last', {'paging-item&#45;&#45;disabled' : index === pages}]"-->
      <!--@click="last">末页</li>-->
    </ul>
  </div>
</template>
<script>
export default {
  name: "MoPaging",
  // 通过props来接受从父组件传递过来的值
  props: {
    // 页面中的可见页码，其他的以...替代, 必须是奇数
    perPages: {
      type: Number,
      default: 7
    },
    // 当前页码
    pageIndex: {
      type: Number,
      default: 1
    },
    // 每页显示条数
    pageSize: {
      type: Number,
      default: 6
    },
    // 总记录数
    total: {
      type: Number,
      default: 1
    }
  },
  methods: {
    prev() {
      if (this.index > 1) {
        this.go(this.index - 1);
      }
    },
    next() {
      if (this.index < this.pages) {
        this.go(this.index + 1);
      }
    },
    first() {
      if (this.index !== 1) {
        this.go(1);
      }
    },
    last() {
      if (this.index != this.pages) {
        this.go(this.pages);
      }
    },
    go(page) {
      if (this.index !== page) {
        this.index = page;
        // 父组件通过change方法来接受当前的页码
        this.$emit("change", this.index);
      }
    }
  },
  computed: {
    // 计算总页码
    pages() {
      return Math.ceil(this.size / this.limit);
    },

    // 计算页码，当count等变化时自动计算
    pagers() {
      const array = [];
      const perPages = this.perPages;
      const pageCount = this.pages;
      let current = this.index;
      const _offset = (perPages - 1) / 2;
      const offset = {
        start: current - _offset,
        end: current + _offset
      };
      // -1, 3
      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start);
        offset.start = 1;
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount);
        offset.end = pageCount;
      }
      if (offset.start < 1) offset.start = 1;
      this.showPrevMore = offset.start > 1;
      this.showNextMore = offset.end < pageCount;
      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i);
      }

      return array;
    }
  },
  data() {
    return {
      index: this.pageIndex, // 当前页码
      limit: this.pageSize, // 每页显示条数
      size: this.total || 1, // 总记录数
      showPrevMore: false,
      showNextMore: false
    };
  },
  watch: {
    pageIndex(val) {
      this.index = val || 1;
    },
    pageSize(val) {
      this.limit = val || 10;
    },
    total(val) {
      this.size = val || 1;
    }
  }
};
</script>
<style scoped lang="less">
.pagenation {
  width: 100%;
  text-align: center;
  .mo-paging {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .paging-item {
      cursor: pointer;
      display: inline-block;
      color: white;
      // margin: 0 10px;
      .current {
        //  background: orange;
        padding: 0 20px;
        font-size: 28px;
        .cur {
          color: #82c41c;
        }
        span {
          margin: 0 3px;
        }
      }

      /*//禁用*/
      //   &.paging-item--disabled {
      //     cursor: not-allowed;
      //     opacity: 0.5;
      //   }
      //   &.paging-item--more,
      //   &.paging-item--current {
      //     cursor: default;
      //   }
      /*//选中*/
      &.paging-item--current {
        color: #82c41c;
        position: relative;
        z-index: 1;
      }
    }
    .paging-item-page {
      cursor: pointer;
      width: 51px;
      img {
        width: 100%;
      }
    }
  }
}

// .mo-paging {
//   display: inline-block;
//   padding: 0;
//   margin: 1rem 0;
//   font-size: 0;
//   list-style: none;
//   user-select: none;
//   > .paging-item {
//     display: inline;
//     font-size: 14px;
//     position: relative;
//     padding: 6px 12px;
//     line-height: 1.42857143;
//     text-decoration: none;
//     border: 1px solid #ccc;
//     background-color: #fff;
//     cursor: pointer;
//     color: #7b7b7b;
//     border-radius: 34px;
//     margin-left: 10px;

//     &:first-child {
//       margin-left: 0;
//     }
//     &:hover {
//       background-color: #f0f0f0;
//       color: #e60012;
//     }
//     &.paging-item--disabled,
//     &.paging-item--more {
//       background-color: #fff;
//       color: #505050;
//     }
//     /*//禁用*/
//     &.paging-item--disabled {
//       cursor: not-allowed;
//       opacity: 0.5;
//     }
//     &.paging-item--more,
//     &.paging-item--current {
//       cursor: default;
//     }
//     /*//选中*/
//     &.paging-item--current {
//       background-color: #e60012;
//       color: #fff;
//       position: relative;
//       z-index: 1;
//       border-color: #e60012;
//     }
//   }
// }
</style>

