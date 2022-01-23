import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    // GET   /users     ----> returns all users
    return apiClient.get("/users");
  },
  getUser(id) {
    // GET  /users/1   ----> returns details of a particular user
    return apiClient.get("/users/" + id);
  },
  loginUser(user_data) {
    // POST  /login     ----> logs in a user
    return apiClient.post("/login", user_data);
  },
  registerUser(user_data) {
    // POST /register  ----> registers a new user
    return apiClient.post("/register", user_data);
  },
  updateUser(user_data) {
    // PATCH  /users/id  ----> creates or updates a user field already registered
    return apiClient.patch("/users/", user_data);
  },
};
