/*
 * @Author: your name
 * @Date: 2019-11-21 08:51:28
 * @LastEditTime: 2020-06-30 13:13:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\微信公众号管理平台\wx-admin\src\views\member-manager\mixin.js
 */
import { mapGetters } from 'vuex'
import { updateUser } from '@/api/user'
export default {
  data() {
    return {
      authDialog: false,
      authForm: {},
      defaultProps: {
        label: function(data, node) {
          return data.meta.title
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'treeData'
    ])
  },
  mounted() {

  },
  methods: {
    authSubmit() {
      this.authBtnLoading = true
      this.authForm.permissionstring = JSON.stringify(this.$refs.tree.getCheckedKeys())
      updateUser(this.authForm).then(res => {
        this.getUserList()
        this.$message({
          message: '操作成功！',
          type: 'success'
        })
        this.authBtnLoading = false
        this.authDialog = false
      })
    },
    handleAuth(row) {
      this.authDialog = true
      this.authForm = { ...row }
      let arr
      if (row.permissionstring) {
        arr = JSON.parse(row.permissionstring)
      } else {
        arr = []
      }
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(arr)
      })
    }
  }
}
