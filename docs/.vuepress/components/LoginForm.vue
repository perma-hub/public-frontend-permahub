<template>
  <v-row align="center" justify="center" style="height: 100%">
    <v-col cols="12" sm="4">
      <loading :value="loading" />
      <snackbar
        v-model="snackbar.show"
        :text="snackbar.text"
        :color="snackbar.color"
      />
      <v-card outlined>
        <v-form ref="form" v-model="valid">
          <v-card-title class="text-center mb-4">
            <span class="font-size-h5">
              Login to <span class="brand">PermaHub</span>
            </span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="formData.email"
              :rules="rules.email"
              label="E-mail"
              color="accent"
              dense
              outlined
              rounded
            />
            <v-text-field
              v-model="formData.password"
              :append-icon="show.password ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="rules.password"
              :type="show.password ? 'text' : 'password'"
              label="Password"
              color="accent"
              hint="At least 8 characters"
              counter
              @click:append="show.password = !show.password"
              dense
              outlined
              rounded
            />
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-spacer />
            <v-btn
              :disabled="!valid"
              color="secondary"
              font-color
              @click="submit"
              rounded
              depressed
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import {
  LOGIN_URL,
  LOGIN_COOKIE_EXPIRATION,
  PERMAHUB_DOMAIN,
  PRIVATE_FRONTEND_URL,
} from "./constants";
import axios from "axios";
import Loading from "./Loading.vue";
import Snackbar from "./Snackbar.vue";

export default {
  name: "LoginForm",
  components: { Loading, Snackbar },
  data: () => ({
    valid: true,

    formData: {
      email: "",
      password: "",
    },
    show: {
      password: false,
    },
    rules: {
      email: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Password must be 8 characters",
      ],
    },
    loading: false,
    snackbar: {
      show: false,
      text: "",
      color: "info",
    },
  }),
  methods: {
    async submit() {
      try {
        this.loading = true;
        const result = await axios.post(LOGIN_URL, this.formData, {
          crossDomain: true,
        });

        $cookies.set(
          "jwt",
          result.data.success.token,
          LOGIN_COOKIE_EXPIRATION,
          null,
          PERMAHUB_DOMAIN
        );
        window.location.href = PRIVATE_FRONTEND_URL;
      } catch (error) {
        var message = error.toString();
        var color = "error";
        if (
          error.response !== undefined &&
          error.response.data !== undefined &&
          error.response.data.error !== undefined &&
          error.response.data.error.message !== undefined
        ) {
          message = error.response.data.error.message;
          if (Math.floor(error.response.status / 100) == 4) {
            color = "warning";
          }
        }
        this.notify(message, color);
      }
      this.loading = false;
    },
    notify(text, color) {
      this.snackbar.show = true;
      this.snackbar.text = text;
      this.snackbar.color = color;
    },
  },
};
</script>