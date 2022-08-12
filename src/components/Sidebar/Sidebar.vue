<template>
  <VueSidebarMenuAkahon :menu-items="menuItems" menu-title="FPT CLOUD" menulogo='' menuIcon='bx bx-cloud'/>
</template>

<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

export default {
  name: 'component.vue',
  components: {VueSidebarMenuAkahon},
  data() {
    return {
      menuTitle: 'FPT CLOUD',
      menuItems: [
        {link: '#/support',name: 'Kubernetes', tooltip: 'Kubernetes', icon: "bx bxl-kubernetes"},
        {link: '#/support',name: 'Databases', tooltip: 'Databases' , icon: "bx bx-data"},
        {link: '#/support',name: 'Api management', tooltip: 'Api management' , icon: "bx-grid-alt"},
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