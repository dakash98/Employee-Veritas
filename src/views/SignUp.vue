<template>
  <div class="outer">
    <div class="inner">
      <BaseInput v-model="user.email" label="Email" type="text" />
      <br /><br />

      <BaseInput v-model="user.password" label="Password" type="password" />
      <br /><br />

      <BaseInput v-model="user.name" label="Name" type="text" />
      <br /><br />

      <BaseInput
        v-model="user.contact_number"
        label="Contact Number"
        type="text"
      />
      <br /><br />

      <button data-testid="submit" @click="registerUser">SignUp</button>
      <br /><br />
      <h4>Already Registered ? <router-link to="/">Login</router-link></h4>
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
        name: "",
        contact_number: "",
        permission: "user",
      },
    };
  },
  methods: {
    registerUser() {
      server
        .registerUser(this.user)
        .then((response) => {
          console.log(response);
          alert("registered successfully, status : " + response.status);
        })
        .catch((error) => {
          console.log("error is ", error);
          alert("Please Enter Correct Username & password");
        });
      this.user = global.clearFormInputs(this.user);
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
