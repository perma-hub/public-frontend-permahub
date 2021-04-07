<template>
  <v-dialog :value="value" @input="$emit('input', $event)" :width="width">
    <v-card :color="color">
      <slot />
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "Popup",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "",
    },
    width: {
      type: Number,
      required: false,
    },
  },
};
</script>