<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

import { msgAutoClose, msgNoClose } from "@/utils/element";
export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data () {
    return {
      currentRole: 'editorDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created () {
    // if (!this.roles.includes('admin')) {
    // this.currentRole = 'adminDashboard'
    // } else {
    //   this.currentRole = 'editorDashboard'
    // }
  }
}
</script>
<style lang="scss" scoped>
.dashboard-container {
  height: 100%;
}
</style>
