<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="公告类型" prop="typeid">
            <el-select v-model="params.typeid" placeholder="请选择">
              <el-option v-for="item in typeData" :key="item.id" :label="item.typename" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公告名称" prop="title">
            <el-input v-model="params.title" clearable placeholder="请输入公告名称" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick">查询</el-button>
            <el-button type="primary" plain icon="el-icon-refresh" @click="resetClick('params')">重 置</el-button>
            <el-button type="success" icon="el-icon-circle-plus" @click="activityModuleAdd">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table v-loading="listLoading" element-loading-text="拼命加载中" stripe :data="tableData" border style="width: 100%"
        :header-cell-style="{background:'#F8F8F9',color:'#606266'}" :height="tableHeight">
        <el-table-column fixed="left" type="index" align="center" label="序号" width="60" />
        <el-table-column align="center" show-overflow-tooltip prop="title" label="公告标题" width="200" />
        <el-table-column align="center" show-overflow-tooltip prop="summary" label="公告简介" width="120" />
        <el-table-column align="center" show-overflow-tooltip label="公告封面">
          <template slot-scope="scope">
            <el-image style="width: 140px; height: 70px;border-radius: 8px;" :src="baseUrl + scope.row.coverpic"
              fit="cover" />
          </template>
        </el-table-column>
        <el-table-column align="center" prop="urlpath" label="公告链接" show-overflow-tooltip />
        <el-table-column align="center" :formatter="dateFormatter" label="是否显示" width="200">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isshow" active-text="是" inactive-text="否" :active-value=1 :inactive-value=2
              @change="isenable(scope.row.id,scope.row.isshow)" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit-outline" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background :total="total" :page-size="params.size"
        :current-page="params.page" :page-sizes="[15, 20, 25, 30]" style="margin-top:20px;"
        @current-change="handleCurrentChange" @size-change="handleSizeChange" />
    </el-main>
    <el-dialog :title="title" :visible.sync="dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false"
      width="60%" @close="close">
      <el-form ref="form" :model="form" :rules="rules" label-width="150px">
        <el-form-item label="公告类型" prop="typeid">
          <el-select v-model="form.typeid" placeholder="请选择" style="width: 300px;">
            <el-option v-for="item in typeData" :key="item.id" :label="item.typename" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公告标题" prop="title">
          <el-input v-model="form.title" maxlength="20" show-word-limit style="width: 300px;" />
        </el-form-item>

        <el-form-item label="公告封面" prop="coverpic">
          <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="iconImgSuccess"
            :before-upload="beforeUpload" :headers="{
                'Authorization': 'Bearer ' + getToken()
              }">
            <img v-if="form.coverpic" :src="baseUrl +form.coverpic" class="avatar" style="width:200px;height:100px;">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="公告摘要" prop="summary">
          <el-input v-model="form.summary" type="textarea" maxlength="200" show-word-limit style="width: 300px;" />
        </el-form-item>
        <el-form-item label="是否跳转URL链接" prop="isjump">
          <el-switch v-model="form.isjump" style="width:100px">
          </el-switch>
        </el-form-item>
        <el-form-item v-if="form.isjump" label="跳转链接" prop="category">
          <el-input placeholder="请输入链接" v-model="form.urlpath" class="input-with-select" style="width: 300px;">
          </el-input>
        </el-form-item>
        <el-form-item v-if="!form.isjump" label="公告内容">
          <tinymce ref="Tinymce" v-if="dialogVisible" v-model="form.content" :up-url="baseUrl"
            :up-src="'/upload/imgUpload'" :height="200" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button :loading="loading" type="primary" @click="onSubmit('form')">保 存</el-button>
      </span>
    </el-dialog>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { getToken } from '@/utils/auth'
import uploadUrl from '@/api/upload.js'
import { noticeQueryBy, noticeUpdate, noticeDel, noticeSave, noticeTypeQueryAll, noticeIsshow } from '@/api/columnCategory.js'
import Tinymce from "@/components/Tinymce";
export default {
  name: 'activityModule',
  components: {
    Tinymce
  },
  data () {

    return {
      typeData: [],//公告类型
      form: {
        id: "",
        title: "",
        coverpic: "",
        content: "",
        urlpath: "",
        isenable: 2,
        isjump: true,
        typeid: "",
        isshow: 1,
        summary: ""
      },
      rules: {
        title: [{ required: true, trigger: 'blur', message: '请输入公告标题' }],
        coverpic: [{ required: true, trigger: 'blur', message: '请上传公告封面' }],
        typeid: [{ required: true, trigger: 'blur', message: '请选择公告类型' }],
        summary: [{ required: true, trigger: 'blur', message: '请选择公告简介' }],
      },
      loading: false,
      uploadUrl,
      baseUrl: this.$store.getters.jsonInfo.imageUrl,
      title: "",
      dialogVisible: false,
      tableHeight: null,
      tableData: [],
      params: {
        title: '',
        page: 1,
        size: 15,
        typeid: ""
      },
      form: {

      },
      total: 0,
      listLoading: false
    }
  },
  mounted () {
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 200
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 200
      })()
    }
  },
  created () {
    this.getList()
    this.noticeTypeQueryAll()
  },
  methods: {
    getToken,
    close () {
      this.$refs['form'].resetFields()
    },
    //获取类别
    noticeTypeQueryAll () {
      noticeTypeQueryAll().then(res => {
        if (res.success && res.data) {
          this.typeData = res.data
        } else {

          this.typeData = []
        }
      })
    },
    getList () {
      this.listLoading = true;
      noticeQueryBy(this.params).then(res => {
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
    dateFormatter (row, column) {
      if (row.time) {
        return parseTime(row.time)
      } else {
        return ''
      }
    },
    resetClick () {
      this.params.title = "";
      this.getList();
    },
    isenable (id, isshow) {
      var param = {
        id: id,
        isshow: isshow
      }
      noticeIsshow(param).then(res => {
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
          var option = this.form;
          option.isjump = (option.isjump == false ? 2 : 1)
          if (this.form.id) {
            noticeUpdate(option).then(res => {
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
            noticeSave(option).then(res => {
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
        isjump: true,
        urlpath: "",
        typeid: "",
        isshow: 1,
        summary: ""
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
        isjump: row.isjump == 1 ? true : false,
        urlpath: row.urlpath,
        typeid: row.typeid,
        isshow: row.isshow,
        summary: row.summary
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
      this.$confirm('此操作将永久删除该条活动内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        noticeDel(id).then(res => {
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
</style>
