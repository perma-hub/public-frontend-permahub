<template>
  <v-row align="center" justify="center" style="height: 100%">
    <v-col cols="12" sm="4">
      <loading :value="loading" />
      <snackbar
        v-model="snackbar.show"
        :text="snackbar.text"
        :color="snackbar.color"
      />
      <popup v-model="showSuccessDialog" color="success lighten-2" width="500">
        <v-card-title />
        <v-card-text>
          Thank you for joining PermaHub. Just one more step needed to login,
          please verify your e-mail. Check your inbox to verify your account.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text href="/">go to home</v-btn>
        </v-card-actions>
      </popup>
      <v-card outlined>
        <v-form ref="form" v-model="valid">
          <v-card-title class="text-center">
            <span class="font-size-h5">
              Join&nbsp;<span class="brand">PermaHub</span>
            </span>
            <span class="font-size-body">
              Sign up to join permaculture community
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
            <v-text-field
              :append-icon="show.confirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="rules.confirmPassword(formData.password)"
              :type="show.confirmPassword ? 'text' : 'password'"
              label="Confirm Password"
              color="accent"
              hint="Match with password"
              @click:append="show.confirmPassword = !show.confirmPassword"
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
              Submit
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { REGISTER_URL } from "./constants";
import axios from "axios";
import Loading from "./Loading.vue";
import Snackbar from "./Snackbar.vue";
import Popup from "./Popup.vue";

export default {
  name: "SignUpForm",
  components: { Loading, Snackbar, Popup },
  data: () => ({
    valid: true,

    formData: {
      email: "",
      password: "",
    },
    show: {
      password: false,
      confirmPassword: false,
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
      confirmPassword: (x) => [
        (v) => !!v || "Confirm Password is required",
        (v) => {
          return v === x || "Confirm Password must match with Password";
        },
      ],
    },
    loading: false,
    snackbar: {
      show: false,
      text: "",
      color: "info",
    },
    showSuccessDialog: false,
  }),

  methods: {
    async submit() {
      try {
        this.loading = true;
        await axios.post(REGISTER_URL, this.formData, {
          crossDomain: true,
        });

        this.showSuccessDialog = true;
        console.log(this.showSuccessDialog);
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