<template>
  <vue-horizontal responsive>
    <section v-for="item in items" :key="item.title">
      <div :style="styles.thumbnailWrapper">
        <comet-chat-avatar
            border-width="0px"
            :image="`images/${item.image}.png`"
        />
      </div>
    </section>
  </vue-horizontal>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import * as style from "@/components/AppNavigation/style";

export default {
  name: 'component.vue',
  components: {VueHorizontal},
  data() {
    return {
      // E.g: creates 20 array items...
      items: [
        {title: "check", content: "test", image: "support"}
      ],
    }
  },
  computed: {
    styles() {
      return {
        wrapper: style.wrapperStyle(),
        title: style.titleStyle(),
        subTitle: style.subTitleStyle(),
        helpText: style.helpTextStyle(),
        component: style.componentStyle(),
        box: style.boxStyle(),
        titleWrapper: style.titleWrapperStyle(),
        thumbnailWrapper: style.thumbnailWrapperStyle(),
        componentTitle: style.componentTitleStyle(),
        descWrapper: style.descWrapperStyle(),
        linkWrapper: style.linkWrapperStyle(),
        link: style.linkStyle(),
        logoutBtn: style.logoutBtn(),
      };
    },
  },
}
</script>

<style scoped>
section {
  padding: 5px 100%;
  background: #0052CC;
}
</style>