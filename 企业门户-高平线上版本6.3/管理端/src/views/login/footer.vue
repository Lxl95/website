<template>
  <div class="wrapper">
    <div class="foot-top">
      <el-row>
        <el-col :span="6" class="footer-msg">
          <p class="foot-title">关于新水云</p>
          <p class="footer-msg-address">
            {{ form.aboutcloud ? form.aboutcloud : '新水云为供水行业打造基于SAAS云平台体系的智慧水务轻量级统一业务支撑平台。让水务企业更方便的联接客户,实现业务电子化、在线化,降低服务运营成本,提高客户满意度,优化营商环境。' }}
          </p>
        </el-col>
        <el-col :span="6" class="footer-msg foot-second">
          <p class="foot-title">产品服务</p>
          <ul>
            <li>新水云</li>
            <li>云产品</li>
            <li>水务小讲堂</li>
            <li>水务工具</li>
            <li>水务新闻</li>
            <li>水务文库</li>
            <li>项目案例</li>
            <li>联系我们</li>
          </ul>
        </el-col>
        <el-col :span="6" class="footer-msg foot-thired">
          <!-- <img src="@/assets/login_images/logo1.png"> -->
          <p class="foot-title">{{ form.companyname ? form.companyname : '新水云' }}</p>
          <p>地址： {{ form.companyaddress ? form.companyaddress : '郑州国家高新技术产业开发区红松路252号' }}</p>
          <p>邮编： {{ form.postalcode ? form.postalcode : '450001' }}</p>
          <p>邮箱：{{ form.mailbox ? form.mailbox : 'info@suntront.com' }}</p>
          <p v-for="(item,index) in tableData1" :key="index">
            <span v-if="index == 0"><label class="w-60">联系人：</label>{{ item.user }} {{ item.tel }}</span>
            <span v-else><label class="w-60" />{{ item.user }} {{ item.tel }}</span>
          </p>
          <!-- <img class="tel" src="@/assets/login_images/telephone.png"> -->
        </el-col>
        <el-col :span="6" class="footer-img">
          <p class="foot-title">关于我们</p>
          <img v-if="form.qrcodepicurl" :src="form.qrcodepicurl" class="erwei">
          <img v-else src="@/assets/login_images/erwei.png" class="erwei">
          <p class="foot-cont">新水云公众号二维码</p>
          <p class="foot-cont">(请扫一扫)</p>
        </el-col>
      </el-row>
    </div>
    <div class="foot-bottom">
      Copyright &copy; 2015 新天科技股份有限公司 All Rights Reserved 工商网监 豫ICP备20023212号-1
    </div>
  </div>
</template>

<script>
// import { getCompanyInfoById } from '@/api/cloudProducts.js'
export default {
  data() {
    return {
      form: {
        id: 1,
        aboutcloud: '',
        companyname: '',
        companyaddress: '',
        postalcode: '',
        mailbox: '',
        phone: '',
        qrcodepicurl: ''
      },
      tableData1: [{
        user: '',
        tel: ''
      }, {
        user: '',
        tel: ''
      }]
    }
  },
  mounted() {

  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      getCompanyInfoById(1).then(res => {
        this.form = res.data
        this.tableData1 = JSON.parse(res.data.phone)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  height: 100%;
  background: #272727;
  .foot-top {
    width: 1120px;
    margin: 0 auto;
    padding: 30px 0;
    height: calc(100% - 60px);
    .footer-msg {
      width: 240px;
      line-height: 32px;
      margin: 0 30px;
    }
    .foot-second {
      padding-left: 20px;
    }
    // .foot-thired {
    //   line-height: 26px;
    //   p {
    //     color: #9f9f9f;
    //   }
    //   .tel {
    //     margin-top: 20px;
    //   }
    // }
    .w-60 {
      display: inline-block;
      width: 60px;
    }
    .foot-title {
      font-size: 16px;
      color: #bdbdbd;
    }
    ul {
      margin: 0;
      color: #666;
      font-size: 14px;
      padding: 0 20px;
    }
    p {
      color: #666;
      font-size: 14px;
      margin: 0;
    }
    .footer-img {
      width: 170px;
      text-align: center;
      float: right;
      .foot-cont {
        color: #9f9f9f;
      }
    }
    .erwei {
      width: 160px;
      height: 160px;
      margin: 20px 0;
    }
  }
  .foot-bottom {
    background: #191D20;
    color: #fff;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
