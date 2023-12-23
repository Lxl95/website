<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>关于我们</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <el-upload
            class="upload-demo"
            action=""
            :auto-upload="false"
            :show-file-list="false"
            :on-change="imgChange"
            style="margin-top:10px;"
          >
            <!-- <el-button size="small" type="text" @click="flag = true">更换头像</el-button> -->
          </el-upload>
        </pan-thumb>
      </div>
      <div class="box-center">
        <div v-show="flag === true" class="user-name text-center">
          <el-button size="small" type="text" @click="submit">保存</el-button>
          <el-button size="small" type="text" @click="cancelClick">取消</el-button>
        </div>
        <div v-show="flag === false" class="user-name text-center">{{ user.name }}</div>
        <div v-show="flag === false" class="user-role text-center text-muted">{{ user.companyName }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>账户信息</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <p>昵称：{{ user.name }}</p>
            <p>姓名：{{ user.realName }}</p>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import { updateCompanyLogo } from '@/api/user.js'
import { getToken } from '@/utils/auth'
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
export default {
  components: { PanThumb },
  data() {
    return {
      file: '',
      flag: false,
      user: {}
    }
  },
  computed: {
    ...mapGetters([
      'avatar',
      'name',
      'realName'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    imgChange(file, fileList) {
      const fileName = file.name
      const regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/
      if (regex.test(fileName.toLowerCase())) {
        this.file = file.raw
        this.user.companyIcon = URL.createObjectURL(file.raw)
      } else {
        this.$message.error('请选择图片文件')
      }
    },
    submit() {
      const formData = new FormData()
      formData.append('file', this.file)
      this.$axios.memberManage.uploadIcon(formData).then(res => {
        this.$store.commit('user/SET_AVATAR', res.object)
        const form = {
          id: getToken('userId'),
          companyIcon: res.object
        }
        updateCompanyLogo(form).then(res => {
          this.$message.success('修改成功！')
          this.flag = false
        }).catch(err => {
          console.log(err)
          this.flag = false
        })
      })
    },
    cancelClick() {
      this.user.companyIcon = this.avatar
      this.flag = false
    },
    getUser() {
      this.user = {
        name: this.name,
        avatar: this.avatar,
        realName: this.realName
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .box-center {
   margin: 0 auto;
   display: table;
 }

 .text-muted {
   color: #777;
 }

 .user-profile {
   .user-name {
     font-weight: bold;
   }

   .box-center {
     padding-top: 10px;
   }

   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }

   .box-social {
     padding-top: 30px;

     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }

   .user-follow {
     padding-top: 20px;
   }
 }

 .user-bio {
   margin-top: 20px;
   color: #606266;

   span {
     padding-left: 4px;
   }

   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;

     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
 }
</style>
