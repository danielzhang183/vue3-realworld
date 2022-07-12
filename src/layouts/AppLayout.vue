<script lang="ts">
import { defineComponent } from 'vue'
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'

export default defineComponent({
  components: {
    AppSidebar,
    AppHeader,
  },
})
</script>

<template>
  <AppHeader />
  <AppSidebar />
  <!-- 子路由出口 -->
  <router-view />
</template>
