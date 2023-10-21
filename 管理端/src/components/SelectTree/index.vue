<template>
  <el-select ref="test" :value="valueTitle" :disabled="disabled">
    <el-option :value="valueTitle" :label="valueTitle">
      <el-tree id="tree-option" ref="selectTree" :accordion="accordion" :default-expand-all="true"
        :expand-on-click-node="false" :data="options" :props="props" :node-key="props.value"
        :default-expanded-keys="defaultExpandedKey" @node-click="handleNodeClick" />
    </el-option>
  </el-select>
</template>

<script>
import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'ElTreeSelect',
  props: {
    /* 配置项 */
    props: {
      type: Object,
      default: () => {
        return {
          value: 'ORG_NO', // ID字段名
          label: 'ORG_NAME', // 显示名称
          children: 'MODELLIST' // 子级字段名
        }
      }
    },
    /* 选项列表数据(树形结构的对象数组) */
    options: {
      type: Array,
      default: () => { return [] }
    },
    /* 初始值 */
    value: {
      type: Number,
      default: () => { return null }
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => { return true }
    },
    /* 自动收起 */
    accordion: {
      type: Boolean,
      default: () => { return false }
    },
    disabled: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data () {
    return {
      valueId: this.value, // 初始值
      valueTitle: '',
      defaultExpandedKey: []
    }
  },
  watch: {
    value () {
      this.valueId = this.value
      this.initHandle()
    }
  },
  mounted () {
    this.initHandle()
  },
  methods: {
    // 初始化值
    initHandle () {
      if (this.valueId !== '' && this.valueId !== null) {
        if (this.props.label instanceof Object) {
          this.valueTitle = this.$refs.selectTree.getNode(this.valueId).data.meta.title // 初始化显示
        } else {
          this.valueTitle = this.$refs.selectTree.getNode(this.valueId).data[this.props.label] // 初始化显示
        }
        this.$refs.selectTree.setCurrentKey(this.valueId) // 设置默认选中
        // this.defaultExpandedKey = [this.valueId] // 设置默认展开
      }
      this.$nextTick(() => {
        const scrollWrap = document.querySelectorAll('.el-scrollbar .el-select-dropdown__wrap')[0]
        const scrollBar = document.querySelectorAll('.el-scrollbar .el-scrollbar__bar')
        scrollWrap.style.cssText = 'margin: 0px; max-height: none; overflow: hidden;'
        // eslint-disable-next-line no-return-assign
        scrollBar.forEach(ele => ele.style.width = 0)
      })
    },
    // 切换选项
    handleNodeClick (node) {
      if (this.props.label instanceof Object) {
        this.valueTitle = node.meta.title
      } else {
        this.valueTitle = node[this.props.label]
      }
      this.valueId = node[this.props.value]
      this.$emit('getValue', this.valueId)
      // this.defaultExpandedKey = []
      this.$refs.test.handleClose()
    },
    // 清除选中
    clearHandle () {
      this.valueTitle = ''
      this.valueId = null
      this.defaultExpandedKey = []
      this.clearSelected()
      this.$emit('getValue', null)
    },
    /* 清空选中样式 */
    clearSelected () {
      const allNode = document.querySelectorAll('#tree-option .el-tree-node')
      allNode.forEach((element) => element.classList.remove('is-current'))
    }
  }
}
</script>
<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  /* max-height: 274px; */
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>> .is-current .el-tree-node__label {
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
</style>
