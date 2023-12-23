<template>
  <el-container>
    <el-main>
      <div ref="formBox">
        <el-form ref="params" :inline="true" size="small">
          <el-form-item>
            <!-- <el-button type="primary" icon="el-icon-search" @click="searchClick">查 询</el-button>
            <el-button type="primary" plain icon="el-icon-refresh" @click="reloadClick('params')">重 置</el-button> -->
            <el-button type="primary" @click="addMember">新 增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        ref="userTable"
        v-loading="listLoading"
        element-loading-text="拼命加载中"
        :data="tableData"
        border
        stripe
        :header-cell-style="{background:'#F8F8F9',color:'#606266'}"
        style="width: 100%"
        :height="tableHeight"
      >
        <el-table-column
          prop="username"
          label="用户名"
          align="center"
        />
        <el-table-column
          prop="linkman"
          label="联系人"
          align="center"
        />
        <el-table-column
          prop="mobile"
          label="手机号"
          align="center"
        />
        <el-table-column label="操作" align="center" width="300">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="warning"
              @click="handleAuth(scope.row)"
            >权限</el-button>
            <el-button
              size="mini"
              type="success"
              @click="handleEdit(scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total"
        :page-size="params.size"
        :current-page="params.page"
        :page-sizes="[10, 15, 20]"
        style="margin-top:20px;"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </el-main>
    <!-- 添加对话框 -->
    <el-dialog title="会员信息" :close-on-click-modal="false" :visible.sync="addFormDialog" width="35%" @close="dialogClose">
      <el-form ref="addForm" :model="addForm" :rules="rules" label-width="120px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username" placeholder="请输入用户名" autocomplete="off" />
        </el-form-item>
        <el-form-item label="初始密码" prop="password">
          <el-input v-model="addForm.password" type="password" placeholder="请输入初始密码" autocomplete="off" />
        </el-form-item>
        <el-form-item label="联系人" prop="linkman">
          <el-input v-model="addForm.linkman" placeholder="请输入联系人" />
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="addForm.mobile" placeholder="请输入联系电话" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormDialog = false">取 消</el-button>
        <el-button type="primary" @click="submit('addForm')">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 权限对话框 -->
    <el-dialog title="权限配置" :close-on-click-modal="false" :visible.sync="authDialog" width="35%">
      <el-tree
        ref="tree"
        :data="treeData"
        show-checkbox
        default-expand-all
        node-key="id"
        highlight-current
        :props="defaultProps"
      />
      <div slot="footer" class="dialog-footer">
        <el-button @click="authDialog = false">取 消</el-button>
        <el-button type="primary" :loading="authBtnLoading" @click="authSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import treeMixin from './mixin'
import { saveUser, updateUser, getUserList } from '@/api/user'
export default {
  name: 'User',
  mixins: [treeMixin],
  data() {
    var checkPhone = (rule, value, callback) => {
      const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的手机号'))
      }
    }
    return {
      listLoading: false,
      tableHeight: null,
      tableData: [],
      addFormDialog: false,
      authBtnLoading: false,
      params: {
        page: 1,
        size: 15
      },
      total: 0,
      active: 'add',
      addForm: {
        username: '',
        password: '',
        linkman: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入初始密码', trigger: 'blur' }
        ],
        linkman: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {

  },
  mounted() {
    this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 200
    window.onresize = () => {
      return (() => {
        this.tableHeight = window.innerHeight - this.$refs.formBox.offsetHeight - 200
      })()
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    handleEdit(row) {
      this.addFormDialog = true
      this.addForm = { ...row }
      this.active = 'edit'
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.memberManage.deleteUser(row.id).then(res => {
          this.getUserList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(err => {
          console.log(err)
          this.$message.error('删除失败！')
        })
      })
    },
    dialogClose() {
      this.$refs['addForm'].resetFields()
    },
    addMember() {
      this.addFormDialog = true
      this.addForm = {
        username: '',
        password: '',
        linkman: '',
        mobile: ''
      }
      this.active = 'add'
    },
    getUserList() {
      this.listLoading = true
      getUserList(this.params).then((res) => {
        this.tableData = res.data.rows
        this.total = res.data.total
        this.listLoading = false
        this.$nextTick(() => {
          this.$refs.userTable.doLayout()
        })
      }).catch(err => {
        console.log(err)
        this.listLoading = false
      })
    },
    handleCurrentChange(val) {
      this.prams.page = val
    },
    handleSizeChange(val) {
      this.prams.size = val
    },
    // 添加会员
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.active === 'add') {
            saveUser(this.addForm).then(res => {
              if (!res.success) {
                this.$message.error(res.message)
              } else {
                this.getUserList()
                this.$message({
                  message: '添加成功！',
                  type: 'success'
                })
                this.addFormDialog = false
              }
            })
          } else {
            updateUser(this.addForm).then(res => {
              if (!res.success) {
                this.$message.error(res.message)
              } else {
                this.getUserList()
                this.$message({
                  message: '修改成功！',
                  type: 'success'
                })
                this.addFormDialog = false
              }
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  .el-header {
    line-height: 60px;
    span {
      float: right;
      margin-right: 100px;
    }
  }
  .el-divider--horizontal {
    margin: 0 auto;
  }
}
</style>
