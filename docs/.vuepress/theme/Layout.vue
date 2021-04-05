<template>
  <v-app>
    <v-app-bar app flat color="primary">
      <span class="brand font-size-h6">PermaHub</span>
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


