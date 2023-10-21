<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <el-tabs type="border-card" :class="{'second': isSecond}" :value="activeName" @tab-click="changeTabs">
        <el-tab-pane label="官网首页配置" name="1">
          <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="120px">
            <div class="formClass" style="margin-left: 80px;">
              <el-form-item label="公司名称" prop="companyname">
                <el-input v-model="form.companyname" placeholder="请输入公司名称" style="width: 300px;" />
              </el-form-item>
              <el-form-item label="公司LOGO" prop="logo">
                <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false"
                  :on-success="iconImgSuccess" :before-upload="beforeUpload" :headers="{
                  'Authorization': 'Bearer ' + getToken()
                }">
                  <img v-if="form.logo" :src="imgBaseUrl +form.logo">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="公司地址" prop="addresslocation">
                <el-input v-model="form.addresslocation" placeholder="请输入公司地址" style="width: 300px;" />
              </el-form-item>

              <el-form-item label="公众号二维码" prop="qrcode">
                <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false"
                  :on-success="iconImgSuccess2" :before-upload="beforeUpload2" :headers="{
                  'Authorization': 'Bearer ' + getToken()
                }">
                  <img v-if="form.qrcode" :src="imgBaseUrl +form.qrcode">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="客服电话" prop="mobile">
                <el-input v-model="form.mobile" placeholder="请输入客服电话" style="width: 300px;" />
              </el-form-item>
              <el-form-item label="公司邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入公司邮箱" style="width: 300px;" />
              </el-form-item>
              <el-form-item label="邮编地址" prop="postcode">
                <el-input v-model="form.postcode" placeholder="请输入邮编地址" style="width: 300px;" />
              </el-form-item>
              </div>
            

            <div class="form-btn" style="text-align: center;">
              <el-button type="primary" @click="submit('form')">保 存</el-button>
              <el-button @click="resetForm3()" type="primary" plain>重 置</el-button>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="系统信息配置" name="2">
          <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="120px">
            <div class="formClass" style="margin-left: 80px;">
              <el-form-item label="主站名称" prop="webname">
              <el-input v-model="form.webname" placeholder="请输入主站名称" style="width: 300px;" />
            </el-form-item>
            <el-form-item label="主站域名" prop="domainname">
              <el-input v-model="form.domainname" placeholder="请输入主站域名" style="width: 300px;" />
            </el-form-item>
            <el-form-item label="主站备案号" prop="recordnumber">
              <el-input v-model="form.recordnumber" placeholder="请输入主站备案号" style="width: 300px;" />
            </el-form-item>
            </div>
            <div class="form-btn" style="text-align: center;">
              <el-button type="primary" @click="submit('form')">保 存</el-button>
              <el-button @click="resetForm()" type="primary" plain>重 置</el-button>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公司简介" name="3">
          <el-form ref="form" :model="form" :rules="rules" label-width="120px">
            <div class="formClass">
              <el-form-item label="简介" prop="companyinfo">
              <el-input v-model="form.companyinfo" placeholder="请输入公司简介" type="textarea" :rows="5" maxlength="300"
                show-word-limit style="width: 100%;" />
            </el-form-item>
            <el-form-item label="描述" prop="description">
              <tinymce ref="tinymce" v-model="form.description" :up-url="uploadUrl" :up-src="'/upload/imgUpload'"
                :height="200" />
            </el-form-item>
            </div>
            <div class="form-btn" style="text-align: center;">
              <el-button type="primary" @click="submit('form')">保 存</el-button>
              <el-button @click="resetForm2()" type="primary" plain>重 置</el-button>
            </div>
          </el-form>
        </el-tab-pane>
        <!-- <el-tab-pane label="网站主页SEO设置">
          <el-form ref="form" :model="form" :rules="rules" label-width="100px">
            <el-form-item label="标题" prop="title">
              <el-input v-model="form.title" placeholder="请输入标题" maxlength="30" show-word-limit style="width: 300px;" />
            </el-form-item>
            <el-form-item label="关键字" prop="keywords">
              <el-input v-model="form.keywords" placeholder="请输入关键字" style="width: 300px;" />
              <span style="color:#ccc">方便浏览器搜索网站,词语用","隔开</span>
            </el-form-item>
            <el-form-item label="描述" prop="description">
              <el-input v-model="form.description" placeholder="请输入描述" type="textarea" :rows="5" maxlength="100"
                show-word-limit style="width: 300px;" />

            </el-form-item>
            <div class="form-btn" style="    text-align: center;">
              <el-button type="primary" @click="submit('form')">保 存</el-button>
              <el-button @click="resetForm2()">重 置</el-button>
            </div>
          </el-form>
        </el-tab-pane> -->
      </el-tabs>
    </el-main>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { getToken } from '@/utils/auth'
import uploadUrl from '@/api/upload.js'
import { systeminfoQueryAll, systeminfoSave, systeminfoUpdate } from '@/api/columnCategory.js'
import Tinymce from "@/components/Tinymce";
import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'sysinfo',
  components: {
    Tinymce
  },
  data () {
    return {
      activeName: '1',
      uploadUrl,
      loading: false,
      rules: {},
      imgBaseUrl: this.$store.getters.jsonInfo.imageUrl,
      form: {
        id: "",
        logo: "",
        webname: "",
        domainname: "",
        companyname: "",
        communicateaddress: "",
        mobile: "",
        recordnumber: "",
        title: "",
        keywords: "",
        description: '',
        qrcode: "",
        companyinfo: "",
        email: "",
        addresslocation: "",
        postcode: ""
      },
      dataInfo: {}

    }
  },
  computed: {
    isSecond() {
      return this.activeName === '2'
    }
  },
  mounted () {
    this.tableHeight = window.innerHeight - 200
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - 200
      })()
    }
  },
  created () {
    this.systeminfoQueryAll();
  },
  methods: {
    changeTabs(e) {
      this.activeName = e.name
    },
    getToken,
    systeminfoQueryAll () {
      var _self = this;
      systeminfoQueryAll().then(res => {
        _self.form = { ...res.data[0] }
      })
    },
    resetForm3 () {

      this.form.logo = "";
      this.form.qrcode = "";
      this.form.companyinfo = "";
      this.form.email = "";
      this.form.addresslocation = "";
      this.form.postcode = "";
      this.form.companyname = "";
      this.form.communicateaddress = "";
      this.form.mobile = "";


    },
    resetForm () {
      this.form.webname = "";
      this.form.domainname = "";


      this.form.recordnumber = "";
    },
    resetForm2 () {
      this.form.title = "";
      this.form.keywords = "";
      this.form.description = "";
      this.$refs.tinymce.setContent("");
      this.form.companyinfo = "";
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
      var that = this;
      that.$set(that.form, 'logo', res.data)
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
      var that = this;
      that.$set(that.form, 'qrcode', res.data)
    },
    submit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          var obj = this.form;
          console.log(JSON.stringify(obj));
          if (this.form.id) {


            systeminfoUpdate(obj).then((res) => {

              msgAutoClose({
                message: '编辑成功!',
                type: "success"
              });

              this.loading = false;
              this.systeminfoQueryAll();
            });
          } else {


            systeminfoSave(obj).then((res) => {
              if (res.success) {
                msgAutoClose({
                  message: "创建成功!",
                  type: "success"
                });
                this.loading = false;
                this.systeminfoQueryAll();
              }

            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-main {
    height: 100%;
    .el-tabs {
      height: 100%;
      overflow: auto;
    }
  }
}
// 给第二个选项卡单独添加样式
.el-tabs.second{
  /deep/.el-tabs__content {
         height: calc(100% - 40px);
         .el-tab-pane {
          height: 100%;
          .el-form {
            height: 100%;
            .formClass {
              overflow: auto;
              height: calc(100% - 40px)
            }
          }
         }
      }
}
</style>
