<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->

    <el-aside width="280px" style="padding: 10px;">
      <el-input
        v-model="filterText"
        prefix-icon="el-icon-search"
        placeholder="请输入内容"
      >
        <!-- <el-button slot="append" type="primary" :icon="prepIcon" @click="prepClick">
          新增</el-button> -->
      </el-input>
      <el-tree
        ref="menuTable"
        class="struc-tree"
        v-loading="treeLoading"
        :props="defaultProps"
        :data="data"
        node-key="id"
        highlight-current
        default-expand-all
        :expand-on-click-node="false"
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
      >
        <!-- eslint-disable-next-line vue/no-template-shadow -->
        <span
          slot-scope="{ data }"
          class="custom-tree-node"
          :style="{
            cursor: data.pid == 0 ? 'not-allowed' : ''
          }"
        >
          <span>
            <img
              v-if="data.pid == 0"
              style="width: 1em;height: 1em;vertical-align: -.15em;fill: currentColor;"
              src="@/assets/02.png"
            />
            <img
              v-else
              style="width: 1em;height: 1em;vertical-align: -.15em;fill: currentColor;"
              src="@/assets/03.png"
            />
            <!-- <img style="width: 1em;height: 1em;vertical-align: -.15em;fill: currentColor;" v-else
              src="@/assets/wenjian.png" /> -->
            <span v-if="data.name.length > 8" :title="data.name">{{
              data.name.slice(0, 13) + "..."
            }}</span>
            <span v-else>{{ data.name }}</span>
          </span>
        </span>
      </el-tree>
    </el-aside>
    <el-main class="main-content" style="argin-left: 10px;">
      <div
        class="report-cards"
        v-loading="loading"
        style="width: 100%;margin-left:10px"
      >
        <div
          class="selectLm"
          v-if="!isUrl && !isDeatile && !isList && !contentInfo"
        >
          请选择左侧二级菜单
        </div>
        <el-row v-if="isUrl" style="height: 100%;">
          <iframe
            :src="url"
            style="width:100%;height:100%"
            frameborder="0"
          ></iframe>
        </el-row>
        <el-row v-if="isDeatile" style="height: 100%;">
          <el-card class="box-card">
            <div slot="header" class="clearfix" style="height:100%">
              <div class="hearder-title">{{ category }}</div>
              <div style="float: right; margin-top: -36px">
                <el-button
                  @click.stop="openEdital2(item)"
                  class="btnupdata"
                  type="text"
                  ><i
                    class="el-icon-edit"
                    style="font-size:20px;color: #fff"
                  ></i
                ></el-button>
                <el-button
                  @click.stop="openDel2(listData[0])"
                  class="btndelete"
                  type="text"
                  ><i
                    class="el-icon-delete"
                    style="font-size:20px;color: #fff"
                  ></i>
                </el-button>
              </div>
            </div>
            <div class="text item" style="margin:20px;text-align: center;">
              <div v-if="listData.length == 0">
                <img
                  v-if="$store.getters.theme == 'dark'"
                  src="@/assets/noData3.png"
                  style="width: 400px;height: 366px;"
                  alt=""
                  srcset=""
                />
                <img
                  v-else
                  src="@/assets/noData3.png"
                  style="width: 400px;height: 366px;"
                  alt=""
                  srcset=""
                />
              </div>
              <el-collapse v-if="listData.length > 0" v-model="activeNames">
                <el-collapse-item name="1">
                  <template slot="title">
                    <img
                      style="width: 1em;height: 1em;margin-right:0.2em;vertical-align: -.15em;fill: currentColor;"
                      src="@/assets/04.png"
                    />
                    标题名称
                    <!--                  标题名称<i class="header-icon el-icon-info"></i>-->
                  </template>
                  <div>
                    <span style="margin-right: 1.2em"></span>
                    {{ listData[0].title }}
                  </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <template slot="title">
                    <img
                      style="width: 1em;height: 1em;margin-right:0.2em;vertical-align: -.15em;fill: currentColor;"
                      src="@/assets/04.png"
                    />
                    摘要
                  </template>
                  <div>
                    <span style="margin-right: 1.2em"></span
                    >{{ listData[0].summary }}
                  </div>
                </el-collapse-item>

                <el-collapse-item name="3">
                  <template slot="title">
                    <img
                      style="width: 1em;height: 1em;margin-right:0.2em;vertical-align: -.15em;fill: currentColor;"
                      src="@/assets/04.png"
                    />
                    封面图
                  </template>
                  <div class="demo-image__preview">
                    <span style="margin-right: 1.2em"></span>
                    <el-image
                      style="width:300px"
                      :src="baseImageUrl + listData[0].coverpic"
                      lazy
                      fill="contain"
                    ></el-image>
                  </div>
                </el-collapse-item>
                <el-collapse-item name="5">
                  <template slot="title">
                    <img
                      style="width: 1em;height: 1em;margin-right:0.2em;vertical-align: -.15em;fill: currentColor;"
                      src="@/assets/04.png"
                    />
                    内容
                  </template>
                  <div
                    v-html="listData[0].content"
                    style="text-indent: 1.2em"
                  ></div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-row>
        <div class="listContent" v-if="isList">
          <el-row style="margin:10px">
            <el-form ref="params" :inline="true" :model="params" size="small">
              <el-form-item label="新闻名称" prop="title">
                <el-input
                  v-model="params.title"
                  clearable
                  placeholder="请输入新闻名称"
                />
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  @click="newsQueryBy"
                  >查 询</el-button
                >
                <el-button
                  plain
                  type="primary"
                  icon="el-icon-refresh"
                  @click="reloadClick('params')"
                  >重 置</el-button
                >
                <el-button
                  type="success"
                  icon="el-icon-plus"
                  size="small"
                  @click.stop="openaddList"
                  >新增</el-button
                >
              </el-form-item>
            </el-form>
            <div
              v-if="listData.length == 0"
              style="text-align: center;margin-top: 200px;"
            >
              <img
                v-if="$store.getters.theme == 'dark'"
                src="@/assets/noData3.png"
                style="width: 400px;height: 366px;"
                alt=""
                srcset=""
              />
              <img
                v-else
                src="@/assets/noData3.png"
                style="width: 400px;height: 366px;"
                alt=""
                srcset=""
              />
            </div>
            <!-- <div class="btn-box" style="margin: 20px 0px;">
            <el-button type="primary" icon="el-icon-plus" size="small" @click.stop="openaddList">新增</el-button>
          </div> -->
            <!-- <el-col :span="6">
            <el-card class="box-card box-list" shadow="hover">
              <div class="el-upload el-upload&#45;&#45;text" style="width:100%" @click.stop="openaddList"><i
                  class="el-icon-plus avatar-uploader-icon2"></i><input type="file" name="file"
                  class="el-upload__input">
              </div>
            </el-card>
          </el-col> -->
            <div class="listConent">
              <el-col
                :span="6"
                v-for="(item, index) in listData"
                :key="item.id"
                style="min-width: 325px;"
              >
                <el-card class="box-list" shadow="hover">
                  <div
                    @mouseenter="enters(item, index)"
                    @mouseleave="leaver(item, index)"
                    style="position: relative;"
                    :class="{ cover: coverid == index ? 'cover' : 'cover2' }"
                    @click.stop="openEdital(item)"
                  >
                    <div class="imgDiv">
                      <img
                        :src="
                          item.coverpic
                            ? baseImageUrl + item.coverpic
                            : require('@/assets/companyProfile.jpg')
                        "
                        class="image"
                        style="object-fit:cover"
                      />
                      <div class="small-lun-info">
                        {{ item.title }}
                      </div>
                    </div>
                    <!-- <div class="text item zhaiyao">
                      {{ item.title }}
                    </div> -->

                    <div class="bottom clearfix">
                      <p class="time">发布时间:{{ item.createtime }}</p>
                    </div>
                    <!-- <div>
                      <i
                          class="el-icon-delete"
                          style="color: red;font-size:30px"
                          @click.stop="openDel(item)"
                        />
                    </div> -->
                    <el-button
                      type="danger"
                      class="remove"
                      size="mini"
                      icon="el-icon-delete"
                      @click.stop="openDel(item)"
                    >
                    </el-button>
                    <el-button
                      type="success"
                      class="edit"
                      size="mini"
                      icon="el-icon-edit"
                      @click.stop="openEdital(item)"
                    >
                    </el-button>
                  </div>
                </el-card>
              </el-col>
            </div>
          </el-row>
          <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="total"
            :page-size="params.size"
            :current-page="params.page"
            :page-sizes="[20, 24, 28, 32]"
            style="margin-top:20px;margin-left:20px"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>

        <el-form
          v-if="contentInfo"
          ref="dataFormRef"
          :inline="false"
          :rules="rules"
          :model="form"
          label-width="150px"
          class="menu-form"
          style="padding-right:20px;overflow: auto;height: inherit;"
        >
          <el-page-header
            v-if="dataInfo.istabulation == 1"
            @back="goBack"
            style="padding: 9px 5px;"
          >
            <template slot="content">
              <div>
                {{ category }}
                <i class="el-breadcrumb__separator el-icon-arrow-right"></i
                >{{ content }}
              </div>
            </template>
          </el-page-header>
          <el-form-item
            label="类别名称"
            prop="category"
            style="padding-top:20px"
          >
            <el-input v-model="category" :disabled="true" style="width: 30%;" />
          </el-form-item>
          <el-form-item label="标题名称" prop="title">
            <el-input v-model="form.title" style="width: 50%;" />
          </el-form-item>

          <el-form-item label="摘要" prop="summary">
            <el-input
              v-model="form.summary"
              type="textarea"
              :rows="5"
              style="width: 80%;"
            />
          </el-form-item>

          <el-form-item label="封面图" prop="summary" class="previewItem">
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
                v-if="form.coverpic"
                :src="baseImageUrl + form.coverpic"
                class="avatar"
                style="width:200px;height:100px;object-fit:contain;object-position:left"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
            <el-button
              v-if="form.coverpic"
              type="primary"
              size="mini"
              class="previewButton"
              @click="previewImg(baseImageUrl + form.coverpic)"
              >预览</el-button
            >
          </el-form-item>
          <el-form-item label="内容">
            <tinymce
              ref="tinymce"
              v-if="contentInfo"
              v-model="form.content"
              :up-url="uploadUrl"
              :up-src="'/upload/imgUpload'"
              :height="200"
            />
          </el-form-item>

          <el-form-item label="附件" style="width: 100%;">
            <el-upload
              ref="fileUpload"
              :action="uploadFileUrl"
              :file-list="form.fileList"
              :data="addtionDataAttachment"
              :on-success="handleFileSuccess"
              :on-remove="handleFileRemove"
            >
              <el-button
                plain
                size="small"
                icon="el-icon-upload2"
                type="primary"
                >选取附件</el-button
              >
            </el-upload>
          </el-form-item>

          <div class="form-btn">
            <el-button type="primary" @click="submit('dataFormRef')"
              >保 存</el-button
            >
            <el-button @click="resetForm()">重 置</el-button>
            <el-button size="mini" type="danger" @click="openDel2(listData[0])"
              >删除</el-button
            >
          </div>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import {
  columnCategoryQueryList,
  newsQueryBy,
  newsSave,
  newsDel,
  newsUpdate
} from "@/api/columnCategory";
import Tinymce from "@/components/Tinymce";
import uploadUrl from "@/api/upload.js";
import { getToken } from "@/utils/auth";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      dataInfo: {},
      coverid: "",
      params: {
        title: "",
        page: 1,
        size: 15
      },
      total: 0,
      rules: {
        title: [{ required: true, trigger: "blur", message: "请输入新闻标题" }],
        summary: [
          { required: true, trigger: "blur", message: "请输入新闻摘要" }
        ],
        coverpic: [
          { required: true, trigger: "blur", message: "请上传新闻封面" }
        ]
      },
      activeNames: ["1", "2", "3", "4", "5"],
      baseUrl: this.$store.state.app.baseUrl,
      baseImageUrl: this.$store.getters.jsonInfo.imageUrl,
      uploadFileUrl: this.$store.state.app.baseUrl + "/upload/fileUpload",
      uploadUrl,
      category: "",
      url: "",
      accessToken: "",
      addtionDataAttachment: "",
      content: "",
      addtionDataAttachment: {
        data: "Attachment"
      },
      form: {
        columncategoryid: "",
        title: "",
        summary: "",
        coverpic: "",
        content: "",
        attachment: "",
        fileList: []
      },
      dialogVisible: true,
      isList: false,
      defaultProps: {
        // value: "id", // ID字段名
        label: "name",
        children: "child" // 子级字段名
      },
      treeLoading: false, // 菜单树loading
      filterText: "",
      data: [],
      tags: [
        { name: "全国", type: "", closable: false },
        { name: "大东南区", type: "", closable: true },
        { name: "全车系", type: "success", closable: false },
        { name: "新明锐", type: "success", closable: true },
        { name: "全渠道", type: "warning", closable: false },
        { name: "DCC", type: "warning", closable: true }
      ],
      selectDate: new Date(),
      radio: 1,
      isUrl: false,
      isList: false,
      isDeatile: false,
      contentInfo: false,
      listData: [],
      columncategoryid: "",
      loading: false,
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  },
  watch: {
    filterText(val) {
      this.$refs.menuTable.filter(val);
    }
  },
  computed: {
    prepIcon() {
      return "el-icon-plus";
    }
  },
  mounted() {
    this.columnCategoryQueryList();
  },
  methods: {
    getToken,
    previewImg(imgUrl) {
      this.$viewerApi({
        images: [imgUrl],
        options: {
          zIndex: 9999
        }
      });
    },
    reloadClick() {
      this.params.title = "";
      this.params.page = 1;
      this.newsQueryBy();
    },
    //新闻内容条件查询
    newsQueryBy() {
      this.loading = true;
      this.listData = [];
      var param = {
        title: this.params.title,
        columncategoryid: this.form.columncategoryid,
        page: this.params.page,
        size: this.params.size
      };
      newsQueryBy(param)
        .then(res => {
          this.loading = false;
          if (res.success && res.data.rows) {
            this.listData = res.data.rows;
            if (this.isDeatile) {
              this.openEdital2();
            }
            this.total = res.data.total;
          } else {
            this.listData = [];
          }
        })
        .catch(() => {});
    },
    handleCurrentChange(val) {
      this.params.page = val;
      this.newsQueryBy();
    },
    handleSizeChange(val) {
      this.params.size = val;
      this.newsQueryBy();
    },
    iconImgSuccess(res, file) {
      this.form.coverpic = res.data;
    },
    goBack() {
      if (this.content == "新闻列表") {
        this.contentInfo = false;
        this.isList = true;
      } else {
        this.contentInfo = false;
      }
    },
    beforeUpload(file) {
      const fileName = file.name;
      const regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      const isJPG = regex.test(fileName.toLowerCase());
      const isLt3M = file.size / 1024 / 1024 < 3;
      if (!isJPG) {
        this.$message.error("请选择图片文件!");
        return false;
      }
      if (!isLt3M) {
        this.$message.error("上传图片大小不能超过 3MB!");
        return false;
      }
      return true;
    },
    //新增列表
    openaddList() {
      var _self = this;
      _self.isList = false;
      _self.contentInfo = true;
      _self.form.id = "";
      _self.content = "新闻列表";
      _self.form.title = "";
      _self.form.summary = "";
      _self.form.coverpic = "";
      _self.form.content = "";
      _self.$refs.tinymce.setContent("");
      _self.form.attachment = "";
      _self.form.fileList = [];
    },
    // 查询栏目类别
    columnCategoryQueryList() {
      this.treeLoading = true;
      columnCategoryQueryList({})
        .then(res => {
          this.treeLoading = false;
          if (res.success && res.data) {
            this.data = res.data;
          } else {
            this.data = [];
          }
        })
        .catch(() => {
          this.treeLoading = false;
        });
    },
    prepClick() {},
    openEdital2() {
      if (this.listData.length > 0) {
        this.form = {
          columncategoryid: this.listData[0].columncategoryid,
          title: this.listData[0].title,
          summary: this.listData[0].summary,
          coverpic: this.listData[0].coverpic,
          content: this.listData[0].content,
          attachment: this.listData[0].attachment,
          id: this.listData[0].id
        };
        var fileList = [];
        this.form.fileList = [];
        if (this.listData[0].attachment) {
          fileList = JSON.parse(this.listData[0].attachment);
          fileList.map(item => {
            this.form.fileList.push({
              name: item,
              url: item,
              response: {
                success: true,
                code: 10000,
                message: "上传成功",
                data: item
              }
            });
          });
        }
      } else {
        this.form.id = "";
        this.form = {
          title: "",
          summary: "",
          coverpic: "",
          content: "",
          attachment: "",
          fileList: [],
          columncategoryid: this.form.columncategoryid
        };
        this.fileList = [];
      }
      console.log(this.form.columncategoryid);
      this.content = "新闻详情";
      this.isDeatile = false;
      this.contentInfo = true;
    },
    openEdital(data) {
      this.form = {
        columncategoryid: data.columncategoryid,
        title: data.title,
        summary: data.summary,
        coverpic: data.coverpic,
        content: data.content,
        attachment: data.attachment,
        id: data.id
      };
      var fileList = [];
      this.form.fileList = [];
      if (data.attachment) {
        fileList = JSON.parse(data.attachment);
        fileList.map(item => {
          this.form.fileList.push({
            name: item,
            url: item,
            response: {
              success: true,
              code: 10000,
              message: "上传成功",
              data: item
            }
          });
        });
        console.log(this.form.fileList);
      }

      this.content = "新闻列表";
      this.isList = false;
      this.contentInfo = true;
    },
    openDel2(data) {
      console.log(data);
      this.$confirm("此操作将删除该新闻内容, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        var id = data.id;

        newsDel({ id }).then(res => {
          if (res.success) {
            this.$message.success("删除成功！");
            this.resetForm();
          }
        });
      });
    },
    resetForm() {
      var _self = this;
      _self.form.title = "";
      _self.form.summary = "";
      _self.form.coverpic = "";
      _self.form.content = "";
      _self.$refs.tinymce.setContent("");
      _self.form.attachment = "";
      _self.form.fileList = [];
    },
    openDel(data) {
      console.log(data);
      this.$confirm("此操作将删除该新闻内容, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        var id = data.id;

        newsDel({ id }).then(res => {
          if (res.success) {
            this.$message.success("删除成功！");
            this.newsQueryBy();
          }
        });
      });
    },
    //鼠标移入
    enters(item, index) {
      this.coverid = index; //这里传入index来判断是哪个li需要加入阴影样式
    },
    //鼠标移出
    leaver(item, index) {
      this.coverid = "aa";
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          var obj = this.form;
          console.log(JSON.stringify(this.form.fileList));
          const getPathString = function(fileList) {
            return JSON.stringify(
              fileList
                .filter(item => item.response.message === "上传成功")
                .map(item => item.response.data)
            );
          };
          obj.attachment = getPathString(this.form.fileList);
          if (this.form.id) {
            newsUpdate(obj).then(res => {
              this.$message({
                message: "编辑成功",
                type: "success",
                duration: 1000
              });
              this.loading = false;

              if (this.dataInfo.istabulation == 1) {
                this.contentInfo = false;
                this.isList = true;
                this.resetForm();
                this.newsQueryBy();
              }
            });
          } else {
            newsSave(obj).then(res => {
              if (res.success) {
                this.$message({
                  message: "创建成功",
                  type: "success",
                  duration: 1000
                });
                if (this.dataInfo.istabulation == 1) {
                  if (this.content == "新闻列表") {
                    this.contentInfo = false;
                    this.isList = true;
                  } else {
                    this.contentInfo = false;
                  }
                  this.loading = false;
                  this.resetForm();
                  this.newsQueryBy();
                }
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 树节点过滤
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    // 上传附件成功
    handleFileSuccess(response, file, fileList) {
      const _self = this;
      _self.form.fileList = fileList;
    },
    // 移除附件
    handleFileRemove(file, fileList) {
      const _self = this;
      _self.form.fileList = fileList;
    },
    // 树节点选中事件
    handleNodeClick(v, e) {
      // this.loading = true;
      // this.isList = true
      if (v.pid == "0") {
        return this.$message.warning("请选择二级菜单");
      }
      this.dataInfo = v;
      this.category = v.name;
      this.form.columncategoryid = v.id;
      //是否跳转
      if (v.isjump == 1) {
        // this.isUrl = true;
        // this.isList = false;
        // this.isDeatile = false;
        // this.contentInfo = false;
        // this.url = v.urlpath
      } else if (v.istabulation == 1 && v.pid != "0") {
        //列表
        this.isList = true;
        this.isUrl = false;
        this.isDeatile = false;
        this.contentInfo = false;
        this.newsQueryBy();
      } else if (v.istabulation == 2 && v.pid != "0") {
        //详情
        this.isDeatile = true;
        this.isList = false;
        this.isUrl = false;
        this.contentInfo = false;
        this.newsQueryBy();
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.zhaiyao {
  margin: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 15px;
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
}
.title {
  display: inline-block;
  height: 100%;
  line-height: 44px;
  width: 171px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
}
.main-content {
  display: flex;
  height: calc(100% - 10px);
  background-color: #fff;
}
.report-cards {
  height: 98%;
  overflow: hidden;
}
.el-card {
  height: 100%;
}
.el-card__header {
  padding: 5px 10px;
  background: #fff;
  height: 50px;
  position: relative;
}
.el-card__body {
  // background: #F2F2F2;
  height: 100%;
  padding: 0 !important;
  // display: flex;
  // flex-direction: column;
}
.el-card__body img {
  width: 100%;
  height: 186px;
  object-fit: fill;
  object-fit: contain;
  object-fit: scale-down;
}
.time {
  font-size: 13px;
  color: #999;
  position: relative;
  padding-left: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 28px;
}
.el-collapse-item__header {
  font-size: 16px;
  font-weight: 700;
}
.bottom {
  position: relative;
}
.remove {
  position: absolute !important;
  bottom: 10px;
  right: 10px;
  background-color: #f56c6c;
}
.edit {
  position: absolute;
  bottom: 10px;
  right: 58px;
  background-color: #67c23a;
}
.hearder-title {
  color: rgb(111, 180, 255);
  font-size: 16px;
  font-weight: 600;
  line-height: 43px;
  display: block;
  height: 100%;
}
.el-collapse-item__content {
  text-align: left;
}
.el-aside {
  background-color: #fff;
  height: calc(100% - 8px);
  padding: 0;
  margin-top: -1px;
  border: 1px solid #eee;
  [data-theme="dark"] & {
    border: 1px solid #4c4545;
  }
  overflow: hidden;
  .title {
    margin: 0;
    font-size: 15px;
    text-indent: 1em;
  }
  /deep/.el-menu-app {
    background-color: #ffffff;
    height: calc(100% - 35px);
    .el-menu-item.is-active {
      background-color: #fff;
      border-right: 3px solid #1890ff;
    }
  }
  .el-tree {
    height: calc(100% - 40px);
    overflow-y: auto;
  }
}
.listContent {
  height: 100%;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  .handle-tool {
    display: none;
  }
  &:hover {
    .handle-tool {
      display: block;
    }
  }
}
.form-btn {
  padding-left: 150px;
}
.selectLm {
  width: 400px;
  text-align: center;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  color: #ccc;
}

.avatar-uploader-icon2 {
  width: 100% !important;
  height: 280px !important;
  line-height: 280px !important;
  font-size: 38px;
}
.imgDiv {
  position: relative;
  .small-lun-info {
    position: absolute;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
    text-indent: 10px;
    z-index: 12;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  .small-lun-info:hover {
    text-decoration: underline;
  }
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.btndelete {
  padding: 6px;
  background-color: rgb(243, 108, 108);
  border-radius: 50%;
}
.btnupdata {
  padding: 6px;
  //margin:0 20px;
  background-color: rgb(64, 158, 254);
  border-radius: 50%;
}
.filter-condition {
  background: #464b5d;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
.el-tag {
  margin-right: 10px;
}
.el-row {
  height: calc(100% - 70px);
  overflow: auto;
}
// .listConent {
// }
.box-list {
  //margin: 5px 10px;
  margin: 0px 20px 20px 0px !important;
  height: 238px !important;
  border-bottom-width: 2px;
}
.box-list:hover {
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
  border-bottom: 2px solid #1e90ff;
}
.cover2 {
  height: 100%;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.cover {
  height: 100%;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  // padding-top: 20px;
}
.el-aside {
  .el-input-group__append,
  .el-input-group__prepend {
    padding: 0 10px;
    button {
      padding: 10px;
      margin: -10px;
    }
  }
  .el-tree {
    background-color: rgb(255, 255, 255);
  }
  .el-tree-node__content {
    height: 32px;
  }
}
body > .el-dropdown-menu {
  margin-top: 0 !important;
}
.menu-form {
  .el-form-item__content {
    width: 600px;
  }
  // 开关文字描述样式
  .el-switch__label {
    position: absolute;
    display: none;
  }
  .el-switch__label.is-active {
    color: #fff;
  }
  /*打开时文字位置设置*/
  .el-switch__label--right {
    z-index: 1;
  }
  /*关闭时文字位置设置*/
  .el-switch__label--left {
    z-index: 1;
    left: 22px;
  }
  /*显示文字*/
  .el-switch__label.is-active {
    display: block;
  }
  .el-switch .el-switch__core,
  .el-switch .el-switch__label {
    width: 68px !important;
    height: 24px !important;
    line-height: 24px;
    border-radius: 24px;
  }
  .el-switch__core:after {
    top: 3px;
  }
  .cus-switch {
    .el-switch__core {
      width: 90px !important;
    }
  }
}
.previewItem {
  position: relative;
  .previewButton {
    position: absolute !important;
    bottom: 10px;
    left: 244px;
  }
}
</style>
