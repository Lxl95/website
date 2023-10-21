<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>

      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="姓名" prop="feedbackName">
            <el-input v-model="params.feedbackName" clearable placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick">查询</el-button>
            <el-button type="primary" plain icon="el-icon-refresh" @click="resetClick('params')">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table ref="myTable" v-loading="listLoading" element-loading-text="拼命加载中" stripe :data="tableData" border
        style="width: 100%" :header-cell-style="{background:'#F8F8F9',color:'#606266'}" :height="tableHeight">
        <el-table-column type="index" align="center" label="序号" width="60" />
        <el-table-column align="left" show-overflow-tooltip prop="feedbackName" label="姓名" width="200" />
        <el-table-column align="left" show-overflow-tooltip prop="feedbackPhone" label="手机号" width="300" />
        <el-table-column align="left" prop="email" label="邮箱" show-overflow-tooltip />
        <el-table-column align="left" prop="content" label="留言内容" show-overflow-tooltip />
        <el-table-column label="操作" align="left" width="200">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background :total="total" :page-size="params.size"
        :current-page="params.page" :page-sizes="[15, 20, 25, 30]" style="margin-top:20px;"
        @current-change="handleCurrentChange" @size-change="handleSizeChange" />
    </el-main>

    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { getToken } from '@/utils/auth'
import uploadUrl from '@/api/upload.js'
import { feedbackqueryBy, feedbackdel } from '@/api/columnCategory.js'
import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'contactUs',
  data () {
    return {
      form: {


      },
      rules: {
      },
      loading: false,
      uploadUrl,
      baseUrl: this.$store.state.app.baseUrl + "/JavaInstall/upload/imgs/",
      title: "",
      dialogVisible: false,
      tableHeight: null,
      tableData: [],
      params: {
        feedbackName: '',
        page: 1,
        size: 15
      },
      form: {

      },
      total: 0,
      listLoading: false
    }
  },
  mounted () {
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 92 - document.getElementsByClassName('fixed-header')[0].clientHeight
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 92 - document.getElementsByClassName('fixed-header')[0].clientHeight
      })()
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getToken,
    close () {
      this.$refs['form'].resetFields()
    },
    getList () {
      this.listLoading = true;
      feedbackqueryBy(this.params).then(res => {
        this.listLoading = false
        if (res.success && res.data) {
          this.tableData = res.data.rows

          this.$refs.myTable.doLayout();
          this.total = res.data.total
        } else {
          this.total = 0
          this.tableData = []
        }
      }).catch(() => {
        this.listLoading = false
      })
    },
    dateFormatter (row, column) {
      if (row.time) {
        return parseTime(row.time)
      } else {
        return ''
      }
    },
    resetClick () {
      this.params.feedbackName = "";
      this.getList();
    },


    handleCurrentChange (val) {
      this.params.page = val
      this.getList()
    },
    handleSizeChange (val) {
      this.params.size = val
      this.getList()
    },
    handleDelete (id) {
      this.$confirm('此操作将永久删除该条留言内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        feedbackdel(id).then(res => {
          msgAutoClose({
            message: '删除成功！',
            type: "success"
          });
          this.getList()
        })
      })
    },
    searchClick () {
      this.getList()
    },
    reloadClick (formName) {
      this.$refs[formName].resetFields()
      this.getList()
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  padding: 20px;
  .el-main {
    height: 100%;
    padding: 0;
  }
}
.dialog-header {
  text-align: right;
}
.el-divider {
  margin: 15px 0;
}
/deep/.el-image img {
  border-radius: 8px !important;
}
</style>
