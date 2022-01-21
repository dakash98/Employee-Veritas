<template>
  <div class="outer">
    <h3 style="background-color: yellow" v-if="message">{{ message }}</h3>
    <div class="inner">
      <BaseInput v-model="employee.username" label="Username" type="text" />
      <br /><br />

      <BaseInput v-model="employee.password" label="Password" type="password" />
      <br /><br />

      <button @click="onSubmit">Submit</button>
      <br /><br />
      <h4>
        Not Registered Yet ? <router-link to="/sign-up">Sign Up</router-link>
      </h4>
      <pre>{{ employee }}</pre>
    </div>
  </div>
</template>

<script>
import server from "@/services/jsonServer.js";
export default {
  data() {
    return {
      employee: {
        username: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    onSubmit() {
      server
        .getUser(1)
        .then((response) => {
          console.log("==== ", response.data);
        })
        .catch((error) => {
          console.log("error is ", error);
          this.message = error;
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
</style>
