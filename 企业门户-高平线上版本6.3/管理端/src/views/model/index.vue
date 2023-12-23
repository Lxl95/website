<template>
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <!-- 查询表单 -->
      <div ref="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="名称" prop="orderCode">
            <el-input v-model="params.name" clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
            <el-button type="primary" plain icon="el-icon-refresh">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 列表内容 -->
      <el-table
        v-loading="listLoading"
        element-loading-text="拼命加载中"
        :data="tableData"
        border
        stripe
        :header-cell-style="{background:'#F8F8F9',color:'#606266'}"
        style="width: 100%"
        :height="tableHeight"
      >
        <el-table-column label="序号" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.$index+(params.page - 1) * params.size + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="名称" align="center" prop="name" />
        <el-table-column label="年龄" align="center" prop="age" />
        <el-table-column align="center" fixed="right" label="操作" width="200">
          <template>
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total"
        :page-size="params.size"
        :current-page="params.page"
        :page-sizes="[15, 20, 25, 30]"
        style="margin-top:20px;"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      listLoading: false,
      tableHeight: null,
      tableData: [{
        name: '王小虎',
        age: 18
      }, {
        name: '章红',
        age: 20
      }],
      params: {
        name: '',
        size: 15,
        page: 1
      },
      total: 0
    }
  },
  mounted() {
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 92 - document.getElementsByClassName('fixed-header')[0].clientHeight
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 92 - document.getElementsByClassName('fixed-header')[0].clientHeight
      })()
    }
 },
  created() {

  },
  methods: {
    handleCurrentChange(val) {
      this.params.page = val
    },
    handleSizeChange(val) {
      this.params.size = val
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

