<template>
  <VueSidebarMenuAkahon :menu-items="menuItems" />
</template>

<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

export default {
  name: 'component.vue',
  components: {VueSidebarMenuAkahon},
  data() {
    return {
      menuItems: [
        {link: '#/support',name: 'Kubernetes', tooltip: 'Kubernetes' },
        {link: '#/support',name: 'Databases', tooltip: 'Databases' },
        {link: '#/support',name: 'Api management', tooltip: 'Api management' },
      ]
    }
  }
}
</script>

<style scoped>
.sidebar-menu {
  font-weight: 600;
  font-size: 14px;
}
</style>