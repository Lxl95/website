<template>
  <!--视图容器-->
  <el-container>
    <el-aside width="280px" style="padding: 10px;">
      <el-input
        v-model="filterText"
        prefix-icon="el-icon-search"
        placeholder="请输入内容"
      >
        <el-button
          slot="append"
          type="primary"
          :icon="prepIcon"
          @click="prepClick"
        >
          新增</el-button
        >
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
        <span slot-scope="{ node, data }" class="custom-tree-node">
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
            <span v-if="data.name.length > 8" :title="data.name">{{
              data.name.slice(0, 13) + "..."
            }}</span>
            <span v-else>{{ data.name }}</span>
          </span>
          <span class="handle-tool">
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-more" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-if="data.pid == 0"
                  @click.native="handleAdd(data)"
                >
                  <i class="el-icon-circle-plus-outline" />添加
                </el-dropdown-item>
                <el-dropdown-item @click.native="handleDelete(data)">
                  <i class="el-icon-delete" />删除
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </span>
      </el-tree>
    </el-aside>
    <el-main v-loading="loading" style="margin-left:10px">
      <el-tabs type="border-card" style="height:100%">
        <el-tab-pane label="基本信息">
          <el-form
            ref="refForm"
            style="text-align: center;margin-top: 110px;"
            :inline="true"
            :model="form"
            :rules="rules"
            label-width="150px"
            class="menu-form"
          >
            <el-form-item label="上级类别名称" prop="sjname">
              <el-input v-model="sjname" disabled style="width: 300px;" />
            </el-form-item>
            <br />
            <el-form-item label="类别名称" prop="name">
              <el-input v-model="form.name" style="width: 300px;" />
            </el-form-item>
            <br v-if="isbottomstate2" />
            <el-form-item
              v-if="isbottomstate2"
              label="是否显示首页底部"
              prop="bottomstate"
            >
              <el-switch v-model="bottomstate" style="width:100px"> </el-switch>
            </el-form-item>
            <br v-if="!isbottomstate2" />
            <el-form-item
              v-if="!isbottomstate2"
              label="是否是公告类型"
              prop="isnotice"
            >
              <el-switch v-model="isnotice" style="width:100px"> </el-switch>
            </el-form-item>
            <br />
            <el-form-item label="页面是否展示" prop="isshow">
              <el-switch v-model="form.isshow" style="width:100px"> </el-switch>
            </el-form-item>
            <br />
            <el-form-item label="是否跳转URL链接" prop="isjump">
              <el-switch v-model="form.isjump" style="width:100px"> </el-switch>
            </el-form-item>
            <br />
            <el-form-item v-if="isUrl" label="URL链接" prop="urlpath">
              <el-input v-model="form.urlpath" style="width: 300px;" />
            </el-form-item>
            <br v-if="isUrl" />
            <el-form-item v-if="!isUrl" label="展示效果" prop="istabulation">
              <el-radio-group v-model="form.istabulation">
                <el-radio :label="1">列表模式</el-radio>
                <el-radio :label="2">详情页模式</el-radio>
              </el-radio-group>
            </el-form-item>
            <br v-if="!isUrl" />
            <el-form-item label="排序编号" prop="sort">
              <el-input-number
                v-model="form.sort"
                controls-position="right"
                :min="1"
                :max="99"
              />
            </el-form-item>
            <br />
            <div class="form-btn">
              <el-button type="primary" @click="submit('refForm')"
                >保 存</el-button
              >
              <el-button @click="resetForm('refForm')">重 置</el-button>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import {
  columnCategorySave,
  columnCategoryDel,
  columnCategoryUpdate,
  columnCategoryQueryList
} from "@/api/columnCategory";
import Tinymce from "@/components/Tinymce";
export default {
  name: "RecordFile",
  components: {
    Tinymce
  },
  data() {
    return {
      rules: {
        name: [{ required: true, trigger: "blur", message: "请输入类别名称" }]
      },
      isbottomstate2: true,
      radio: 1,
      value: true,
      activeMenu: "",
      baseUrl: "",
      midremark: "",
      recordType: [],
      filterText: "",
      loading: false,
      sjname: "无",
      pid: "",
      bottomstate: false,
      isnotice: false,
      form: {
        isjump: false,
        isshow: false,
        name: "",
        urlpath: "",
        sort: "",
        pid: "",
        istabulation: 1,
        id: ""
      },
      prodOptions: [],
      isExpand: false, // 是否展开树节点
      options: [
        {
          id: 0,
          meta: {
            title: "无上级目录"
          }
        }
      ],
      defaultProps: {
        // value: "id", // ID字段名
        label: "name",
        children: "child" // 子级字段名
      },
      treeLoading: false, // 菜单树loading
      data: [],
      isUrl: false
    };
  },
  computed: {
    prepIcon() {
      return "el-icon-plus";
    }
  },
  watch: {
    filterText(val) {
      this.$refs.menuTable.filter(val);
    },
    "form.isjump"(val) {
      console.log(val);
      if (val == false) {
        this.isUrl = false;
      } else {
        this.isUrl = true;
      }
    }
  },
  mounted() {
    this.columnCategoryQueryList();
  },

  created() {},
  methods: {
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
    handleCurrentChange(val) {
      this.params.page = val;
    },
    handleSizeChange(val) {
      this.params.size = val;
    },
    getColumn() {
      var data = {
        success: true,
        code: 10000,
        message: "操作成功！",
        data: [
          {
            typeid: 11,
            typename: "新闻资讯",
            createtime: "2021-03-04 16:42:36",
            filestate: 2,
            pid: 0,
            filerecordtypeid: 2,
            sort: 1,
            child: [
              {
                typeid: 26,
                typename: "公司新闻",
                createtime: "2021-03-04 17:23:46",
                filestate: 1,
                pid: 11,
                filerecordtypeid: 2,
                sort: 1,
                child: null
              },
              {
                typeid: 13,
                typename: "行业动态",
                createtime: "2021-03-04 16:58:17",
                filestate: 1,
                pid: 11,
                filerecordtypeid: 2,
                sort: 1,
                child: null
              },
              {
                typeid: 14,
                typename: "信息公告",
                createtime: "2021-03-04 16:58:38",
                filestate: 1,
                pid: 11,
                filerecordtypeid: 2,
                sort: 2,
                child: null
              },
              {
                typeid: 24,
                typename: " 供水信息",
                createtime: "2021-03-04 17:23:20",
                filestate: 1,
                pid: 11,
                filerecordtypeid: 2,
                sort: 3,
                child: null
              }
            ]
          }
        ]
      };
      this.data = data.data;
    },
    // 树节点选中事件
    handleNodeClick(v, e) {
      this.loading = true;
      console.log(e.parent.data.name);
      if (e.parent.data.name) {
        this.sjname = e.parent.data.name;
      } else {
        this.sjname = "无";
      }

      console.log(this.sjname);
      this.form = {
        isjump: v.isjump == 1 ? true : false,
        isshow: v.isshow == 1 ? true : false,
        name: v.name,
        urlpath: v.urlpath,
        sort: v.sort,
        pid: v.pid,
        istabulation: v.istabulation,
        id: v.id
      };
      if (v.pid == 0) {
        this.bottomstate = v.bottomstate == 1 ? true : false;
        this.isbottomstate2 = true;

        console.log(this.bottomstate);
      } else {
        this.isnotice = v.isnotice == 1 ? true : false;
        this.isbottomstate2 = false;
      }
      if (v.isjump == 1) {
        this.isUrl = true;
      } else {
        this.isUrl = false;
      }
      console.log(v.istabulation);
      this.loading = false;
    },
    // 添加下级菜单
    handleAdd(data) {
      this.loading = true;
      console.log(data);
      this.isbottomstate2 = false;
      setTimeout(() => {
        this.sjname = data.name;
        this.form = {
          isjump: false,
          isshow: false,
          name: "",
          urlpath: "",
          sort: 1,
          pid: data.id,
          istabulation: 1,
          id: null
        };
        this.loading = false;
      }, 500);
    },
    // 根据文件资料类型id查询详情接口
    findByIdfileDataType(typeid) {
      API.findByIdfileDataType({ typeid: typeid }).then(res => {
        this.loading = false;
        if (res.data) {
          this.form.filestate = res.data.filestate;
          this.form.typename = res.data.typename;
          this.form.pid = res.data.pid;

          this.form.sort = res.data.sort;
          this.form.typeid = res.data.typeid;
          this.form.filerecordtypeid = res.data.filerecordtypeid;
        }
      });
    },
    radioChange() {},
    // 删除目录
    handleDelete(data) {
      this.$confirm("此操作将删除该栏目类别, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        var id = data.id;
        columnCategoryDel({ id }).then(res => {
          if (res.success) {
            this.$message.success("删除成功！");
            this.columnCategoryQueryList();
            this.resetForm();
          }
        });
      });
    },
    // 树节点过滤
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    prepClick() {
      this.resetForm();
    },
    // 菜单收缩/展开
    switchExpand(arr, isExpand) {
      arr.forEach((item, index) => {
        console.log(this.$refs.menuTable.store.nodesMap[item.typeid]);
        this.$refs.menuTable.store.nodesMap[item.typeid].expanded = isExpand;
        if (item.child) {
          this.switchExpand(item.child, isExpand);
        }
      });
    },
    // 表单提交
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.form.id) {
            var obj = this.form;
            obj.isshow = obj.isshow == false ? 2 : 1;
            obj.isjump = obj.isjump == false ? 2 : 1;
            if (obj.pid == 0) {
              obj.bottomstate = this.bottomstate == false ? 2 : 1;
            } else {
              obj.isnotice = this.isnotice == false ? 2 : 1;
            }
            columnCategoryUpdate(obj).then(res => {
              this.$message({
                message: "编辑成功",
                type: "success",
                duration: 1000
              });
              this.loading = false;
              this.columnCategoryQueryList();
              this.resetForm();
            });
          } else {
            console.log(this.form);
            var obj = this.form;
            obj.isshow = obj.isshow == false ? 2 : 1;
            obj.isjump = obj.isjump == false ? 2 : 1;
            if (obj.pid == 0) {
              obj.bottomstate = this.bottomstate == false ? 2 : 1;
            } else {
              obj.isnotice = this.isnotice == false ? 2 : 1;
            }
            columnCategorySave(obj).then(res => {
              if (res.success) {
                this.$message({
                  message: "创建成功",
                  type: "success",
                  duration: 1000
                });
                this.loading = false;
                this.columnCategoryQueryList();
                this.resetForm();
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      var _self = this;
      _self.sjname = "无";
      _self.form.id = "";
      _self.form.pid = "";
      _self.isbottomstate2 = true;
      _self.$refs.refForm.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-aside {
  background-color: rgb(255, 255, 255);
  height: 100%;
  padding: 0;
  // border: 1px solid #eee;
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
      background-color: #e8f4ff;
      border-right: 3px solid #1890ff;
    }
  }
  .el-tree {
    height: calc(100% - 40px);
    overflow-y: auto;
  }
}
.el-main {
  padding: 0;
  // border: 1px solid #eee;
  .el-form {
    .form-btn {
      padding-left: 0;
      padding-right: 300px;
    }
  }
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
</style>
<style lang="scss">
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
    background-color: rgb(250, 250, 250);
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
    text-align: left;
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
    width: 40x !important;
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
</style>
