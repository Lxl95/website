<template>
  <section ref="box" class="app-main" :style="{'height':configs.hidden?'':'100vh'}">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import configs from '@/utils/syncConfig.js'
export default {
  name: 'AppMain',
  data() {
    return {
      configs
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    },
    box() {
      return this.$refs.box
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 90px);
  width: 100%;
  position: relative;
  overflow: auto;
  // scrollbar-face-color: red;
	// 			/*滚动条颜色*/
	// 			scrollbar-shadow-color: blue;
	// 			/*滚动条的边框*/
	// 			scrollbar-track-color: pink;
	// 			/*浏览器滚动条背景色*/
	// 			scrollbar-arrow-color: cyan;
}

.fixed-header+.app-main {
  padding-top: 90px;
  height: 100vh;
  overflow: auto;
}

.hiddenSlide {
  // .app-main {
  //   min-height: calc(100vh - 90px);
  // }
  .fixed-header+.app-main {
    padding-top: 0px;
  }
}
</style>
