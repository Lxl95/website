<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">

          <el-form-item label="栏目类别" prop="title">
            <el-select v-model="params.columncategoryid" clearable placeholder="请选择" @clear="handleClear"
              ref="selectUpResId">
              <el-option hidden key="upResId" :value="params.columncategoryid" :label="upResName">
              </el-option>
              <el-tree :data="data" :props="defaultProps" :expand-on-click-node="false" :check-on-click-node="true"
                @node-click="handleNodeClick">
              </el-tree>
            </el-select>
          </el-form-item>
          <el-form-item label="新闻类型" prop="newsType">
            <el-select v-model="params.newsType" placeholder="请选择">
              <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="新闻标题" prop="title">
            <el-input v-model="params.title" clearable placeholder="请输入新闻标题" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick">查询</el-button>
            <el-button type="primary" plain icon="el-icon-refresh" @click="resetClick('params')">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table ref="table" v-loading="listLoading" element-loading-text="拼命加载中" stripe :data="tableData" border
        style="width: 100%" :header-cell-style="{background:'#F8F8F9',color:'#606266'}" :height="tableHeight">
        <el-table-column type="index" align="center" label="序号" width="80" />
        <el-table-column align="left" prop="title" show-overflow-tooltip label="标题" />
        <el-table-column align="left" prop="columnCategoryName" show-overflow-tooltip label="栏目类别" />
        <el-table-column align="left" prop="summary" show-overflow-tooltip label="摘要" />
        <el-table-column align="left" show-overflow-tooltip label="封面" min-width="160px">
          <template slot-scope="scope">
            <el-image style="width: 140px; height: 70px;" :src="baseUrl + scope.row.coverpic"
              fit="contain" />
          </template>
        </el-table-column>

        <el-table-column align="left" :formatter="dateFormatter" label="热点新闻" width="200">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.ishot" active-text="" inactive-text="" :active-value=1 :inactive-value=2
              @change="setHotNews(scope.row.id,scope.row.ishot)" />
          </template>
        </el-table-column>

        <el-table-column align="left" :formatter="dateFormatter" label="推荐新闻" width="200">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isrecommend" active-text="" inactive-text="" :active-value=1
              :inactive-value=2 @change="setRecommendNews(scope.row.id,scope.row.isrecommend)" />
          </template>
        </el-table-column>
        <el-table-column align="left" :formatter="dateFormatter" label="是否发布" width="200">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isPublish" active-text="" inactive-text="" :active-value=1 :inactive-value=2
              @change="setPublish(scope.row.id,scope.row.isPublish)" />
          </template>
        </el-table-column>

        <el-table-column label="操作" align="left" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除</el-button>
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
import { newsQueryBy, setRecommendNews, setHotNews, columnCategoryQueryList, setPublishNews, newsDel } from '@/api/columnCategory.js'
export default {
  name: 'activityModule',
  data () {
    return {
      defaultProps: {
        label: "name",
        children: "child" // 子级字段名
      },
      typeOptions: [{
        value: 1,
        label: "全部"
      }, {
        value: 2,
        label: "热点新闻"
      }, {
        value: 3,
        label: "推荐新闻"
      }],
      loading: false,
      uploadUrl,
      baseUrl: this.$store.getters.jsonInfo.imageUrl,
      title: "",
      dialogVisible: false,
      tableHeight: null,
      tableData: [],
      upResName: "",
      params: {
        newsType: 1,
        columncategoryid: "",
        title: '',
        page: 1,
        size: 15
      },
      total: 0,
      listLoading: false
    }
  },
  mounted () {
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 112- document.getElementsByClassName('fixed-header')[0].clientHeight
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 112- document.getElementsByClassName('fixed-header')[0].clientHeight
      })()
    }
  },
  created () {
    this.columnCategoryQueryList()
    this.getList()
  },
  methods: {
    getToken,
    close () {
      this.$refs['form'].resetFields()
    },
    getList () {
      this.listLoading = true;
      var data = {}
      var data = this.params;
      if (this.params.newsType == 2) {
        delete data.isrecommend
        data.ishot = 1
      } else if (this.params.newsType == 3) {
        delete data.ishot
        data.isrecommend = 1
      } else if (this.params.newsType == 1) {
        delete data.ishot
        delete data.isrecommend
      }
      newsQueryBy(data).then(res => {
        this.listLoading = false
        if (res.success && res.data) {
          this.tableData = res.data.rows
          this.total = res.data.total;
          this.$nextTick(() => {
            this.$refs.table.doLayout()
          })
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
      this.params.title = "";
      this.handleClear();
      this.params.newsType = 1
      this.getList();
    },
    //设置热点新闻接口
    setHotNews (id, ishot) {
      var params = {
        id: id,
        ishot: ishot
      }
      setHotNews(params).then(res => {
        if (res.success) {
          this.getList();
          this.$message.success('设置成功！')
        } else {
          this.$message.error(res.message || '设置失败！')
        }
      })
    },
    setPublish (id, isPublish) {
      var params = {
        id: id,
        isPublish: isPublish
      }
      setPublishNews(params).then(res => {
        if (res.success) {
          this.getList();
          this.$message.success('发布成功！')
        } else {
          this.$message.error(res.message || '发布失败！')
        }
      })
    },
    setRecommendNews (id, isrecommend) {
      var params = {
        id: id,
        isrecommend: isrecommend
      }
      setRecommendNews(params).then(res => {
        if (res.success) {
          this.getList();
          this.$message.success('设置成功！')
        } else {
          this.$message.error(res.message || '设置失败！')
        }
      })
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          if (this.select == '1') {
            this.form.urlpath = "http://" + this.form.urlpath;
          } else {
            this.form.urlpath = "https://" + this.form.urlpath;
          }
          if (this.form.id) {
            activityUpdate(this.form).then(res => {
              this.loading = false
              if (res.success) {
                this.$message.success('保存成功！')
              } else {
                this.$message.error(res.msg || '保存失败！')
              }
              this.dialogVisible = false
              this.getList()
            }).catch(err => {
              console.log(err)
              this.loading = false
            })
          } else {
            activitySave(this.form).then(res => {
              this.loading = false
              if (res.success) {
                this.$message.success('保存成功！')
              } else {
                this.$message.error(res.msg || '保存失败！')
              }
              this.dialogVisible = false
              this.getList()
            }).catch(err => {
              console.log(err)
              this.loading = false
            })
          }


        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 查询栏目类别
    columnCategoryQueryList () {
      columnCategoryQueryList({}).then(res => {
        if (res.success && res.data) {

          this.data = res.data;
        } else {
          this.data = []
        }
      })
    },
    // 函数部分    
    // 节点点击事件
    handleNodeClick (data) {
      // 这里主要配置树形组件点击节点后，设置选择器的值；自己配置的数据，仅供参考
      this.upResName = data.name
      this.params.columncategoryid = data.id
      // 选择器执行完成后，使其失去焦点隐藏下拉框的效果
      this.$refs.selectUpResId.blur()
    },
    // 选择器配置可以清空选项，用户点击清空按钮时触发
    handleClear () {
      // 将选择器的值置空
      this.upResName = ''
      this.params.columncategoryid = ''
    },
    beforeUpload (file) {
      const fileName = file.name
      const regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/
      const isJPG = regex.test(fileName.toLowerCase())
      const isLt3M = file.size / 1024 / 1024 < 3
      if (!isJPG) {
        this.$message.error('请选择图片文件!')
        return false
      }
      if (!isLt3M) {
        this.$message.error('上传图片大小不能超过 3MB!')
        return false
      }
      return true
    },
    iconImgSuccess (res, file) {
      this.form.coverpic = res.data
    },
    // 新增
    activityModuleAdd () {
      this.title = "新增活动";
      this.dialogVisible = true;
      this.form = {
        title: "",
        coverpic: "",
        content: "",
        urlpath: "",
        isenable: 2
      }
    },
    //编辑
    handleEdit (row) {
      this.title = "编辑活动";
      this.dialogVisible = true;
      this.form = {
        id: row.id,
        title: row.title,
        coverpic: row.coverpic,
        content: row.content,
        urlpath: row.urlpath,
        isenable: row.isenable
      }
      if (row.urlpath) {
        if (row.urlpath.indexOf("https://") != -1) {
          this.select = '2'
        } else {
          this.select = '1'
        }
      }

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
      this.$confirm('此操作将删除该新闻内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        newsDel({ id }).then(res => {
          this.$message.success('删除成功！')
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
.dialog-header {
  text-align: right;
}
.el-divider {
  margin: 15px 0;
}
/deep/.el-image img {
  border-radius: 8px !important;
}

/*打开时文字位置设置*/
/deep/ .el-switch__label--right {
  z-index: 1;
}
/* 调整打开时文字的显示位子 */
/deep/ .el-switch__label--right span {
  margin-right: 30px;
}
/*关闭时文字位置设置*/
/deep/ .el-switch__label--left {
  z-index: 1;
}
/* 调整关闭时文字的显示位子 */
/deep/ .el-switch__label--left span {
  margin-left: -30px;
}
/*显示文字*/
/deep/ .el-switch__label.is-active {
  display: block;
}
</style>
