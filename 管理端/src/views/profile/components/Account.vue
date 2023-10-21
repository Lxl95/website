<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="120px">
    <el-form-item label="原密码" prop="password">
      <el-col :span="7">
        <el-input v-model.trim="form.password" type="password" placeholder="请输入原密码" />
      </el-col>
      <el-col :span="15">
        <p class="padLeft" />
      </el-col>
    </el-form-item>
    <el-form-item label="新密码" prop="newPassword">
      <el-col :span="7">
        <el-input v-model.trim="form.newPassword" type="password" placeholder="请输入新密码" />
      </el-col>
      <el-col :span="15">
        <p class="padLeft" />
      </el-col>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-col :span="7">
        <el-input v-model.trim="form.checkPass" type="password" placeholder="再次输入新密码" />
      </el-col>
      <el-col :span="15">
        <p class="padLeft">必须与新密码一致</p>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit('form')">保 存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { updataPwd } from '@/api/user'
import { getToken } from '@/utils/auth'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (this.form.checkPass !== '') {
        this.$refs.form.validateField('checkPass')
      }
      callback()
    }
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        password: '',
        newPassword: '',
        checkPass: '',
        username: getToken('userId')
      },
      rules: {
        password: [
          { required: true, message: '原密码不能为空', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '新密码不能为空', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updataPwd(this.form).then(res => {
            if (res.errCode === '1') {
              this.$message.error(res.errMsg)
            } else {
              this.$confirm('修改成功，请重新登录', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                type: 'success'
              }).then(() => {
                this.$store.dispatch('user/logout')
                this.$router.push(`/login?redirect=${this.$route.fullPath}`)
              })
            }
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
.padLeft {
  padding-left: 10px;
  margin: 0;
  color: #999;
}
</style>
