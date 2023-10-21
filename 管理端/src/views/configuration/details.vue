<template>
  <!--视图容器-->
  <el-container style="height:100%">
    <!--主要引用页面-->
    <el-main style="padding:12px 20px;height: calc(100vh - 135px);">
      <el-page-header style="margin-bottom:10px" :content="contentTitle" @back="$emit('close')">
      </el-page-header>

    </el-main>
  </el-container>
  <!--内容结束-->
</template>
<script>

import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: "EventDetail",
  components: {

  },
  props: {
    row: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    pass: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      contentTitle: "编辑分类",

    };
  },
  watch: {
    row: {
      immediate: true,
      handler (val) {
        this.$nextTick(() => {
          this.getDetails();
        });
      }
    }
  },
  mounted () {

  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.event-detail {
  height: calc(100% - 34px);
  background: #fff;
  overflow: auto;
  border: 1px solid #dcdfe6;
}
// 左侧
/deep/.el-card {
  background: rgba(0, 0, 0, 0);
  .el-card__header {
    background: #eee;
    color: #303133;
    padding: 10px 5px;
    font-size: 14px;
    line-height: 19px;
    .el-icon-s-order {
      color: rgb(6, 131, 247);
      font-size: 18px;
    }
  }
  .el-card__body {
    background: #fff;
    padding: 5px;
  }
  .textItem {
    padding: 7px 10px;
    font-size: 15px;
    color: #605f5f;
  }
}
.two {
  margin-top: 15px;
}
// 文件
.file-table {
  padding: 10px 10px 10px 43px;
  height: 100%;
}
.el-image {
  /deep/ .el-image-viewer__wrapper {
    top: 84px;
  }
}
// 右侧
.file-table {
  .el-timeline {
    padding: 10px;
    .el-card {
      overflow: auto;
      .el-card__body {
        padding: 5px 0 5px 5px;
        width: max-content;
        height: 110px;

        img {
          height: 100px;
          width: auto;
          margin-right: 5px;
        }
        video {
          height: 100px;
          width: 200px;
          margin-right: 5px;
        }
        audio {
          height: 44px;
          margin-bottom: 8px;
          display: block;
        }
        .el-button {
          display: block;
          margin: 0 0 5px 0;
        }
      }
    }
  }
  .el-tab-pane {
    overflow: auto;
  }
}
.el-image-viewer__canvas img {
  height: auto !important;
}
</style>
