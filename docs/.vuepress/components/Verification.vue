<template>
  <v-row align="center" justify="center" style="height: 100%">
    <loading :value="loading" />
    <v-sheet v-if="success" rounded color="secondary lighten-2">
      <v-col cols="12" xs="12">
        Awesome, your account has been verified.
        <a href="/login">Click here to login</a>
      </v-col>
    </v-sheet>
    <v-sheet v-if="fail" rounded color="error lighten-2">
      <v-col cols="12" xs="12">
        Sorry, we can't verify your account. Contact us at
        <u><b>permaculture.hub@gmail.com</b></u> for tech support.
      </v-col>
    </v-sheet>
  </v-row>
</template>

<script>
import axios from "axios";
import Loading from "./Loading.vue";
import { VERIFY_URL } from "./constants";

export default {
  name: "Verification",
  data: () => ({
    loading: false,
    success: false,
    fail: false,
  }),
  async mounted() {
    try {
      this.loading = true;
      const response = await axios.patch(
        VERIFY_URL,
        {
          code: this.$route.query.code,
        },
        {
          crossDomain: true,
        }
      );

      this.success = true;
    } catch (error) {
      this.fail = true;
    }
    this.loading = false;
  },
};
</script>