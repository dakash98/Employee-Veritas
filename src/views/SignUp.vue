<template>
  <div class="outer">
    <div class="inner">
      <BaseInput v-model="user.email" label="Email" type="text" />
      <br /><br />

      <BaseInput v-model="user.password" label="Password" type="password" />
      <br /><br />

      <BaseInput v-model="user.name" label="Name" type="text" />
      <br /><br />

      <BaseInput v-model="user.contact_number" label="Mobile No." type="text" />
      <br /><br />

      <button data-testid="submit" id="submit" @click="registerUser">
        SignUp
      </button>
      <h4>Already Registered ? <router-link to="/login">Login</router-link></h4>
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

<style scoped>
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
#submit {
  width: 100%;
  background-color: #0f130f;
  color: white;
  padding: 14px 20px;
  margin: 2px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#submit:hover {
  background-color: #363836;
}
a {
  color: rgb(46, 45, 45) !important;
}
h4 {
  color: rgb(39, 38, 38) !important;
  opacity: 0.8;
}
</style>
