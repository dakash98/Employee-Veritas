<template>
  <label>{{ label }}</label
  ><br />
  <input
    v-bind="$attrs"
    :placeholder="'Enter Your ' + label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
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
};
</script>
<style scoped>
input[type="text"],
input[type="password"],
select {
  width: 30vw;
  padding: 14px 12px;
  margin: 2px 0;
  display: inline-block;
  border: 1px solid rgb(235, 232, 232);
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.1vw;
}
</style>
