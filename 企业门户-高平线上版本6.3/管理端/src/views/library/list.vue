<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="标题" prop="title">
            <el-input v-model="params.title" clearable placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label="年份" prop="year">
            <el-date-picker
              v-model="params.year"
              type="year"
              value-format="yyyy-MM-dd"
              placeholder="选择年"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchClick">查 询</el-button>
            <el-button type="primary" @click="reloadClick('params')">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        v-loading="listLoading"
        element-loading-text="拼命加载中"
        stripe
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{background:'#F8F8F9',color:'#606266'}"
        :height="tableHeight"
      >
        <el-table-column fixed="left" type="index" align="center" label="序号" width="60" />
        <el-table-column align="center" label="封面图" width="200">
          <template slot-scope="scope">
            <el-image style="width: 160px; height: 80px" :src="scope.row.picurl" fit="cover" />
          </template>
        </el-table-column>
        <el-table-column align="center" prop="title" label="标题" width="200" />
        <el-table-column align="center" prop="description" show-overflow-tooltip label="描述" />
        <el-table-column align="center" label="是否转载" width="100">
          <template slot-scope="scope">
            {{ scope.row.isreprint == '1' ? '是' : '否' }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="librarysize" label="文件大小" width="100" />
        <el-table-column align="center" :formatter="dateFormatter" label="发布时间" width="200" />
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            <router-link :to="{path: 'library-edit', query: {id: scope.row.id}}"><el-button type="success" size="mini">编辑</el-button></router-link>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
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
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { parseTime } from '@/utils/index'
import { getLibraryList, deleteLibrary } from '@/api/library'
export default {
  name: 'LibraryList',
  data() {
    return {
      tableHeight: null,
      tableData: [],
      params: {
        title: '',
        year: '',
        page: 1,
        size: 15
      },
      total: 0,
      listLoading: false
    }
  },
  mounted() {
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 200
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 200
      })()
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getLibraryList(this.params).then(res => {
        this.listLoading = false
        if (res.success && res.data) {
          this.tableData = res.data.rows
          this.total = res.data.total
        } else {
          this.total = 0
          this.tableData = []
        }
      }).catch(() => {
        this.listLoading = false
      })
    },
    dateFormatter(row, column) {
      if (row.time) {
        return parseTime(row.time)
      } else {
        return ''
      }
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.params.size = val
      this.getList()
    },
    handleDelete(id) {
      this.$confirm('此操作将永久删除该条内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteLibrary(id).then(res => {
          this.$message.success('删除成功！')
          this.getList()
        })
      })
    },
    searchClick() {
      this.getList()
    },
    reloadClick(formName) {
      this.$refs[formName].resetFields()
      this.getList()
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-header {
  text-align: right;
}
.el-divider {
  margin: 15px 0;
}
</style>
