<template>
  <div id="app">
    <router-view ref="appView" />
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route () {
      //切换标签时
      this.handleRefreshTable();
    }
  },
  created () {
    let _this = this;
    //窗口改变时
    window.onresize = function () {
      _this.handleRefreshTable();
    };
  },
  updated () {
    //数据改变时
    this.handleRefreshTable();
  },
  methods: {
    handleRefreshTable () {
      var that = this;
      this.$nextTick(() => {
        // 获取页面中已注册过ref的所有的子组件。
        let refList = that.$refs.appView.$refs;
        if (refList) {
          for (let i of Object.keys(refList)) {
            // 根据doLayout方法判断子组件是不是el-table
            if (refList[i] && refList[i].doLayout) {
              // 执行doLayout方法
              refList[i].doLayout();
            }
          }
        }
      })
    }
  }

}
</script>
<style lang="scss">
// .el-table th.gutter {
//   display:table-cell !important;
// }
</style>
