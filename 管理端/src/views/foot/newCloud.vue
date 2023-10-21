<template>
  <div class="container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="关于新水云" prop="aboutcloud">
        <el-input v-model="form.aboutcloud" type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" />
      </el-form-item>
      <el-form-item label="公司名称" prop="companyname">
        <el-input v-model="form.companyname" placeholder="请输入公司名称" />
      </el-form-item>
      <el-form-item label="公司地址" prop="companyaddress">
        <el-input v-model="form.companyaddress" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入地址" />
      </el-form-item>
      <el-form-item label="邮编" prop="postalcode">
        <el-input v-model="form.postalcode" placeholder="请输入邮编" />
      </el-form-item>
      <el-form-item label="邮箱" prop="mailbox">
        <el-input v-model="form.mailbox" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item label="联系方式">
        <template>
          <el-table :data="tableData1" border style="width: 100%">
            <el-table-column label="序号" width="60px" align="left" type="index" />
            <el-table-column label="联系人">
              <template slot-scope="scope">
                <el-input v-model="scope.row.user" placeholder="请输入联系人" />
              </template>
            </el-table-column>
            <el-table-column label="手机号">
              <template slot-scope="scope">
                <el-input v-model="scope.row.tel" placeholder="请输入手机号" />
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120px">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" icon="el-icon-delete"
                  @click="handleRemove(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <i class="el-icon-circle-plus-outline addModTr" @click="addModTr()" />
        </template>
        <!-- <el-input v-model="form.phone" placeholder="请输入电话" /> -->
      </el-form-item>
      <el-form-item label="公众号二维码" prop="qrcodepicurl">
        <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="onSuccess"
          :before-upload="beforeUpload" :headers="{
            'Authorization': 'Bearer ' + getToken()
          }">
          <img v-if="form.qrcodepicurl" :src="form.qrcodepicurl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onSubmit('form')">保 存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import uploadUrl from '@/api/upload.js'
import { getCompanyInfoById, saveCompanyInfo } from '@/api/cloudProducts.js'
import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'NewCloud',
  data () {
    return {
      uploadUrl,
      loading: false,
      form: {
        id: 1,
        aboutcloud: '',
        companyname: '',
        companyaddress: '',
        postalcode: '',
        mailbox: '',
        phone: '',
        qrcodepicurl: ''
      },
      rules: {
        aboutcloud: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        companyname: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        companyaddress: [
          { required: true, message: '请输入公司地址', trigger: 'blur' }
        ],
        postalcode: [
          { required: true, message: '请输入邮编', trigger: 'blur' }
        ],
        mailbox: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        qrcodepicurl: [
          { required: true, message: '请上传二维码', trigger: 'blur' }
        ]
      },
      tableData1: [{
        user: '',
        tel: ''
      }, {
        user: '',
        tel: ''
      }]
    }
  },
  computed: {

  },
  mounted () {

  },
  created () {
    this.getInfo()
  },
  methods: {
    getToken,
    addModTr () {
      this.tableData1.push({
        user: '',
        tel: ''
      })
    },
    handleRemove (index, row) {
      if (index !== -1) {
        this.tableData1.splice(index, 1)
      }
    },
    getInfo () {
      getCompanyInfoById(1).then(res => {
        this.form = res.data
        this.tableData1 = JSON.parse(res.data.phone)
      })
    },
    beforeUpload (file) {
      const fileName = file.name
      const regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/
      const isJPG = regex.test(fileName.toLowerCase())
      const isLt3M = file.size / 1024 / 1024 < 1
      if (!isJPG) {
        msgAutoClose({
          message: '请选择图片文件!',
          type: "warning"
        });
        return false
      }
      if (!isLt3M) {
        this.$message.error('上传图片大小不能超过 1MB!')
        return false
      }
      return true
    },
    onSuccess (res) {
      this.form.qrcodepicurl = res.data
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.form.phone = JSON.stringify(this.tableData1)
          saveCompanyInfo(this.form).then(res => {
            if (res.success) {
              this.$message.success('保存成功')
            } else {
              this.$message.success('保存失败')
            }
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
.addModTr {
  position: absolute;
  font-size: 26px;
  right: -40px;
  color: #777474;
  top: 15px;
  cursor: pointer;
}
</style>
