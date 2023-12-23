<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 遮罩层 -->
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- 侧边栏 -->
    <sidebar v-if="configs.layout" class="sidebar-container" />
    <div :class="{hiddenSlide:!configs.layout}" class="main-container" :style="{'margin-left':configs.layout?'':'0px'}">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar v-if="configs.layout" />
        <tags-view v-if="configs.layout" />
      </div>
      <app-main />

    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Sidebar, TagsView, Navbar } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
import configs from '@/utils/syncConfig.js'

import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Sidebar,
    TagsView
  },
  mixins: [ResizeMixin],
  data () {
    return {
      configs
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  created () {

  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "~@/styles/mixin.scss";
// @import "~@/styles/variables.scss";

.app-wrapper {
  // @include clearfix;
  // position: relative;
  // height: 100%;
  // width: 100%;
  // overflow: hidden;

  // &.mobile.openSidebar {
  //   position: fixed;
  //   top: 0;
  // }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0px;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

.nav-header {
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  background: #304156;
  .el-menu {
    border: none;
  }
}
</style>
