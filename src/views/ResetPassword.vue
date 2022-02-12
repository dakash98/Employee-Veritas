<template>
  <div class="outer">
    <div class="inner">
      <BaseInput v-model="user.email" label="Email" type="text" />
      <br /><br />

      <button data-testid="submit" id="submit" @click="onSubmit">
        Reset Password
      </button>
    </div>
  </div>
</template>

<script>
// import server from "@/services/jsonServer.js";
// import global from "@/services/global.js";
export default {
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("reset password");
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
#submit {
  width: 100%;
  background-color: #0f130f;
  color: white;
  padding: 14px 20px;
  margin: -9px 0;
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
</style>
