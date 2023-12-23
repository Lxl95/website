<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true">
          <el-form-item>
            <el-button
              type="success"
              size="small"
              icon="el-icon-circle-plus"
              @click="addClick"
              >添加图片</el-button
            >
          </el-form-item>
        </el-form>
      </div>

      <el-table
        ref="loopImgTable"
        v-loading="listLoading"
        element-loading-text="拼命加载中"
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{ background: '#F8F8F9', color: '#606266' }"
        :height="tableHeight"
      >
        <el-table-column label="图片" align="left">
          <template slot-scope="scope">
            <el-image
              style="width: 140px; height: 70px"
              :src="baseUrl + scope.row.urlpath"
              fit="cover"
            />
          </template>
        </el-table-column>
        <el-table-column label="设为轮播图" align="left" width="300">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isshow"
              :active-value="1"
              :inactive-value="2"
              @change="switchChange(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="排序"
          align="right"
          prop="sort"
        ></el-table-column>
        <el-table-column label="操作" align="left" width="300">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit-outline"
              size="mini"
              type="primary"
              @click="handleEdit(scope.row)"
              >编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.row.id)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        width="35%"
        @close="close"
      >
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
          <el-form-item label="上传图片" prop="url">
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
                v-if="form.url"
                :src="baseUrl + form.url"
                class="avatar"
                style="width:200px;height:100px;"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
            <el-input-number
              v-model="form.sort"
              controls-position="right"
              :min="1"
            />
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button :loading="loading" type="primary" @click="onSubmit('form')"
            >保 存</el-button
          >
        </span>
      </el-dialog>
    </el-main>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { getToken } from "@/utils/auth";
import uploadUrl from "@/api/upload.js";
import {
  saveImg,
  getImgList,
  deleteImg,
  switchChange,
  updateLooppic
} from "@/api/cloudProducts.js";
export default {
  name: "LoopImg",
  data() {
    return {
      baseUrl: this.$store.getters.jsonInfo.imageUrl,
      uploadUrl,
      tableHeight: null,
      listLoading: false,
      loading: false, // 保存按钮loading
      tableData: [],
      dialogVisible: false,
      title: "",
      type: "add",
      form: { url: "", sort: "" },
      rules: {
        url: [{ required: true, message: "请上传图片", trigger: "change" }]
      }
    };
  },
  computed: {},
  mounted() {
    console.log(this.$store.state.app.baseUrl);
    this.tableHeight =
      window.innerHeight -
      this.$refs.formBox.offsetHeight -
      document.getElementsByClassName("fixed-header")[0].clientHeight -
      40;
    window.onresize = () => {
      return (() => {
        this.tableHeight =
          window.innerHeight -
          this.$refs.formBox.offsetHeight -
          document.getElementsByClassName("fixed-header")[0].clientHeight -
          40;
      })();
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getToken,
    getList() {
      getImgList().then(res => {
        this.tableData = res.data;
      });
    },
    // 添加轮播图片
    addClick() {
      this.dialogVisible = true;
      this.title = "添加图片";
      this.type = "add";
      this.form = {
        url: "",
        sort: 1
      };
    },
    // 编辑轮播图片
    handleEdit(row) {
      this.dialogVisible = true;
      this.title = "修改图片";
      this.type = "edit";

      this.form = { ...row };
      this.form.url = row.urlpath;
    },
    // 删除轮播图片
    handleDelete(id) {
      this.$confirm("此操作将永久删除该条轮播图, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        deleteImg(id).then(res => {
          this.$message.success("删除成功！");
          this.getList();
        });
      });
    },
    close() {
      this.$refs["form"].resetFields();
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
      const _this = this;
      const isSize = new Promise(function(resolve, reject) {
        const img = new Image();
        const _URL = window.URL || window.webkitURl;
        img.onload = function() {
          file.width = img.width; //图片宽度
          file.height = img.height; //图片高度
          const valid = img.width === 1920 && img.height === 600; //上传图片尺寸判定
          valid ? resolve() : reject(new Error("error"));
        };
        img.src = _URL.createObjectURL(file);
      }).then(
        () => {
          return file;
        },
        () => {
          _this.$message.error("上传图片尺寸必须为1920*600");
          return Promise.reject(new Error("error"));
        }
      );
      return isJPG && isLt3M && isSize;
    },
    iconImgSuccess(res, file) {
      this.form.url = res.data;
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          this.form.urlpath = this.form.url;
          if (this.type == "add") {
            saveImg(this.form)
              .then(res => {
                this.loading = false;
                if (res.success) {
                  this.$message.success("保存成功！");
                } else {
                  this.$message.error(res.msg || "保存失败！");
                }
                this.dialogVisible = false;
                this.getList();
              })
              .catch(err => {
                console.log(err);
                this.loading = false;
              });
          } else {
            updateLooppic(this.form)
              .then(res => {
                this.loading = false;
                if (res.success) {
                  this.$message.success("保存成功！");
                } else {
                  this.$message.error(res.msg || "保存失败！");
                }
                this.dialogVisible = false;
                this.getList();
              })
              .catch(err => {
                console.log(err);
                this.loading = false;
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    switchChange(row) {
      console.log(row.isshow);
      // var arr = {};
      // var arr = row;
      // arr.isshow = arr.isshow * 1

      switchChange(row).then(res => {
        if (res.success) {
          this.$message.success("设置成功！");
        } else {
          this.$message.error(res.message || "设置失败！");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  padding: 20px;
  .el-main {
    height: 100%;
    padding: 0;
    .btn-box {
      margin-bottom: 20px;
    }
  }
}
</style>
