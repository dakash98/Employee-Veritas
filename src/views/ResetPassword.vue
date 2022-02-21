<template>
  <div class="outer">
    <div class="inner">
      <BaseInput v-model="user.email" label="Email" type="text" />
      <br /><br />

      <button data-testid="submit" id="submit" @click="resetPassword">
        Reset Password
      </button>
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
    };
  },
  created() {
    this.get_users();
  },
  methods: {
    get_users() {
      server
        .getUsers()
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log("error is ", error);
        });
    },
    resetPassword() {
      const user = this.checkUserAvailable();
      if (!user) {
        alert("User Not Found");
        return 0;
      }
      user["password"] = "12345";
      server
        .updateUser(user)
        .then((response) => {
          console.log("password resetted successfully", response.status);
        })
        .catch((error) => {
          console.log("error is ", error);
          alert("Please Enter Correct email");
        });
    },
    checkUserAvailable() {
      let user = "";
      for (let idx in this.users) {
        if (this.user["email"] === this.users[idx]["email"]) {
          user = this.users[idx];
        }
      }
      return user;
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
a {
  color: rgb(46, 45, 45) !important;
}
</style>
