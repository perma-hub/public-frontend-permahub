<template>
  <v-snackbar
    :value="value"
    @input="$emit('input', $event)"
    shaped
    :color="color"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$emit('input', false)"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  name: "Snackbar",

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "info",
    },
  },
};
</script>