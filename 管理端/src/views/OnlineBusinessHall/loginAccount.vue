<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="手机号" prop="mobileNumber">
            <el-input
              v-model="params.mobileNumber"
              clearable
              placeholder="请输入手机号"
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
          prop="mobileNumber"
          label="手机号"
          show-overflow-tooltip
        />
        <el-table-column
          align="left"
          show-overflow-tooltip
          label="头像"
          width="180"
        >
          <template slot-scope="scope">
            <vviewer
              :options="
                scope.row.userAvataPath
                  ? [imgBaseUrl + scope.row.userAvataPath]
                  : []
              "
              :imgStyle="'contain'"
              :borderRadius="'8px'"
              style="width: 140px; height: 70px;"
            ></vviewer>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          prop="userHobby"
          label="兴趣爱好"
          show-overflow-tooltip
        />
        <el-table-column
          align="left"
          show-overflow-tooltip
          prop="userAddress"
          label="地址"
          min-width="200"
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
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total"
        :page-size="params.size"
        :current-page="params.page"
        :page-sizes="[15, 20, 25, 30]"
        style="margin-top:20px;"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      /> -->
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
        <el-form-item label="手机号" prop="mobileNumber">
          <el-input
            v-model="form.mobileNumber"
            maxlength="30"
            show-word-limit
            style="width: 300px;"
            disabled
          />
        </el-form-item>

        <el-form-item label="头像" prop="coverpic">
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
              v-if="form.userAvataPath"
              :src="imgBaseUrl + form.userAvataPath"
              class="avatar"
              style="width:100px;height:100px;"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
          <span style="color:red">只能上传图片文件</span>
        </el-form-item>
        <el-form-item label="兴趣爱好" prop="userHobby">
          <el-input v-model="form.userHobby" type="textarea" :rows="2" />
        </el-form-item>
        <el-form-item label="地址" prop="userAddress">
          <el-input v-model="form.userAddress" type="textarea" :rows="2" />
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
  getuserInfoByMobleNumber,
  setuserInfoByMobleNumber
} from "@/api/OnlineBusinessHall.js";
import { msgAutoClose, msgNoClose } from "@/utils/element";
import vviewer from "@/components/VViewer/vviewer";
export default {
  name: "loginAccount",
  components: { vviewer },
  data() {
    return {
      form: {
        id: "",
        name: "",
        isShow: ""
      },
      rules: {
        mobileNumber: [{ required: true, trigger: "blur", message: "请输入" }]
      },
      loading: false,
      uploadUrl,
      imgBaseUrl: this.$store.getters.jsonInfo.imageUrl,
      title: "",
      dialogVisible: false,
      tableHeight: null,
      tableData: [],
      params: {
        mobileNumber: "",
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
      document.getElementsByClassName("fixed-header")[0].clientHeight +
      50;
    window.onresize = () => {
      return (() => {
        this.tableHeight =
          window.innerHeight -
          this.$refs.formBox.offsetHeight -
          92 -
          document.getElementsByClassName("fixed-header")[0].clientHeight +
          50;
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
      getuserInfoByMobleNumber({
        mobileNumber: this.params.mobileNumber
        // pageNum: this.params.page,
        // pageSize: this.params.size
      })
        .then(res => {
          this.listLoading = false;
          if (res.success && res.data) {
            this.tableData = res.data;
            this.$refs.myTable.doLayout();
            // this.total = res.data.total;
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
      this.params.mobileNumber = "";
      this.getList();
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          setuserInfoByMobleNumber(this.form)
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
      return isJPG && isLt3M;
    },
    iconImgSuccess(res, file) {
      this.form.userAvataPath = res.data;
    },
    //编辑
    handleEdit(row) {
      this.title = "编辑账户";
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
