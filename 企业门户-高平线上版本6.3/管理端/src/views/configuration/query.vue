<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox">
        <el-form ref="params" :inline="true" :model="params" size="small">
          <el-form-item label="二维码序号" prop="meternumber">
            <el-input v-model="params.qrcodenum" clearable placeholder="请输入二维码序号" />
          </el-form-item>
          <el-form-item label="表号" prop="meternumber">
            <el-input v-model="params.meternumber" clearable placeholder="请输入表号" />
          </el-form-item>
          <el-form-item label="表型号" prop="metermodel">
            <el-input v-model="params.metermodel" clearable placeholder="请输入表型号" />
          </el-form-item>
          <el-form-item label="生产日期" prop="year">
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              style="width:200px"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            />
          </el-form-item>
          <el-form-item label="派发状态" prop="title">
            <el-select v-model="params.isreddistribute" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                style="width:260px"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchClick">查 询</el-button>
            <el-button
              plain
              type="primary"
              icon="el-icon-refresh"
              @click="reloadClick('params')"
            >重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        ref="goodsDetailTable"
        v-loading="listLoading"
        element-loading-text="拼命加载中"
        stripe
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{background:'#F8F8F9',color:'#606266'}"
        :height="tableHeight"
      >
        <el-table-column fixed="left" type="index" align="center" label="序号" width="60" />
        <el-table-column align="center" prop="qrcodenum" label="二维码序号" show-overflow-tooltip />
        <el-table-column align="center" prop="meternumber" label="表号" show-overflow-tooltip />
        <el-table-column align="center" prop="metermodel" label="表型号" show-overflow-tooltip />
        <!-- <el-table-column align="center" prop="metermodel" label="表具单位" show-overflow-tooltip /> -->
        <el-table-column align="center" label="红包派发">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.isreddistribute == '1'" type="success">派发</el-tag>
            <el-tag v-if="scope.row.isreddistribute == '2'" type="danger">未派发</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="uploadtime" label="绑定日期" show-overflow-tooltip />

        <!-- <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            <el-button type="success" size="mini" @click="through(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>-->
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
      <el-dialog :title="lookForm.title" :visible.sync="dialogVisible" width="50%" center>
        <el-form ref="addForm" label-width="120px" :rules="dialogFormRules">
          <el-form-item label="表号" prop="meternumber">
            <el-input v-model="lookForm.meternumber" autocomplete="off" style="width:20vw" />
          </el-form-item>
          <el-form-item label="表型号" prop="metermodel">
            <el-input v-model="lookForm.metermodel" autocomplete="off" style="width:20vw" />
          </el-form-item>
          <el-form-item label="绑定日期">
            <el-date-picker
              v-model="lookForm.producetime"
              align="right"
              type="date"
              style="width:20vw"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit()">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { parseTime } from '@/utils/index'
import { findMeteDataByCondition, deleteById, update } from '@/api/information'
export default {
  name: 'ToauditList',
  data() {
    return {
      options: [
        {
          value: '1',
          label: '已派发'
        },
        {
          value: '2',
          label: '未派发'
        }
      ],
      activeName: 'first',
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: '',
      value2: [],
      tableHeight: null,
      dialogVisible: false,
      lookForm: {},
      tableData: [
        {
          contact: '张三',
          phone: '128256215',
          tableNo: 'ASDSASADADASD',
          weChatID: 'wadasd_1',
          nickname: 'N',
          portrait:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599199760712&di=cf9a7f8b8f81b9d3ac4db40810835689&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          applicationTime: '2020-9-4'
        }
      ],
      params: {
        meternumber: '',
        metermodel: '',
        begintime: '',
        endtime: '',
        qrcodenum: '',
        page: 1,
        size: 15,
        isreddistribute: ''
      },
      total: 0,
      listLoading: false,
      addForm: [],
      dialogFormRules: {
        meternumber: [
          { required: true, trigger: 'blur', message: '请输入表号' }
        ],
        metermodel: [
          { required: true, trigger: 'blur', message: '请输入表型号' }
        ]
      }
    }
  },
  watch: {
    'params.date': function(val, oldVal) {
      if (val) {
        this.params.beginDate = val[0]
        this.params.endDate = val[1]
      } else {
        this.params.beginDate = ''
        this.params.endDate = ''
      }
    }
  },
  mounted() {
    this.tableHeight =
      window.innerHeight - this.$refs.formBox.offsetHeight - 200
    window.onresize = () => {
      return (() => {
        this.tableHeight =
          window.innerHeight - this.$refs.formBox.offsetHeight - 200
      })()
    }
  },
  created() {
    this.findMeteDataByCondition()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    findMeteDataByCondition() {
      this.listLoading = true
      this.params.begintime = this.value2[0]
      this.params.endtime = this.value2[1]
      findMeteDataByCondition(this.params)
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
    dateFormatter(row, column) {
      if (row.time) {
        return parseTime(row.time)
      } else {
        return ''
      }
    },
    handleLook(row) {
      this.lookForm = { ...row }
      this.dialogVisible = true
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.findMeteDataByCondition()
    },
    handleSizeChange(val) {
      this.params.size = val
      this.findMeteDataByCondition()
    },
    through(row) {
      this.lookForm = { ...row }
      this.dialogVisible = true
    },
    notTthrough(id) {
      this.$prompt('请输入未通过原因', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '未通过原因是: ' + value
          })
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '取消输入'
          // });
        })
    },
    submit() {
      if (!this.lookForm.meternumber) {
        return false
      }
      if (!this.lookForm.metermodel) {
        return false
      }
      update(this.lookForm).then((res) => {
        this.$message.success('修改成功！')
        this.dialogVisible = false
        this.findMeteDataByCondition()
      })
    },
    handleDelete(id) {
      this.$confirm('此操作将永久删除该条表具信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteById(id).then((res) => {
          this.$message.success('删除成功！')
          this.findMeteDataByCondition()
        })
      })
    },
    searchClick() {
      this.page = 1
      this.findMeteDataByCondition()
    },
    reloadClick(formName) {
      this.value2 = []
      this.params.qrcodenum = ''
      this.params.isreddistribute = ''
      this.$refs[formName].resetFields()
      this.findMeteDataByCondition()
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-header {
  text-align: right;
}
.el-divider {
  margin: 15px 0;
}
.item-block {
  height: 38px;
  line-height: 37px;
  border-top: 1px solid #e2e2e2;
  font-size: 14px;
  .item-lable {
    text-align: center;
    background: #f4f7fc;
    border-left: 1px solid #e2e2e2;
    color: #969696;
    padding: 0;
  }
  .item-lable_image {
    line-height: 130px !important;
  }
  .item-value {
    text-align: center;
    border-left: 1px solid #e2e2e2;
    padding: 0 15px;
    color: #353535;
    overflow: hidden;
    span {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
    }
  }
}

.item-value:nth-child(1n) {
  border-right: 1px solid #e2e2e2;
}
.item-block:nth-child(2n) {
  border-right: 1px solid #e2e2e2;
}
.item-block:nth-last-child(2) {
  line-height: 36px;
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
}
.item-block:nth-last-child(1) {
  line-height: 36px;
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
}
/deep/.el-form-item--small .el-form-item__label {
  min-width: 90px !important;
}
</style>
<style lang="scss">
/deep/.el-form-item--small .el-form-item__label {
  min-width: 90px !important;
}
</style>
