<template>
  <v-overlay :value="value">
    <v-progress-circular indeterminate color="secondary" />
  </v-overlay>
</template>
<script>
export default {
  name: "Loading",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
};
</script>