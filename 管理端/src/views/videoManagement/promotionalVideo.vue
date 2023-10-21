<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="视频标题" prop="videoTitle">
            <el-input v-model="params.videoTitle" clearable placeholder="请输入视频标题" />
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
        <el-table-column type="index" align="center" label="序号" width="60" />
        <el-table-column align="left" prop="videoTitle" label="视频标题" show-overflow-tooltip/>
        <el-table-column align="left" prop="videoTitle" label="封面图" width="180">
          <template slot-scope="scope">
            <vviewer
              v-if="scope.row.ppath != null"
              :options="scope.row.ppath ? [imgBaseUrl + scope.row.ppath] : []"
              :imgStyle="'cover'"
              :borderRadius="'8px'"
              style="width: 140px; height: 70px;"
            ></vviewer>
            <span v-else>未上传</span>
          </template>
        </el-table-column>
        <el-table-column align="left" prop="vsize" label="视频大小" />
        <el-table-column align="left" prop="vformat" label="视频格式" />
        <el-table-column align="left" prop="resolution" label="分辨率" />
        <el-table-column align="left" prop="isPublicize" label="宣传视频">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isPublicize"
              active-text="是"
              inactive-text="否"
              active-value="1"
              inactive-value="2"
              @change="handleRowEdit(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column align="left" prop="isIntroduce" label="公司简介">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isIntroduce"
              active-text="是"
              inactive-text="否"
              active-value="1"
              inactive-value="2"
              @change="handleRowEdit(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column align="left" prop="sort" label="排序" />
        <!-- <el-table-column align="left" prop="creatDate" label="创建时间" /> -->
        <el-table-column label="操作" align="left" width="300">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit-outline" size="mini" type="primary" @click="handleEdit(scope.row)">编辑
            </el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(scope.row.id)">删除 </el-button>
            <el-button v-if="scope.row.vpath" icon="el-icon-view" size="mini" type="" @click="previewVideo(scope.row)">查看 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" background :total="total" :page-size="params.pageSize"
        :current-page="params.pageNum" :page-sizes="[15, 20, 25, 30]" style="margin-top:20px;"
        @current-change="handleCurrentChange" @size-change="handleSizeChange" />
    </el-main>
    <el-dialog :title="title" :visible.sync="dialogVisible" :close-on-click-modal="false" :close-on-press-escape="false"
      width="60%" @close="close">
      <el-form ref="form" :model="form" :rules="rules" label-width="150px">
        <el-form-item label="视频标题" prop="videoTitle">
          <el-input v-model="form.videoTitle" clearable placeholder="请输入视频标题" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="封面图" prop="ppath">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="iconImgSuccess"
              :before-upload="beforeUpload"
              :headers="{
                Authorization: 'Bearer ' + getToken()
              }"
            >
              <img
                v-if="form.ppath"
                :src="imgBaseUrl + form.ppath"
                class="avatar"
                style="width:200px;height:100px;"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
        <el-form-item label="上传视频" style="width: 100%;">
          <el-upload ref="VideoUpload" :action="uploadVideoUrl" :limit="1" :before-upload="beforeVideoUpload" :file-list="form.fileList" :data="addtionDataAttachment" :on-success="handleFileSuccess" :on-exceed="handleExceed" :on-remove="handleFileRemove">
            <el-button plain size="small" :loading="addMaterialLoading" icon="el-icon-upload2" type="primary">选取视频</el-button>
            <span class="el-upload__tip" style="margin-left:10px;color: red"> 格式推荐MP4，文件大小不超过500MB </span>
          </el-upload>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
            <el-input-number v-model="form.sort" controls-position="right" :min="1" />
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
import { videoSave, videoDel, videoUpdate, videoQueryAll } from '@/api/videoManage.js'
import { msgAutoClose, msgNoClose } from "@/utils/element";
import vviewer from "@/components/VViewer/vviewer";
export default {
  name: 'activityModule',
  components: {
    vviewer
  },
  data () {
    return {
      addtionDataAttachment: {
        data: "Attachment"
      },
      form: {
        id: "",
        videoTitle: "",
        vpath: "",
        ppath: "",
        isIntroduce: 2, // 公司简介视频
        isPublicize: 2, // 宣传视频
        vformat: "",
        vsize: "",
        sort: 1,
        state: 2, // 禁用
        resolution: ""
      },
      uploadVideoUrl: this.$store.getters.baseUrl + "/video/videoUpload",
      rules: {
        videoTitle: [{ required: true, trigger: 'blur', message: '请输入视频标题' }],
        vpath: [{ required: true, trigger: 'blur', message: '请上传视频' }],
        ppath: [{ required: true, trigger: 'blur', message: '请上传视频封面' }],
      },
      loading: false,
      addMaterialLoading: false,
      uploadUrl,
      imgBaseUrl: this.$store.getters.jsonInfo.imageUrl,
      title: "",
      dialogVisible: false,
      tableHeight: null,
      tableData: [],
      params: {
        videoTitle: '',
        pageNum: 1,
        pageSize: 15
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
      videoQueryAll(this.params).then(res => {
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
    beforeVideoUpload(file){
        this.addMaterialLoading = true
        const isLt = file.size / 1024 / 1024 < 500
        // const isType = file.type === 'video/mp4'
        // if (!isType) {
        //   this.$message.error('上传视频格式不对!')
        // }
        if (!isLt) {
          this.$message.error('上传视频大小不能超过10M!')
        }
        this.addMaterialLoading = false
        return isLt;
      },
    handleExceed() {
      this.$message.warning(`限制只能上传1个视频`);
    },
  
    // 上传附件成功
    handleFileSuccess (response, file, fileList) {
      const _self = this;
      _self.form.fileList = fileList;
      if(response.code == 10000) {
        _self.form.vpath = response.data.imageShowUrl;
        _self.form.resolution = response.data.RESOLUTION;
        _self.form.vsize = response.data.SIZE;
        _self.form.vformat = response.data.VFORMAT;
      }
    },
    // 移除附件
    handleFileRemove (file, fileList) {
      const _self = this;
      _self.form.fileList = fileList;
    },
    resetClick () {
      this.params.videoTitle = "";
      this.params.typeid = "";
      this.getList();
    },
    isenable (id) {
      isenable(id).then(res => {
        if (res.success) {
          this.getList();
          msgAutoClose({
            message: '设置成功！',
            type: "success"
          });
        } else {
          msgAutoClose({
            message: res.msg || '设置失败!',
            type: "error"
          });
        }
      })
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          var obj = this.form;
          if (this.form.id) {
            videoUpdate(obj).then(res => {
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
            videoSave(obj).then(res => {
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
      this.form.ppath = res.data
    },
    // 新增
    activityModuleAdd () {
      this.title = "新增视频";
      this.dialogVisible = true;
      this.form = {
        id: "",
        videoTitle: "",
        vpath: "",
        ppath: "",
        isIntroduce: 2, // 公司简介视频
        isPublicize: 2, // 宣传视频
        vformat: "",
        vsize: "",
        sort: 1,
        state: 2, // 禁用
        resolution: ""
      }
    },
    //编辑
    handleEdit (row) {
      this.title = "编辑视频";
      this.dialogVisible = true;
      this.form = {
        ...row
      }
      this.form.fileList = []
      if (row.vpath) {
        this.form.fileList.push({ name: row.vpath, url: row.vpath })
      }
    },
    previewVideo(row) {
      window.open(this.$store.getters.jsonInfo.videoUrl+ row.vpath)
    },
    handleRowEdit(row) {
      videoUpdate(row).then(res => {
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
        this.getList()
      }).catch(err => {
        console.log(err)
      })
    },
    handleCurrentChange (val) {
      this.params.pageNum = val
      this.getList()
    },
    handleSizeChange (val) {
      this.params.pageSize = val
      this.getList()
    },
    handleDelete (id) {
      this.$confirm('此操作将永久删除此视频内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        videoDel(id).then(res => {
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
</style>
