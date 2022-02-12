<template>
  <div id="nav">
    <div>
      <img
        alt="Vue logo"
        src="@/assets/employee-logo.png"
        class="employee-logo"
        @click="routeToHome"
      />
    </div>
    <div style="font-size: 20px; text-align: right; margin-top: -4%">
      <router-link to="/login">Login</router-link> |
      <router-link to="/sign-up">Sign Up</router-link>
    </div>

    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/login">Login</router-link> |
    <router-link to="/sign-up">Sign Up</router-link> -->
    <!-- <router-link to="/login">Login</router-link> -->
  </div>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* background-color: #e0e1e4; */
}

#nav {
  padding: 2%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.employee-logo {
  top: 25px;
  left: 50px;
  width: 112px;
  height: 70px;
  opacity: 1;
}
</style>
