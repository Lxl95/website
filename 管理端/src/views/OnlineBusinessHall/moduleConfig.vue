<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="模块名称" prop="name">
            <el-input v-model="params.name" clearable placeholder="请输入模块名称"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick">查询</el-button >
            <el-button type="primary" plain icon="el-icon-refresh" @click="resetClick('params')">重 置</el-button >
            <el-button type="success" icon="el-icon-circle-plus" @click="SysMenuAdd">新增</el-button >
          </el-form-item>
        </el-form>
      </div>
      <el-table
        ref="myTable"
        v-loading="listLoading"
        element-loading-text="拼命加载中"
        stripe
        :data="tableData"
        border
        style="width: 100%"
        :height="tableHeight"
      >
        <el-table-column type="index" align="center" label="序号" width="80" />
        <el-table-column
          align="left"
          show-overflow-tooltip
          prop="name"
          label="模块名称"
          width="200"
        />
        <!-- <el-table-column
          align="left"
          show-overflow-tooltip
          label="模块封面"
          width="180"
        >
          <template slot-scope="scope">
            <vviewer
              :options="
                scope.row.coverpic ? [imgBaseUrl + scope.row.coverpic] : []
              "
              :imgStyle="'cover'"
              :borderRadius="'8px'"
              style="width: 140px; height: 70px;"
            ></vviewer>
          </template>
        </el-table-column> -->
        <el-table-column align="left" prop="menuUrl" label="模块路径" show-overflow-tooltip />
        <el-table-column
          align="left"
          label="是否展示"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isShow"
              active-text="是"
              inactive-text="否"
              active-value="1"
              inactive-value="2"
              @change="isenable(scope.row.id, scope.row.isShow)"
            />
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          show-overflow-tooltip
          prop="serial"
          label="排序"
          width="100"
        />
        <el-table-column label="操作" align="left" width="200">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit-outline"
              size="mini"
              type="primary"
              @click="handleEdit(scope.row)"
              >编辑
            </el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="handleDelete(scope.row.id)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total"
        :page-size="params.size"
        :current-page="params.page"
        :page-sizes="[15, 20, 25, 30]"
        style="margin-top:20px;"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </el-main>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="35%"
      @close="close"
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="模块名称" prop="name">
          <el-input
            v-model="form.name"
            maxlength="30"
            show-word-limit
            style="width: 300px;"
          />
        </el-form-item>

        <!-- <el-form-item label="模块封面" prop="coverpic">
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
              :src="imgBaseUrl + form.coverpic"
              class="avatar"
              style="width:200px;height:300px;"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
          <span style="color:red">只能上传图片文件，图片大小为200*300</span>
        </el-form-item> -->
        <el-form-item label="模块路径" prop="category">
          <el-input
            placeholder="请输入模块路径"
            v-model="form.menuUrl"
            class="input-with-select"
            style="width: 300px;"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
            <el-input-number
              v-model="form.serial"
              controls-position="right"
              :min="0"
            />
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button :loading="loading" type="primary" @click="onSubmit('form')">保 存</el-button >
      </span>
    </el-dialog>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { getToken } from "@/utils/auth";
import uploadUrl from "@/api/upload.js";
import {
  SysMenuList,
  insertSysMenu,
  updateSysMenu,
  delSysMenu
} from "@/api/OnlineBusinessHall.js";
import { msgAutoClose, msgNoClose } from "@/utils/element";
import vviewer from "@/components/VViewer/vviewer";
export default {
  name: "moduleConfig",
  components: { vviewer },
  data() {
    return {
      form: {
        id: "",
        name: "",
        isShow: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur", message: "请输入模块名称" }],
        menuUrl: [
          { required: true, trigger: "blur", message: "请输入模块路径" }
        ]
      },
      loading: false,
      uploadUrl,
      imgBaseUrl: this.$store.getters.jsonInfo.imageUrl,
      title: "",
      dialogVisible: false,
      tableHeight: null,
      tableData: [],
      params: {
        name: "",
        page: 1,
        size: 15
      },
      form: {},
      total: 0,
      listLoading: false
    };
  },
  mounted() {
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 92 - document.getElementsByClassName("fixed-header")[0].clientHeight;
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 92 - document.getElementsByClassName("fixed-header")[0].clientHeight;
      })();
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getToken,
    close() {
      this.$refs["form"].resetFields();
    },
    getList() {
      this.listLoading = true;
      SysMenuList({
        name: this.params.name,
        pageNum: this.params.page,
        pageSize: this.params.size
      })
        .then(res => {
          this.listLoading = false;
          if (res.success && res.data) {
            this.tableData = res.data.rows;
            this.$refs.myTable.doLayout();
            this.total = res.data.total;
          } else {
            this.total = 0;
            this.tableData = [];
          }
        })
        .catch(() => {
          this.listLoading = false;
        });
    },
    resetClick() {
      this.params.name = "";
      this.getList();
    },
    isenable(id, type) {
      var params = {
        id: id,
        isShow: type
      };
      updateSysMenu(params).then(res => {
        if (res.success) {
          this.getList();
          msgAutoClose({
            message: "设置成功！",
            type: "success"
          });
        } else {
          msgAutoClose({
            message: res.msg || "设置失败!",
            type: "error"
          });
        }
      });
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.form.id) {
            updateSysMenu(this.form)
              .then(res => {
                this.loading = false;
                if (res.success) {
                  msgAutoClose({
                    message: "保存成功!",
                    type: "success"
                  });
                } else {
                  msgAutoClose({
                    message: res.msg || "保存失败!",
                    type: "error"
                  });
                }
                this.dialogVisible = false;
                this.getList();
              })
              .catch(err => {
                console.log(err);
                this.loading = false;
              });
          } else {
            insertSysMenu(this.form)
              .then(res => {
                this.loading = false;
                if (res.success) {
                  msgAutoClose({
                    message: "保存成功!",
                    type: "success"
                  });
                } else {
                  msgAutoClose({
                    message: res.msg || "保存失败!",
                    type: "error"
                  });
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
    beforeUpload(file) {
      const fileName = file.name;
      const regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      const isJPG = regex.test(fileName.toLowerCase());
      const isLt3M = file.size / 1024 / 1024 < 3;
      if (!isJPG) {
        msgAutoClose({
          message: "请选择图片文件!",
          type: "warning"
        });
        return false;
      }
      if (!isLt3M) {
        msgAutoClose({
          message: "上传图片大小不能超过 3MB!",
          type: "warning"
        });
        return false;
      }
      const _this = this;
      const isSize = new Promise(function(resolve, reject) {
        const img = new Image();
        const _URL = window.URL || window.webkitURl;
        img.onload = function() {
          file.width = img.width; //图片宽度
          file.height = img.height; //图片高度
          const valid = img.width === 200 && img.height === 300; //上传图片尺寸判定
          valid ? resolve() : reject(new Error("error"));
        };
        img.src = _URL.createObjectURL(file);
      }).then(
        () => {
          return file;
        },
        () => {
          _this.$message.error("上传图片尺寸必须为200*300");
          return Promise.reject(new Error("error"));
        }
      );
      return isJPG && isLt3M && isSize;
    },
    iconImgSuccess(res, file) {
      this.form.coverpic = res.data;
    },
    // 新增
    SysMenuAdd() {
      this.title = "新增模块";
      this.dialogVisible = true;
      this.form = {
        name: "",
        menuUrl: "",
        serial: 1,
        isShow: "2"
      };
    },
    //编辑
    handleEdit(row) {
      this.title = "编辑模块";
      this.dialogVisible = true;
      this.form = {
        ...row
      };
    },
    handleCurrentChange(val) {
      this.params.page = val;
      this.getList();
    },
    handleSizeChange(val) {
      this.params.size = val;
      this.getList();
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除该模块内容, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delSysMenu({
          id: id
        }).then(res => {
          msgAutoClose({
            message: "删除成功！",
            type: "success"
          });
          this.getList();
        });
      });
    },
    searchClick() {
      this.getList();
    },
    reloadClick(formName) {
      this.$refs[formName].resetFields();
      this.getList();
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
  }
}
.dialog-header {
  text-align: right;
}
.el-divider {
  margin: 15px 0;
}
/deep/.el-image img {
  border-radius: 8px !important;
}
</style>
