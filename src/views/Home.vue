<template>
  <div class="home">
    <base-logo />
    <div id="nav">
      <div style="font-size: 20px; text-align: right; margin-top: -4%">
        <router-link to="/login">Login</router-link> |
        <router-link to="/sign-up">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style scoped>
</style>
