<template>
  <label>{{ label }}</label
  ><br />
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="checkValue"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    checkValue(event) {
      if (
        (this.label.toLowerCase() == "password" &&
          event.target.value.length > 8) ||
        this.label.toLowerCase() == "username"
      ) {
        this.$emit("update:modelValue", event.target.value);
      }
    },
  },
};
</script>
