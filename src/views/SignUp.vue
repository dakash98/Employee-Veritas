<template>
  <div class="outer">
    <div class="inner">
      <BaseInput v-model="user.email" label="Username" type="text" />
      <br /><br />

      <BaseInput v-model="user.password" label="Password" type="password" />
      <br /><br />

      <button data-testid="submit" @click="registerUser">SignUp</button>
      <br /><br />
      <h4>Already Registered ? <router-link to="/">Login</router-link></h4>
    </div>
  </div>
</template>

<script>
// import server from "@/services/jsonServer.js";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registerUser() {
      console.log("registering");
    },
    clearFormInputs() {
      this.user["email"] = "";
      this.user["password"] = "";
    },
  },
};
</script>

<style>
.outer {
  width: 100%;
}
.inner {
  display: table;
  margin: 0 auto;
}
.set-color {
  color: white;
}
</style>
