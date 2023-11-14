<template>
  <!--视图容器-->
  <el-container>
    <!--主要引用页面-->
    <el-main>
      <div ref="formBox" class="formBox">
        <el-form ref="params" :inline="true" :model="params">
          <el-form-item label="操作人:" prop="operName">
            <el-input v-model="params.operName" clearable placeholder="请输入手机号" />
          </el-form-item>
          <!-- <el-form-item label="操作时间:" prop="date">
            <el-date-picker
              v-model="params.date"
              :clearable="false"
              type="daterange"
              value-format="yyyy-MM-dd"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item> -->
          <el-form-item prop="">
            <el-button type="primary" icon="el-icon-search" @click="searchClick()">查询</el-button>
            <el-button type="primary" icon="el-icon-refresh" plain @click="resetClick('params')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        id="printTable"
        v-loading="listLoading"
        element-loading-text="拼命加载中"
        :data="tableData"
        border
        stripe
        style="width: 100%"
        :height="tableHeight"
      >
        <el-table-column label="序号" align="center" width="80">
          <template slot-scope="scope"><span>{{ scope.$index+(params.currentPage - 1) * params.pageSize + 1 }} </span></template>
        </el-table-column>
        <el-table-column prop="operName" label="操作人" width="200" show-overflow-tooltip />
        <el-table-column prop="title" label="操作内容" show-overflow-tooltip />
        <el-table-column prop="operTime" label="操作时间" width="200" show-overflow-tooltip />
        <el-table-column prop="operIp" label="操作人IP" width="160" />
        <el-table-column prop="jsonResult" label="操作结果" show-overflow-tooltip>
          <template v-slot="scope">
            <el-tag v-if="scope.row.jsonResult && JSON.parse(scope.row.jsonResult).code == 10000" type="success">{{JSON.parse(scope.row.jsonResult).message}}</el-tag>
            <el-tag v-else type="danger">{{ scope.row.jsonResult ? JSON.parse(scope.row.jsonResult).message : ''}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="params.records"
        :page-size="params.pageSize"
        :current-page="params.currentPage"
        :page-sizes="[15, 30, 50, 100]"
        style="margin-top:20px;"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </el-main>
    <!--主要引用页面结束-->
  </el-container>
  <!--内容结束-->
</template>
<script>
import { operLogList } from "@/api/OnlineBusinessHall";
export default {
  name: "loginLog",
  components: {
  },
  data() {
    return {
      listLoading: false,
      tableData: [],
      tableHeight: null,
      params: {
        operName: "",
        date: ["", ""],
        currentPage: 1,
        pageSize: 15,
        record: 0
      }
    };
  },
  watch: {
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
    this.getStartData();
  },
  methods: {
    // 列表数据
    getStartData() {
      var param = {
        operName: this.params.operName,
        pageNum: this.params.currentPage,
        pageSize: this.params.pageSize
      };
      operLogList(param).then(res => {
        if (res.code === 10000) {
          this.tableData = res.data.rows;
          this.params.records = res.data.total;
        } else {
          this.$message({
            message: res.info,
            center: true,
            type: "error"
          });
        }
        this.listLoading = false;
      });
    },
    // 查询
    searchClick() {
      this.params.currentPage = 1;
      this.getStartData();
    },
    // 重置
    resetClick(formName) {
      this.$refs[formName].resetFields();
      this.getStartData();
    },
    handleCurrentChange(val) {
      this.params.currentPage = val;
      this.getStartData();
    },
    handleSizeChange(val) {
      this.params.pageSize = val;
      this.getStartData();
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
