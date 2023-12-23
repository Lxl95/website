<template>
  <el-container>
    <el-main>
      <div class="login-box">
        <img src="@/assets/user.png" class="login-title-img">
        企业官网管理平台
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="30px" class="login-form"
          label-position="left" :hide-required-asterisk="true">
          <el-form-item prop="username">
            <template slot="label">
              <img src="@/assets/1.png">
            </template>
            <el-input ref="username" v-model="loginForm.username" :placeholder="$t('login.username')" name="username"
              type="text" tabindex="1" autocomplete="off" />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="大写锁定已开" placement="right" manual>
            <el-form-item prop="password">
              <template slot="label">
                <img src="@/assets/2.png">
              </template>
              <el-input ref="password" v-model="loginForm.password" type="password" :placeholder="$t('login.password')"
                name="password" tabindex="2" @keyup.native="checkCapslock" @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin" />
            </el-form-item>
          </el-tooltip>

          <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
            {{ $t('login.logIn') }}</el-button>
        </el-form>
      </div>
    </el-main>
    <el-footer style="height: 70px;">Copyright &copy; 2014-2024 企业官网 All Rights Reserved</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入账号' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created () {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted () {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    checkCapslock ({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && key >= 'a' && key <= 'z') ||
          (!shiftKey && key >= 'A' && key <= 'Z')
        ) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then((res) => {
              if (!res.success) {
                this.$message.error(res.message)
              } else {
                this.$router.push({ path: '/', query: this.otherQuery })
                // window.location.reload()
              }
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery (query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
.el-container {
  .el-main {
    .login-box {
      .login-form {
        .el-form-item {
          height: 40px;
          border-bottom: 1px #838e97 solid;
          margin-bottom: 30px;
        }
        input {
          border: none;
          background: rgba(0, 0, 0, 0);
          color: #fff;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  overflow: hidden;
  .el-main {
    padding: 0;
    background: url("../../assets/login.jpg") no-repeat;
    background-size: auto;
    background-position: center;
    @media screen and (max-width: 720px) {
      background-position: 90%;
    }
    .login-box {
      width: 410px;
      height: 100%;
      padding: 20vh 50px 0 50px;
      background: rgba(0, 0, 0, 0.4);
      float: right;
      color: #fff;
      text-align: center;
      font-size: 20px;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .login-title-img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        display: block;
        margin-bottom: 20px;
      }
      .el-form {
        margin-top: 50px;
      }
    }
  }
  .el-footer {
    background: #191d20;
    color: #fff;
    line-height: 70px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
