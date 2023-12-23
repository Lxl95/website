<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item>
            <el-button type="success" icon="el-icon-circle-plus" @click="activityModuleAdd">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table id="pdfHtml" ref="myTable" v-loading="listLoading" element-loading-text="拼命加载中" stripe :data="tableData"
        border style="width: 100%" :header-cell-style="{background:'#F8F8F9',color:'#606266'}" :height="tableHeight">
        <el-table-column type="index" align="center" label="序号" width="60" />
        <el-table-column align="left" prop="typename" label="政策法规类型" />
        <el-table-column label="图标" align="left">
          <template slot-scope="scope">
            <el-image style="width: 50px; height: 50px" :src="imgBaseUrl + scope.row.icon" fit="cover" />
          </template>
        </el-table-column>
        <el-table-column label="效果图标" align="left">
          <template slot-scope="scope">
            <el-image style="width: 50px; height: 50px" :src="imgBaseUrl + scope.row.iconactive" fit="cover" />
          </template>
        </el-table-column>
        <el-table-column label="操作" align="left" width="200">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit-outline" size="mini" type="primary" @click="handleEdit(scope.row)">编辑
            </el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background :total="total" :page-size="params.size"
        :current-page="params.page" :page-sizes="[15, 20, 25, 30]" style="margin-top:20px;"
        @current-change="handleCurrentChange" @size-change="handleSizeChange" />
    </el-main>
    <el-dialog :title="title" :visible.sync="dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false"
      width="35%" @close="close">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="类型名称" prop="typename">
          <el-input v-model="form.typename" maxlength="10" show-word-limit style="width: 300px;" />
        </el-form-item>
        <el-form-item label="图标" prop="icon">
          <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="iconImgSuccess"
            :before-upload="beforeUpload" :headers="{
                'Authorization': 'Bearer ' + getToken()
              }">
            <img v-if="form.icon" :src="imgBaseUrl +form.icon" class="avatar" style="width:50px;height:50px;">
            <i v-else style="width:50px;height:50px" class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="效果图标" prop="iconactive">
          <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="iconImgSuccess2"
            :before-upload="beforeUpload2" :headers="{
                'Authorization': 'Bearer ' + getToken()
              }">
            <img v-if="form.iconactive" :src="imgBaseUrl +form.iconactive" class="avatar" style="width:50px;height:50px;">
            <i v-else style="width:50px;height:50px" class="el-icon-plus avatar-uploader-icon" />
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
import { policeTypeSave, policeTypeDel, policeTypeUpdate, policeTypeQueryBy } from '@/api/columnCategory.js'
import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'announcementType',
  data () {
    return {
      select: '2',
      form: {
        id: "",
        typename: "",
        iconactive: "",
        icon: ""
      },
      rules: {
        typename: [{ required: true, trigger: 'blur', message: '请输入政策法规类型' }],
        icon: [{ required: true, trigger: 'blur', message: '请上传类型图标' }],
        iconactive: [{ required: true, trigger: 'blur', message: '请上传类型效果图标' }]
      },
      loading: false,
      uploadUrl,
      imgBaseUrl: this.$store.getters.jsonInfo.imageUrl,
      title: "",
      dialogVisible: false,
      tableHeight: null,
      tableData: [],
      params: {
        title: '',
        page: 1,
        size: 15
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
    // 导出PDF
    exportPDF () {
      this.getPdf('filename', "pdfHtml");
    },
    getList () {
      this.listLoading = true;
      policeTypeQueryBy(this.params).then(res => {
        this.listLoading = false
        if (res.success && res.data) {
          this.tableData = res.data.rows

          // 在数据更新后执行
          this.$nextTick(() => {
            this.$refs.myTable.doLayout();
          })
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
      this.params.typename = "";
      this.getList();
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          if (this.form.id) {
            policeTypeUpdate(this.form).then(res => {
              this.loading = false
              if (res.success) {
                msgAutoClose({
                  message: "保存成功!",
                  type: "success"
                });
              } else {
                msgAutoClose({
                  message: res.msg || '保存失败!',
                  type: "error"
                });
              }
              this.dialogVisible = false
              this.getList()
            }).catch(err => {
              console.log(err)
              this.loading = false
            })
          } else {
            policeTypeSave(this.form).then(res => {
              this.loading = false
              if (res.success) {
                msgAutoClose({
                  message: "保存成功!",
                  type: "success"
                });
              } else {
                msgAutoClose({
                  message: res.msg || '保存失败!',
                  type: "error"
                });
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
        msgAutoClose({
          message: '请选择图片文件!',
          type: "warning"
        });
        return false
      }
      if (!isLt3M) {
        msgAutoClose({
          message: '上传图片大小不能超过 3MB!',
          type: "warning"
        });
        return false
      }
      return true
    },
    iconImgSuccess (res, file) {
      this.form.icon = res.data;
      console.log(this.form.icon);
    },
    beforeUpload2 (file) {
      const fileName = file.name
      const regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/
      const isJPG = regex.test(fileName.toLowerCase())
      const isLt3M = file.size / 1024 / 1024 < 3
      if (!isJPG) {
        msgAutoClose({
          message: '请选择图片文件!',
          type: "warning"
        });
        return false
      }
      if (!isLt3M) {
        msgAutoClose({
          message: '上传图片大小不能超过 3MB!',
          type: "warning"
        });
        return false
      }
      return true
    },
    iconImgSuccess2 (res, file) {
      this.form.iconactive = res.data
    },
    // 新增
    activityModuleAdd () {
      this.title = "新增政策法规类型";
      this.dialogVisible = true;
      this.form = {
        typename: "",
        icon: "",
        iconactive: ""

      }
    },
    //编辑
    handleEdit (row) {
      this.title = "编辑政策法规类型";
      this.dialogVisible = true;
      this.form = {
        id: row.id,
        typename: row.typename,
        icon: row.icon,
        iconactive: row.iconactive

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
      this.$confirm('此操作将永久删除此政策法规类型, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        policeTypeDel(id).then(res => {
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
.dialog-header {
  text-align: right;
}
.el-divider {
  margin: 15px 0;
}
/deep/.el-image img {
  border-radius: 8px !important;
}
/deep/.avatar-uploader .el-upload {
  height: 50px;
}
.avatar-uploader-icon {
  width: 50px !important;
  height: 50px !important;
  line-height: 46px !important;
}
</style>
