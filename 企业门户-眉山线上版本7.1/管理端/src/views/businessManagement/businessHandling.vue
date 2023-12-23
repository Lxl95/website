<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="业务标题" prop="title">
            <el-input
              v-model="params.title"
              clearable
              placeholder="请输入业务标题"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick"
              >查询</el-button
            >
            <el-button
              type="primary"
              plain
              icon="el-icon-refresh"
              @click="resetClick('params')"
              >重 置</el-button
            >
            <el-button
              type="success"
              icon="el-icon-circle-plus"
              @click="activityModuleAdd"
              >新增</el-button
            >
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
        :header-cell-style="{ background: '#F8F8F9', color: '#606266' }"
        :height="tableHeight"
      >
        <el-table-column type="index" align="center" label="序号" width="60" />
        <el-table-column
          align="left"
          prop="title"
          label="业务标题"
          width="200"
        />
        <el-table-column
          align="left"
          prop="summary"
          label="业务简介"
          width="120"
        />
        <el-table-column align="left" show-overflow-tooltip label="业务封面">
          <template slot-scope="scope">
            <!-- <el-image style="width: 100px; height: 100px;border-radius: 8px;" :src="imgBaseUrl + scope.row.coverpic"
              fit="cover" /> -->
            <vviewer
              :options="
                scope.row.coverpic ? [imgBaseUrl + scope.row.coverpic] : []
              "
              :imgStyle="'fill'"
              style="width: 100px; height: 100px;"
            ></vviewer>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          prop="urlpath"
          label="业务链接"
          show-overflow-tooltip
        >
          <template v-slot="scope">
            <el-link type="primary" target="_blank">{{
              scope.row.urlpath
            }}</el-link>
          </template>
        </el-table-column>
        <el-table-column
          label="排序"
          align="right"
          prop="sort"
        ></el-table-column>
        <el-table-column
          align="left"
          :formatter="dateFormatter"
          label="是否显示"
          width="200"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isshow"
              active-text="是"
              inactive-text="否"
              :active-value="1"
              :inactive-value="2"
              @change="isenable(scope.row.id, scope.row.isshow)"
            />
          </template>
        </el-table-column>
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
      width="60%"
      @close="close"
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="150px">
        <el-form-item label="业务标题" prop="title">
          <el-input
            v-model="form.title"
            maxlength="10"
            show-word-limit
            style="width: 300px;"
          />
        </el-form-item>

        <el-form-item label="业务封面" prop="coverpic">
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
              style="width:200px;height:100px;"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="业务摘要" prop="summary">
          <el-input
            v-model="form.summary"
            type="textarea"
            maxlength="200"
            show-word-limit
            style="width: 300px;"
          />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number
            v-model="form.sort"
            controls-position="right"
            :min="1"
          />
        </el-form-item>
        <el-form-item label="是否跳转URL链接" prop="isjump">
          <el-switch v-model="form.isjump" style="width:100px"> </el-switch>
        </el-form-item>
        <el-form-item v-if="form.isjump" label="跳转链接" prop="category">
          <el-input
            placeholder="请输入链接"
            v-model="form.urlpath"
            class="input-with-select"
            style="width: 300px;"
          >
          </el-input>
        </el-form-item>
        <el-form-item v-if="!form.isjump" label="业务内容">
          <tinymce
            ref="Tinymce"
            v-if="dialogVisible"
            v-model="form.content"
            :up-url="imgBaseUrl"
            :up-src="'/upload/imgUpload'"
            :height="200"
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
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { getToken } from "@/utils/auth";
import uploadUrl from "@/api/upload.js";
import {
  businessHandlingQueryBy,
  businessHandlingUpdate,
  businessHandlingDel,
  businessHandlingSave,
  businessHandlingisshow
} from "@/api/columnCategory.js";
import Tinymce from "@/components/Tinymce";
import { msgAutoClose, msgNoClose } from "@/utils/element";
import vviewer from "@/components/VViewer/vviewer";

export default {
  name: "activityModule",
  components: {
    Tinymce,
    vviewer
  },
  data() {
    return {
      typeData: [], //业务类型
      form: {
        id: "",
        title: "",
        coverpic: "",
        content: "",
        urlpath: "",
        isenable: 2,
        isjump: true,
        isshow: 1,
        summary: "",
        sort: 1
      },
      rules: {
        title: [{ required: true, trigger: "blur", message: "请输入业务标题" }],
        coverpic: [
          { required: true, trigger: "blur", message: "请上传业务封面" }
        ],
        typeid: [
          { required: true, trigger: "blur", message: "请选择业务类型" }
        ],
        summary: [
          { required: true, trigger: "blur", message: "请选择业务简介" }
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
        title: "",
        page: 1,
        size: 15
      },
      form: {},
      total: 0,
      listLoading: false
    };
  },
  mounted() {
    this.tableHeight =
      window.innerHeight -
      this.$refs.formBox.offsetHeight -
      92 -
      document.getElementsByClassName("fixed-header")[0].clientHeight;
    window.onresize = () => {
      return (() => {
        this.tableHeight =
          window.innerHeight -
          this.$refs.formBox.offsetHeight -
          92 -
          document.getElementsByClassName("fixed-header")[0].clientHeight;
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
      businessHandlingQueryBy(this.params)
        .then(res => {
          this.listLoading = false;
          if (res.success && res.data) {
            this.tableData = res.data.rows;
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
    dateFormatter(row, column) {
      if (row.time) {
        return parseTime(row.time);
      } else {
        return "";
      }
    },
    resetClick() {
      this.params.title = "";
      this.getList();
    },
    isenable(id, isshow) {
      var param = {
        id: id,
        isshow: isshow
      };
      businessHandlingisshow(param).then(res => {
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
          var option = this.form;
          option.isjump = option.isjump == false ? 2 : 1;
          if (this.form.id) {
            businessHandlingUpdate(option)
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
            businessHandlingSave(option)
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
      return true;
    },
    iconImgSuccess(res, file) {
      this.form.coverpic = res.data;
    },
    // 新增
    activityModuleAdd() {
      this.title = "新增业务";
      this.dialogVisible = true;
      this.form = {
        title: "",
        coverpic: "",
        content: "",
        urlpath: "",
        isjump: true,
        urlpath: "",
        typeid: "",
        isshow: 1,
        summary: "",
        sort: 1
      };
    },
    //编辑
    handleEdit(row) {
      this.title = "编辑业务";
      this.dialogVisible = true;
      this.form = {
        id: row.id,
        title: row.title,
        coverpic: row.coverpic,
        content: row.content,
        urlpath: row.urlpath,
        isjump: row.isjump == 1 ? true : false,
        urlpath: row.urlpath,
        typeid: row.typeid,
        isshow: row.isshow,
        summary: row.summary,
        sort: row.sort
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
      this.$confirm("此操作将永久删除该条业务内容, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        businessHandlingDel(id).then(res => {
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
.dialog-header {
  text-align: right;
}
.el-divider {
  margin: 15px 0;
}
/deep/.el-image img {
  border-radius: 8px !important;
}

/*打开时文字位置设置*/
/deep/ .el-switch__label--right {
  z-index: 1;
}
/* 调整打开时文字的显示位子 */
/deep/ .el-switch__label--right span {
  margin-right: 30px;
}
/*关闭时文字位置设置*/
/deep/ .el-switch__label--left {
  z-index: 1;
}
/* 调整关闭时文字的显示位子 */
/deep/ .el-switch__label--left span {
  margin-left: -30px;
}
/*显示文字*/
/deep/ .el-switch__label.is-active {
  display: block;
}
</style>
