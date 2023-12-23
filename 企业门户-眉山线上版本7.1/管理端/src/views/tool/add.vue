<template>
  <div class="container">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="工具名称" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="简介" prop="description">
        <el-input v-model="form.description" type="textarea" :rows="2" />
      </el-form-item>
      <el-form-item label="工具类型" prop="tooltype">
        <el-input v-model="form.tooltype" />
      </el-form-item>
      <el-form-item label="工具上传" prop="toolurl">
        <el-upload v-loading="uploadLoading" class="upload-demo" :action="uploadFile" :limit="1"
          :on-success="fileSuccess" :before-upload="beforeUploadFile" :headers="{
            'Authorization': 'Bearer ' + getToken()
          }">
          <el-button size="small" type="primary" plain icon="el-icon-download">选择文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传1个文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onSubmit('form')">保 存</el-button>
        <el-button v-if="!paramsId" @click="resetForm('form')" plain>重 置</el-button>
        <router-link :to="{path: 'news-list'}">
          <el-button v-if="paramsId">返 回</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import uploadFile from '@/api/library.js'
import { saveTool, getInfoByid } from '@/api/tool.js'
import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'LibraryAdd',
  data () {
    return {
      uploadFile,
      loading: false,
      uploadLoading: false,
      paramsId: this.$route.query.id,
      form: {
        title: '',
        description: '',
        toolurl: '',
        tooltype: '',
        toolsize: '0M'
      },
      rules: {
        title: [
          { required: true, message: '请输入工具名称', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {

  },
  created () {

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
          saveTool(this.form).then(res => {
            this.loading = false
            if (res.success) {
              this.$router.push({ path: 'tool-list' })
              msgAutoClose({
                message: "保存成功!",
                type: "success"
              });
            } else {
              this.$message.error(res.message || '保存失败！')
            }
          }).catch(err => {
            console.log(err)
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    beforeUploadFile (file) {
      // const isLt3M = file.size / 1024 / 1024 < 300
      // if (!isLt3M) {
      //   this.$message.error('上传文件大小不能超过 300MB!')
      //   return false
      // }
      this.uploadLoading = true
      this.form.toolsize = (file.size / 1024 / 1024).toFixed(2) + 'M'
      return true
    },
    fileSuccess (res) {
      this.uploadLoading = false
      this.form.toolurl = res.data
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
