<template>
  <div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";

import * as style from "./style";
import Sidebar from "@/components/Sidebar/Sidebar";

export default {
  name: "AppNavigation",
  components: {
    Sidebar,
  },
  created() {
    CometChat.getLoggedinUser().then(
      (user) => {
        if (!user) {
          location.href = "/";
        }
      },
      (error) => {
        console.log(error);
        location.href = "/";
      }
    );
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
  methods: {
    logout() {
      CometChat.logout().then(() => {
        location.href = "/";
      });
    },
  },
};
</script>
<style>
code {
  padding: 2px;
  font-size: 105%;
  color: crimson;
  border-radius: 4px;
  background-color: #f1f1f1;
}
</style>

<style scoped>
li {
  list-style-type: none;
}
@media (min-width: 320px) and (max-width: 767px) {
  .kitchen-sink__title {
    font-size: 20px;
  }
  .kitchen-sink__subtitle {
    font-size: 16px;
  }
  .kitchen-sink__box {
    width: 400px;
  }
  .kitchen-sink__link__wrapper {
    flex-direction: column;
  }
  .kitchen-sink__link__wrapper li {
    padding: 10px;
  }
  .kitchen-sink__component {
    flex-direction: column;
    padding: 50px 100px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .kitchen-sink__component {
    flex-direction: column;
    padding: 50px 50px;
  }
}
</style>