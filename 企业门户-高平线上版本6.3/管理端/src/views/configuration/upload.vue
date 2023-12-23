<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>二维码生产</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text"><a href="javascript:;" @click="start=false">打包记录</a></el-button> -->
        </div>
        <div v-loading="loading" class="generate-step-area" element-loading-text="正在打包请稍后"
          element-loading-spinner="el-icon-loading">
          <img class="step-img" src="https://static.clewm.net/static/images/batch/tpl@2x_0bfda67.png?v=0503" alt>
          <div class="step-box clearfix download-file-box">
            <div style="display:flex">
              <el-form ref="params" :inline="true" size="small">
                <el-form-item label="本次生成二维码个数" prop="title">
                  <el-input v-model="pureNumber" style="width:150px"
                    onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )" placeholder="请输入二维码个数" />
                </el-form-item>
              </el-form>

            </div>
            <div style="display:flex">
              <el-button type="primary" style="height: 35px;" @click="bindZip"> 打包下载</el-button>
              <!-- <el-upload
                  style="margin-left:20px"
                  class="upload-demo"
                  :action="uploadSctionUrl "
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-upload="beforeUploadFile"
                  :on-change="handleChange"
                  multiple
                  :data="{
                    data:JSON.stringify({
                      companyID:'beian',
                      excelPath:path
                    })
                  }"
                  :on-success="fileDuccess"
                  :file-list="fileList"
                >
                  <el-button type="primary">点击上传</el-button>
                </el-upload> -->
            </div>
            <!-- <el-button type="primary">上传表具信息</el-button> -->
            <!-- <div class="step-box-desc">
                打包须知 ：
                <br>1. 请按照Excel文件模板填写，单次最多支持500条数据
                <br>2. 下载后请在Office Excel中编辑，暂不支持WPS
              </div> -->
          </div>
        </div>
      </el-card>
    </el-main>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { files, geneQrCode, findPage } from '@/api/information.js'
export default {
  name: 'Upload',
  data () {
    return {
      loading: false,
      value2: [],
      start: true,
      fileList: [],
      uploadSctionUrl: '',
      path: '',
      updodUrl: '',
      pureNumber: 1,
      tableHeight: null,
      total: 0,
      listLoading: false,
      tableData: [
      ],
      params: {
        username: '',
        linkphone: '',
        begintime: '',
        endtime: '',
        page: 1,
        size: 15
      }
    }
  },
  watch: {
    'pureNumber': function (curVal, oldVal) {
      if (!curVal) {
        this.pureNumber = ''
        return false
      }
      // 实时把非数字的输入过滤掉
      this.pureNumber = curVal.match(/\d/ig) ? curVal.match(/\d/ig).join('') : ''
    }
  },
  mounted () {
    if (!this.start) {
      this.tableHeight =
        window.innerHeight - this.$refs.formBox.offsetHeight - 200
      window.onresize = () => {
        return (() => {
          this.tableHeight =
            window.innerHeight - this.$refs.formBox.offsetHeight - 200
        })()
      }
    }

    this.uploadSctionUrl = this.$store.state.app.baseUrl + 'pc/meter/parseExcel'
    this.updodUrl = files()
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.listLoading = true
      this.params.begintime = this.value2[0]
      this.params.endtime = this.value2[1]
      findPage(this.params)
        .then((res) => {
          this.listLoading = false
          if (res.success && res.data) {
            this.tableData = res.data.rows
            this.total = res.data.total
            this.$nextTick(() => {
              this.$refs.goodsDetailTable.doLayout()
            })
          } else {
            this.total = 0
            this.tableData = []
          }
        })
        .catch(() => {
          this.listLoading = false
        })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    fileDuccess () {
      this.$message.success('导入成功!')
    },
    handleChange (file, fileList) {
      this.path = file.name
    },
    beforeUploadFile (file) {
      const fileName = file.name
      const regex = /(.xls|.xlsx)$/
      const isExcel = regex.test(fileName.toLowerCase())
      if (!isExcel) {
        this.$message.error('请选择Excel文件!')
        return false
      }
      return isExcel
    },
    bindZip () {
      this.loading = true
      geneQrCode(this.pureNumber).then(res => {
        if (res.success && res.data) {
          this.loading = false
          window.location.href = res.data
        }
      }).catch(() => {
      })
    },
    DownloadTemplateFile () {
      // 添加一个a标签
      const ele = document.createElement('a')
      // 给a标签加入下载地址
      ele.download = '../dot9tools.zip'
      // 隐藏a标签
      ele.style.display = 'none'
      // 给a标签加入地址
      ele.href = '../dot9tools.zip'
      // 规定在当前页面打开
      ele.target = '_blank'
      // 把元素加入到页面中
      document.body.appendChild(ele)
      // 触发它的点击事件
      ele.click()
      // 移除元素
      document.body.removeChild(ele)
      window.location.href = this.updodUrl
    },
    openMian () {
      window.open('https://cli.im/mina/home')
    }
  }
}
</script>
<style lang="scss" scoped>
.generate-step-area {
  width: 100%;
  height: 240px;
  background: #fcfcfc;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  padding: 52px 32px;
  margin-bottom: 32px;
  .step-img {
    float: left;
    margin-right: 30px;
    width: 200px;
    height: 136px;
  }
  .step-box {
    float: left;
    width: 335px;
    padding: 8px 0;
    .step-box-desc {
      font-size: 12px;
      color: #999;
      line-height: 18px;
      margin-top: 17px;
    }
  }
}
</style>
