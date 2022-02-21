<template>
  <div class="outer">
    <div class="inner">
      <BaseInput v-model="user.email" label="Email" type="text" />
      <br /><br />

      <BaseInput v-model="user.password" label="Password" type="password" />
      <p id="recover-password">
        <router-link to="/reset">recover password?</router-link>
      </p>
      <br /><br />

      <button data-testid="submit" id="submit" @click="onSubmit">Login</button>
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
  width: 30vw;
  background-color: #0f130f;
  color: white;
  padding: 17px 20px;
  margin: -9px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#submit:hover {
  background-color: #363836;
}
#recover-password {
  text-align: right;
  font-size: 0.9rem;
  opacity: 0.6;
  margin: 0 !important;
}
a {
  color: rgb(46, 45, 45) !important;
}
h4 {
  color: rgb(39, 38, 38) !important;
  opacity: 0.8;
}
</style>
