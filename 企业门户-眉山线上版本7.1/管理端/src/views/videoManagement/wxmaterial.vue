<template>
  <div class="app-container">
    <el-tabs v-model="materialType" @tab-click="handleClick">
            <el-tab-pane name="image">
              <span slot="label"><i class="el-icon-picture"></i> 图片</span>
              <div class="add_but">
                <el-upload
                        :action="actionUrl"
                        :headers="headers"
                        multiple
                        :limit="1"
                        :on-success="handleUploadSuccess"
                        :file-list="fileList"
                        :before-upload="beforeImageUpload"
                        :data="uploadData">
                  <el-button size="mini" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">
                    支持bmp/png/jpeg/jpg/gif格式，大小不超过2M
                  </div>
                </el-upload>
              </div>
              <div class="waterfall" v-loading="tableLoading">
                <div class="waterfall-item" v-for="item in tableData" :key='item.id'>
                  <a target="_blank" :href="item.url">
                    <el-image class="material-img" :src="item.url" />
                    <div class="item-name">{{item.name}}</div>
                  </a>
                  <el-row class="ope-row">
                    <el-button type="danger" icon="el-icon-delete" circle @click="delMaterial(item)"></el-button>
                  </el-row>
                </div>
              </div>
              <div v-if="tableData.length <=0 && !tableLoading" class="el-table__empty-block">
                <span class="el-table__empty-text">暂无数据</span>
              </div>
              <el-pagination
                      @size-change="sizeChange"
                      @current-change="currentChange"
                      :current-page.sync="page.currentPage"
                      :page-sizes="[10, 20]"
                      :page-size="page.pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="page.total"
                      class="pagination"
              >
              </el-pagination>
            </el-tab-pane>
            <!-- <el-tab-pane name="voice">
              <span slot="label"><i class="el-icon-microphone"></i> 语音</span>
              <div class="add_but">
                <el-upload
                        :action="actionUrl"
                        :headers="headers"
                        multiple
                        :limit="1"
                        :on-success="handleUploadSuccess"
                        :file-list="fileList"
                        :before-upload="beforeVoiceUpload"
                        :data="uploadData">
                  <el-button size="mini" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">
                    格式支持mp3/wma/wav/amr，文件大小不超过2M，播放长度不超过60s
                  </div>
                </el-upload>
              </div>
              <el-table
                      :data="tableData"
                      stripe
                      border
                      v-loading="tableLoading">
                <el-table-column
                        prop="mediaId"
                        label="media_id">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="名称">
                </el-table-column>
                <el-table-column
                        prop="updateTime"
                        label="更新时间">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作">
                  <template slot-scope="scope">
                    <el-button type="text"
                               icon="el-icon-download"
                               size="small"
                               plain
                               @click="handleDown(scope.row)">下载</el-button>
                    <el-button type="text"
                               icon="el-icon-delete"
                               size="small"
                               plain
                               @click="delMaterial(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                      @size-change="sizeChange"
                      @current-change="currentChange"
                      :current-page.sync="page.currentPage"
                      :page-sizes="[10, 20]"
                      :page-size="page.pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="page.total"
                      class="pagination"
              >
              </el-pagination>
            </el-tab-pane> -->
            <el-tab-pane name="video">
              <span slot="label"><i class="el-icon-video-play"></i> 视频</span>
              <div class="add_but">
                <el-button size="mini" type="primary" @click="handleAddVideo">新建</el-button>
              </div>
              <el-dialog title="新建视频" :visible.sync="dialogVideoVisible" v-loading="addMaterialLoading">
                <el-upload
                        ref="uploadVideo"
                        :action="actionUrl"
                        :headers="headers"
                        multiple
                        :limit="1"
                        :on-success="handleUploadSuccess"
                        :file-list="fileList"
                        :before-upload="beforeVideoUpload"
                        :auto-upload="false"
                        :data="uploadData">
                  <el-button slot="trigger" size="mini" type="primary">选择视频</el-button>
                  <div class="el-upload__tip">
                    格式支持MP4，文件大小不超过10MB
                  </div>
                </el-upload>
                <el-form :model="uploadData"
                         :rules="uploadRules"
                         ref="uploadForm">
                  <el-form-item label="标题" prop="title">
                    <el-input v-model="uploadData.title" placeholder="标题将展示在相关播放页面，建议填写清晰、准确、生动的标题"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="introduction">
                    <el-input :rows="3" type="textarea" v-model="uploadData.introduction" placeholder="介绍语将展示在相关播放页面，建议填写简洁明确、有信息量的内容"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogVideoVisible = false">取 消</el-button>
                  <el-button type="primary" @click="subVideo">提 交</el-button>
                </div>
              </el-dialog>
              <el-table
                      :data="tableData"
                      stripe
                      border
                      v-loading="tableLoading">
                <el-table-column
                        prop="mediaId"
                        label="media_id">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="名称">
                </el-table-column>
                <el-table-column
                        prop="updateTime"
                        label="更新时间">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作">
                  <template slot-scope="scope">
                    <el-button type="text"
                               icon="el-icon-view"
                               size="small"
                               plain
                               @click="handleInfo(scope.row)">查看</el-button>
                    <el-button type="text"
                               icon="el-icon-delete"
                               size="small"
                               plain
                               @click="delMaterial(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                      @size-change="sizeChange"
                      @current-change="currentChange"
                      :current-page.sync="page.currentPage"
                      :page-sizes="[10, 20]"
                      :page-size="page.pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="page.total"
                      class="pagination"
              >
              </el-pagination>
            </el-tab-pane>
          </el-tabs>
  </div>
</template>

<script>
import { getWxMaterialPage, addObj, materialDel, materialNewsUpdate,getMaterialOther,materialVideo } from '@/api/newWX/material'
  import {checkPermi, checkRole} from "@/utils/permission"
//   import WxEditor from '@/components/Editor/WxEditor.vue'
//   import WxNews from '@/components/wx-news/main.vue'
//   import WxMaterialSelect from '@/components/wx-material-select/main.vue'
  import { getToken } from '@/utils/auth'

  export default {
    name: 'wxmaterial',
    components: {
    
    },
    data() {
      return {
        materialType:'image',
        tableData: [],
        page: {
          total: 0, // 总页数
          currentPage: 1, // 当前页数
          pageSize: 10 // 每页显示多少条
        },
        page1: {
          total: 0, // 总页数
          currentPage: 1, // 当前页数
          pageSize: 10 // 每页显示多少条
        },
        tableLoading: false,
        actionUrl: this.$store.getters.wechat.baseUrl1 +'sys/materialFileUpload',
        headers: {
          Authorization: 'Bearer ' + getToken()
        },
        fileList:[],
        dialogVideoVisible:false,
        dialogNewsVisible:false,
        addMaterialLoading:false,
        uploadData:{
          "mediaType":'image',
          "title":'',
          "introduction":''
        },
        uploadRules:{
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          introduction: [
            { required: true, message: '请输入描述', trigger: 'blur' }
          ],
        },
        articlesAdd:[
          {
            "title": '',
            "thumbMediaId": '',
            "author": '',
            "digest": '',
            "showCoverPic": '',
            "content": '',
            "contentSourceUrl": '',
            "needOpenComment":'',
            "onlyFansCanComment":'',
            "thumbUrl":''
          }
        ],
        isActiveAddNews:0,
        dialogImageVisible:false,
        imageListData:[],
        tableLoading1:false,
        operateMaterial:'add',
        articlesMediaId:'',
        hackResetEditor:false
      }
    },
    created() {

    },
    mounted: function() {
      this.getWxMaterialPage(this.page)
    },
    computed: {

    },
    methods: {
      dialogNewsClose(done){
        this.$confirm('修改内容可能还未保存，确定关闭吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.hackResetEditor = false//销毁组件
          this.$nextTick(() => {
            this.hackResetEditor = true//重建组件
          })
          this.isActiveAddNews = 0
          done()
        }).catch(() => {
        })

      },
      downNews(index){
        let temp = this.articlesAdd[index]
        this.articlesAdd[index] = this.articlesAdd[index+1]
        this.articlesAdd[index+1] = temp
        this.isActiveAddNews = index+1
      },
      upNews(index){
        let temp = this.articlesAdd[index]
        this.articlesAdd[index] = this.articlesAdd[index-1]
        this.articlesAdd[index-1] = temp
        this.isActiveAddNews = index-1
      },
      getPage1(){
        this.tableLoading1 = true
        getWxMaterialPage({
          current: this.page1.currentPage,
          size: this.page1.pageSize,
          type:'image'
        }).then(response => {
          this.tableLoading1 = false
          this.imageListData = response.data.items
          this.page1.total = response.data.totalCount
        }).catch(() => {
          this.tableLoading1 = false
        })
      },
      selectMaterial(item){
        this.dialogImageVisible = false
        this.articlesAdd[this.isActiveAddNews].thumbMediaId = item.mediaId
        this.articlesAdd[this.isActiveAddNews].thumbUrl = item.url
      },
      openMaterial(){
        this.imageListData = null
        this.page1.currentPage = 1
        this.getPage1()
        this.dialogImageVisible = true
      },
      activeNews(index){
        this.hackResetEditor = false//销毁组件
        this.$nextTick(() => {
          this.hackResetEditor = true//重建组件
        })
        this.isActiveAddNews = index
      },
      minusNews(index){
        this.$confirm('确定删除该图文吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.articlesAdd.splice(index,1);
          if(this.isActiveAddNews ==  index){
            this.isActiveAddNews = 0
          }
        }).catch(() => {
        })
      },
      plusNews(){
        this.articlesAdd.push(
          {
            "title": '',
            "thumbMediaId": '',
            "author": '',
            "digest": '',
            "showCoverPic": '',
            "content": '',
            "contentSourceUrl": '',
            "needOpenComment":'',
            "onlyFansCanComment":'',
            "thumbUrl":''
          }
        )
        this.isActiveAddNews = this.articlesAdd.length - 1
      },
      handleInfo(row){
        this.tableLoading = true
        materialVideo({
          mediaId:row.mediaId
        }).then((response) => {
          this.tableLoading = false
          if(response.code == 10000){
            let downUrl = response.data.downUrl
            window.open(downUrl, '_blank');
          }else{
            this.$message.error('获取微信视频素材出错：' + response.data.message)
          }
        }).catch(() => {
          this.tableLoading = false
        })
      },
      handleDown(row){
        this.tableLoading = true
        getMaterialOther({
          mediaId:row.mediaId,
          fileName:row.name
        }).then(response => {
          this.tableLoading = false
          let url = window.URL.createObjectURL(new Blob([response.data]))
          let link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', row.name)
          document.body.appendChild(link)
          link.click()
        }).catch(() => {
          this.tableLoading = false
        })
      },
      subNews(){
        this.addMaterialLoading = true
        if(this.operateMaterial == 'add'){
          addObj({
            articles:this.articlesAdd
          }).then(response => {
            this.addMaterialLoading = false
            this.dialogNewsVisible = false
            if(response.code == 200){
              this.isActiveAddNews = 0
              this.articlesAdd = [
                {
                  "title": '',
                  "thumbMediaId": '',
                  "author": '',
                  "digest": '',
                  "showCoverPic": '',
                  "content": '',
                  "contentSourceUrl": '',
                  "needOpenComment":'',
                  "onlyFansCanComment":'',
                  "thumbUrl":''
                }
              ]
              this.page.currentPage = 1
              this.getWxMaterialPage(this.page)
            }else{
              this.$message.error('新增图文出错：' + response.data.msg)
            }
          }).catch(() => {
            this.addMaterialLoading = false
          })
        }
        if(this.operateMaterial == 'edit'){
          materialNewsUpdate({
            articles:this.articlesAdd,
            mediaId:this.articlesMediaId
          }).then(response => {
            this.addMaterialLoading = false
            this.dialogNewsVisible = false
            if(response.code == 200){
              this.isActiveAddNews = 0
              this.articlesAdd = [
                {
                  "title": '',
                  "thumbMediaId": '',
                  "author": '',
                  "digest": '',
                  "showCoverPic": '',
                  "content": '',
                  "contentSourceUrl": '',
                  "needOpenComment":'',
                  "onlyFansCanComment":'',
                  "thumbUrl":''
                }
              ]
              this.getWxMaterialPage(this.page)
            }else{
              this.$message.error('修改图文出错：' + response.data.msg)
            }
          }).catch(() => {
            this.addMaterialLoading = false
          })
        }
      },
      subVideo(){
        this.$refs['uploadForm'].validate((valid) => {
          if (valid) {
            this.$refs.uploadVideo.submit()
          } else {
            return false
          }
        })
      },
      handleAddVideo(){
        this.dialogVideoVisible = true
      },
      handleEditNews(item){
        this.hackResetEditor = false//销毁组件
        this.$nextTick(() => {
          this.hackResetEditor = true//重建组件
        })
        if(this.operateMaterial == 'add'){
          this.isActiveAddNews = 0
        }
        this.operateMaterial = 'edit'
        this.articlesAdd = JSON.parse(JSON.stringify(item.content.articles))
        this.articlesMediaId = item.mediaId
        this.dialogNewsVisible = true
      },
      handleAddNews(){
        this.hackResetEditor = false//销毁组件
        this.$nextTick(() => {
          this.hackResetEditor = true//重建组件
        })
        if(this.operateMaterial == 'edit'){
          this.isActiveAddNews = 0
          this.articlesAdd = [
            {
              "title": '',
              "thumbMediaId": '',
              "author": '',
              "digest": '',
              "showCoverPic": '',
              "content": '',
              "contentSourceUrl": '',
              "needOpenComment":'',
              "onlyFansCanComment":'',
              "thumbUrl":''
            }
          ]
        }
        this.operateMaterial = 'add'
        this.dialogNewsVisible = true
      },
      beforeThumbImageUpload(file){
        this.addMaterialLoading = true
        const isType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/bmp' || file.type === 'image/jpg';
        const isLt = file.size / 1024 / 1024 < 2
        if (!isType) {
          this.$message.error('上传图片格式不对!')
        }
        if (!isLt) {
          this.$message.error('上传图片大小不能超过2M!')
        }
        this.addMaterialLoading = false
        return isType && isLt;
      },
      beforeImageUpload(file){
        this.tableLoading = true
        const isType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/bmp' || file.type === 'image/jpg';
        const isLt = file.size / 1024 / 1024 < 2
        if (!isType) {
          this.$message.error('上传图片格式不对!')
        }
        if (!isLt) {
          this.$message.error('上传图片大小不能超过2M!')
        }
        this.tableLoading = false
        return isType && isLt;
      },
      beforeVoiceUpload(file){
        this.tableLoading = true
        const isType = file.type === 'audio/mp3' || file.type === 'audio/wma' || file.type === 'audio/wav' || file.type === 'audio/amr';
        const isLt = file.size / 1024 / 1024 < 2
        if (!isType) {
          this.$message.error('上传语音格式不对!')
        }
        if (!isLt) {
          this.$message.error('上传语音大小不能超过2M!')
        }
        this.tableLoading = false
        return isType && isLt;
      },
      beforeVideoUpload(file){
        this.addMaterialLoading = true
        const isType = file.type === 'video/mp4'
        const isLt = file.size / 1024 / 1024 < 10
        if (!isType) {
          this.$message.error('上传视频格式不对!')
        }
        if (!isLt) {
          this.$message.error('上传视频大小不能超过10M!')
        }
        this.addMaterialLoading = false
        return isType && isLt;
      },
      delMaterial(item){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableLoading = true
          materialDel({
            id:item.mediaId
          }).then(response => {
            this.tableLoading = false
            if(response.code == 10000){
              this.getWxMaterialPage(this.page)
            }else{
              this.tableLoading = false
              this.$message.error('删除出错：' + response.data.msg)
            }
          }).catch(() => {
            this.tableLoading = false
          })
        })
      },
      handleUploadSuccess(response, file, fileList){
        this.tableLoading = false
        this.addMaterialLoading = false
        if(response.code == 10000){
          this.dialogVideoVisible = false
          this.fileList = []
          this.uploadData.title = ''
          this.uploadData.introduction = ''
          if(this.materialType != 'news'){
            this.page.currentPage = 1
            this.getWxMaterialPage(this.page)
          }else{
            this.articlesAdd[this.isActiveAddNews].thumbMediaId = response.data.mediaId
            this.articlesAdd[this.isActiveAddNews].thumbUrl = response.data.url
          }
        }else{
          this.$message.error('上传出错：' + response.msg)
        }
      },
      handleClick(tab, event){
        let materialType = tab.name
        this.page.currentPage = 1
        this.materialType = materialType
        this.getWxMaterialPage(this.page)
        this.uploadData.mediaType = materialType
        if(materialType == 'news'){
          this.uploadData.mediaType = 'image'
        }
      },
      getWxMaterialPage(page, params) {
        this.tableData = []
        this.tableLoading = true
        getWxMaterialPage(Object.assign({
          current: page.currentPage,
          size: page.pageSize,
          type:this.materialType
        }, params)).then(response => {
          this.tableData = response.data.items
          this.page.total = response.data.totalCount
          this.page.currentPage = page.currentPage
          this.page.pageSize = page.pageSize
          this.tableLoading = false
        }).catch(() => {
          this.tableLoading = false
        })
      },
      sizeChange(val) {
        this.page.currentPage = 1
        this.page.pageSize = val
        this.getWxMaterialPage(this.page)
      },
      currentChange(val) {
        this.page.currentPage = val
        this.getWxMaterialPage(this.page)
      },
      /**
       * 刷新回调
       */
      refreshChange(page) {
        this.getWxMaterialPage(this.page)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination{
    float: right;
    margin-right: 25px;
  }
  .add_but{
    padding: 10px;
  }
  .ope-row{
    margin-top: 5px;
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding-top: 5px;
  }
  .item-name{
    font-size: 12px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: center;
  }
  .el-upload__tip{
    margin-left: 5px;
  }
  /*新增图文*/
  .left{
    display: inline-block;
    width: 35%;
    vertical-align: top;
    margin-top: 200px;
  }
  .right{
    display: inline-block;
    width: 60%;
    margin-top: -40px;
  }
  .avatar-uploader{
    width: 20%;
    display: inline-block;
  }
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-align: unset!important;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    border: 1px solid #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 230px;
    height: 120px;
  }
  .avatar1 {
    width: 120px;
    height: 120px;
  }
  .digest{
    width: 60%;
    display: inline-block;
    vertical-align: top;
  }
  /*新增图文*/
  /*瀑布流样式*/
  .waterfall {
    width: 100%;
    column-gap:10px;
    column-count: 5;
    margin: 0 auto;
  }
  .waterfall-item {
    padding: 10px;
    margin-bottom: 10px;
    break-inside: avoid;
    border: 1px solid #eaeaea;
  }
  p {
    line-height: 30px;
  }
  @media (min-width: 992px) and (max-width: 1300px) {
    .waterfall {
      column-count: 3;
    }
    p {
      color:red;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .waterfall {
      column-count: 2;
    }
    p {
      color: orange;
    }
  }
  @media (max-width: 767px) {
    .waterfall {
      column-count: 1;
    }
  }
  /*瀑布流样式*/
  .news-main{
    background-color: #FFFFFF;
    width: 100%;
    margin: auto;
    height: 120px;
  }
  .news-content{
    background-color: #acadae;
    width: 100%;
    height: 120px;
    position: relative;
  }
  .news-content-title{
    display: inline-block;
    font-size: 15px;
    color: #FFFFFF;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: black;
    width: 98%;
    padding: 1%;
    opacity: 0.65;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height: 25px;
  }
  .news-main-item{
    background-color: #FFFFFF;
    padding: 5px 0px;
    border-top: 1px solid #eaeaea;
    width: 100%;
    margin: auto;
  }
  .news-content-item{
    position: relative;
    margin-left: -3px
  }
  .news-content-item-title{
    display: inline-block;
    font-size: 12px;
    width: 70%;
  }
  .news-content-item-img{
    display: inline-block;
    width: 25%;
    background-color: #acadae
  }
  .input-tt{
    padding: 5px;
  }
  .activeAddNews{
    border: 5px solid #2bb673;
  }
  .news-main-plus{
    width: 280px;
    text-align: center;
    margin: auto;
    height: 50px;
  }
  .icon-plus{
    margin: 10px;
    font-size: 25px;
  }
  .select-item{
    width: 60%;
    padding: 10px;
    margin: 0 auto 10px auto;
    border: 1px solid #eaeaea;
  }
  .father .child{
    display:none;
    text-align: center;
    position:relative;
    bottom: 25px;
  }
  .father:hover .child{
    display:block;
  }
  .thumb-div{
    display: inline-block;
    width: 30%;
    text-align: center;
  }
  .thumb-but{
    margin: 5px;
  }
  .material-img {
    width: 100%;
    height: 100%;
  }
</style>
