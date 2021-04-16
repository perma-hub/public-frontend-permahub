<template>
  <v-app>
    <v-app-bar app flat color="primary">
      <span class="brand font-size-h6"><a href="/">PermaHub</a></span>
      <v-spacer />
      <v-btn
        v-for="(item, key) in $site.themeConfig.nav"
        text
        :href="item.link"
        :key="'nav_' + key"
      >
        {{ item.text }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fill-height fluid>
        <Content style="height: 100%; width: 100%" />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { PRIVATE_FRONTEND_URL } from "../components/constants";
export default {
  name: "Layout",
  created() {
    if (this.$cookies.get("jwt") != null) {
      window.location.href = PRIVATE_FRONTEND_URL;
    }
  },
};
</script>