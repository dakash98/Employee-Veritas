<template>
  <div class="outer">
    <div class="inner">
      <BaseInput v-model="user.email" label="Email" type="text" />
      <br /><br />

      <BaseInput v-model="user.password" label="Password" type="password" />
      <br /><br />

      <button data-testid="submit" @click="onSubmit">Submit</button>
      <br /><br />
      <h4>
        Not Registered Yet ? <router-link to="/sign-up">Sign Up</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
import server from "@/services/jsonServer.js";
import global from "@/services/global.js";
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
    onSubmit() {
      if (this.checkUserFields()) {
        return 0;
      }
      server
        .loginUser(this.user)
        .then((response) => {
          console.log(response);
          alert("logged in successfully, status : " + response.status);
        })
        .catch((error) => {
          console.log("error is ", error);
          alert("Please Enter Correct Username & password");
        });
      this.user = global.clearFormInputs(this.user);
    },
    checkUserFields() {
      return this.user.email.length === 0 || this.user.password.length === 0
        ? true
        : false;
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
