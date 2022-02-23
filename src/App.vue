<template>
  <router-view />
</template>
<script>
export default {
  methods: {
    routeToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
