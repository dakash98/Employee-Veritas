<template>
  <div class="outer">
    <h3
      class="set-color"
      :style="{ 'background-color': response_object.color }"
      v-if="response_object.message"
    >
      {{ response_object.message }}
    </h3>
    <div class="inner">
      <BaseInput v-model="user.email" label="Username" type="text" />
      <br /><br />

      <BaseInput v-model="user.password" label="Password" type="password" />
      <br /><br />

      <button @click="onSubmit">Submit</button>
      <br /><br />
      <h4>
        Not Registered Yet ? <router-link to="/sign-up">Sign Up</router-link>
      </h4>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
import server from "@/services/jsonServer.js";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      response_object: {
        message: "",
        color: "",
      },
    };
  },
  methods: {
    onSubmit() {
      server
        .loginUser(this.user)
        .then((response) => {
          this.response_object.message = "Hurrah!!! Logged In Successfully...";
          this.response_object.color = "green";
          console.log(response);
        })
        .catch((error) => {
          console.log("error is ", error);
          this.response_object.message = error;
          this.response_object.color = "red";
        });
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
