<template>
  <div id="nav">
    <img
      alt="Vue logo"
      src="@/assets/employee-logo.png"
      class="employee-logo"
    />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/sign-up">Sign Up</router-link> -->
    <!-- <router-link to="/login">Login</router-link> -->
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
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
