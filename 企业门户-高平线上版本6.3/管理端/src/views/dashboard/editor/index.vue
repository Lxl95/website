<template>
  <div class="dashboard-editor-container">
    <!-- <p>
      <span>{{ name }}</span>欢迎使用新水云！
    </p>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardEditor',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['name', 'avatar'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  height: 100%;
  background: url("../../../assets/index.jpg") no-repeat;
  background-size: 100% 100%;
  padding: 50px 60px 0px;
  p {
    font-size: 22px;
    color: #fff;
    span {
      font-size: 20px;
      color: #3e9bf2;
      margin-right: 10px;
    }
  }
}
</style>
