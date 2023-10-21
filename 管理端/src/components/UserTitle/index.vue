<template>

  <div>
    <span style="font-size:16px;font-weight:700;">
      【{{ name }}】【{{ user_no }}】管理员欢迎您！
    </span>
  </div>

</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      // name:''
    }
  },
  computed: {
    ...mapGetters([
      'user_no',
      'name'
    ])
  },
  created() {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
