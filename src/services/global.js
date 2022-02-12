export default {
  clearFormInputs(user) {
    const keys = Object.keys(user);
    keys.forEach((key) => {
      user[key] = "";
    });
    return user;
  },
};
