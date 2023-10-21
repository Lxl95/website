<template>
  <div class="container">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="form.description" type="textarea" :rows="2" />
      </el-form-item>
      <el-form-item label="封面图" prop="picurl">
        <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="onSuccess"
          :before-upload="beforeUpload" :headers="{
            'Authorization': 'Bearer ' + getToken()
          }">
          <img v-if="form.picurl" :src="form.picurl" class="avatar" style="width:200px;height:100px;">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="文件" prop="pdfurl">
        <el-upload v-loading="uploadLoading" class="upload-demo" :action="uploadFile" :limit="1"
          :on-success="fileSuccess" :before-upload="beforeUploadFile" :headers="{
            'Authorization': 'Bearer ' + getToken()
          }">
          <el-button size="small" type="primary" plain icon="el-icon-download">选择文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传1个文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="是否转载" prop="isreprint">
        <el-switch v-model="form.isreprint" active-text="是" inactive-text="否" active-value="1" inactive-value="2" />
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onSubmit('form')">保 存</el-button>
        <el-button v-if="!paramsId" @click="resetForm('form')" plain>重 置</el-button>
        <router-link :to="{path: 'library-list'}">
          <el-button v-if="paramsId">返 回</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import uploadUrl from '@/api/upload.js'
import uploadFile from '@/api/library.js'
import { saveLibrary, updateLibrary, getInfoByid } from '@/api/library.js'
import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'LibraryAdd',
  data () {
    return {
      uploadUrl,
      uploadFile,
      loading: false,
      uploadLoading: false,
      paramsId: this.$route.query.id,
      form: {
        title: '',
        description: '',
        picurl: '',
        pdfurl: '',
        isreprint: '2',
        librarysize: '0M'
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入描述', trigger: 'blur' }
        ],
        picurl: [
          { required: true, message: '请上传封面图片', trigger: 'change' }
        ]
      }
    }
  },
  mounted () {

  },
  created () {
    if (this.paramsId) {
      this.getInfoById()
    }
  },
  methods: {
    getToken,
    getInfoById () {
      getInfoByid(this.paramsId).then(res => {
        this.form = res.data
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.paramsId) {
            updateLibrary(this.form).then(res => {
              this.loading = false
              if (res.success) {
                this.$router.push({ path: 'library-list' })
                this.$message.success('修改成功！')
              } else {
                this.$message.error(res.message || '修改失败！')
              }
            }).catch(err => {
              console.log(err)
              this.loading = false
            })
          } else {
            saveLibrary(this.form).then(res => {
              this.loading = false
              if (res.success) {
                this.$router.push({ path: 'library-list' })
                this.$message.success('添加成功！')
              } else {
                this.$message.error(res.message || '添加失败！')
              }
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
    onSuccess (res) {
      this.form.picurl = res.data
    },
    beforeUploadFile (file) {
      this.uploadLoading = true
      this.form.librarysize = (file.size / 1024 / 1024).toFixed(2) + 'M'
      return true
    },
    fileSuccess (res) {
      this.uploadLoading = false
      this.form.pdfurl = res.data
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 60%;
  min-width: 600px;
  margin: 0 auto;
  padding-top: 15px;
}
</style>
