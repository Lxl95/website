<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="政策法规类型" prop="typeid">
            <el-select v-model="params.typeid" placeholder="请选择">
              <el-option v-for="item in typeData" :key="item.id" :label="item.typename" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政策法规名称" prop="title">
            <el-input v-model="params.title" clearable placeholder="请输入政策法规名称" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick">查询</el-button>
            <el-button type="primary" plain icon="el-icon-refresh" @click="resetClick('params')">重 置</el-button>
            <el-button type="success" icon="el-icon-circle-plus" @click="activityModuleAdd">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table ref="myTable" v-loading="listLoading" element-loading-text="拼命加载中" stripe :data="tableData" border
        style="width: 100%" :header-cell-style="{background:'#F8F8F9',color:'#606266'}" :height="tableHeight">
        <el-table-column type="index" align="center" label="序号" width="80" />
        <el-table-column align="left" prop="typename" label="类型" />
        <el-table-column align="left" prop="title" label="标题" />
        <el-table-column align="left" prop="createtime" label="创建时间" />
        <el-table-column label="操作" align="left" width="200">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit-outline" type="primary" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button icon="el-icon-delete" type="danger" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
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
        <el-form-item label="政策法规类型" prop="typeid">
          <el-select v-model="form.typeid" placeholder="请选择" style="width: 300px;">
            <el-option v-for="item in typeData" :key="item.id" :label="item.typename" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="政策法规标题" prop="title">
          <el-input v-model="form.title" type="textarea" :rows="3" maxlength="50" show-word-limit
            style="width: 300px;" />
        </el-form-item>
        <el-form-item label="政策法规内容">
          <tinymce ref="Tinymce" v-if="dialogVisible" v-model="form.content" :up-url="uploadUrl"
            :up-src="'/upload/imgUpload'" :height="200" />
        </el-form-item>

        <el-form-item label="附件" style="width: 100%;">
          <el-upload ref="fileUpload" :action="uploadFileUrl" :file-list="form.fileList" :data="addtionDataAttachment"
            :on-success="handleFileSuccess" :on-remove="handleFileRemove">
            <el-button plain size="small" icon="el-icon-upload2" type="primary">选取附件</el-button>
          </el-upload>
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
import { policeTypeQueryAll, policeSave, policeDel, policeUpdate, policeQueryBy } from '@/api/columnCategory.js'
import Tinymce from "@/components/Tinymce";
export default {
  name: 'activityModule',
  components: {
    Tinymce
  },
  data () {

    return {
      addtionDataAttachment: {
        data: "Attachment"
      },
      uploadFileUrl: this.$store.state.app.baseUrl + "/upload/fileUpload",
      typeData: [],//政策法规类型

      form: {
        id: "",
        title: "",
        content: "",
        typename: "",
        typeid: ""
      },
      rules: {
        title: [{ required: true, trigger: 'blur', message: '请输入政策法规标题' }],
        coverpic: [{ required: true, trigger: 'blur', message: '请上传政策法规封面' }],
        typeid: [{ required: true, trigger: 'blur', message: '请选择政策法规类型' }],
        summary: [{ required: true, trigger: 'blur', message: '请选择政策法规简介' }],
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
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 112- document.getElementsByClassName('fixed-header')[0].clientHeight
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 112- document.getElementsByClassName('fixed-header')[0].clientHeight
      })()
    }
  },
  created () {
    this.getList()
    this.policeTypeQueryAll()
  },
  methods: {
    getToken,
    close () {
      this.$refs['form'].resetFields()
    },
    //获取类别
    policeTypeQueryAll () {
      policeTypeQueryAll().then(res => {
        if (res.success && res.data) {
          this.typeData = res.data;
          if (res.data.length > 0) {
            this.form.typeid = res.data[0].id;
            this.form.typename = res.data[0].typename;
            console.log(this.form.typeid);
          }
        } else {

          this.typeData = []
        }
      })
    },
    getList () {
      this.listLoading = true;
      policeQueryBy(this.params).then(res => {
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
    // 上传附件成功
    handleFileSuccess (response, file, fileList) {
      const _self = this;
      _self.form.fileList = fileList;
    },
    // 移除附件
    handleFileRemove (file, fileList) {
      const _self = this;
      _self.form.fileList = fileList;
    },
    resetClick () {
      this.params.title = "";
      this.params.typeid = "";
      this.getList();
    },
    isenable (id) {
      isenable(id).then(res => {
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
          this.typeData.map((item) => {
            if (item.id == this.form.typeid) {
              this.form.typename = item.typename;
            }
          })
          var obj = this.form;
          const getPathString = function (fileList) {
            return JSON.stringify(fileList
              .filter((item) => item.response.message === "上传成功")
              .map((item) => item.response.data));
          };
          obj.fileAddr = getPathString(this.form.fileList);
          if (this.form.id) {
            policeUpdate(obj).then(res => {
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
            policeSave(obj).then(res => {
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
      this.title = "新增政策法规";
      this.dialogVisible = true;
      this.form = {
        title: "",
        content: "",
        typename: this.form.typename,
        typeid: this.form.typeid,
        fileList: []
      }
    },
    //编辑
    handleEdit (row) {
      this.title = "编辑政策法规";
      this.dialogVisible = true;
      this.form = {

        id: row.id,
        title: row.title,
        content: row.content,
        typename: row.typename,
        typeid: row.typeid
      }
      if (row.urlpath) {
        if (row.urlpath.indexOf("https://") != -1) {
          this.select = '2'
        } else {
          this.select = '1'
        }
      }
      var fileList = []
      this.form.fileList = []
      if (row.fileAddr) {
        fileList = JSON.parse(row.fileAddr);
        fileList.map((item) => {
          this.form.fileList.push({ name: item, url: item, "response": { "success": true, "code": 10000, "message": "上传成功", "data": item } })
        })

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
      this.$confirm('此操作将永久删除此政策法规内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        policeDel(id).then(res => {
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
