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
    return apiClient.get("/users");
  },
  getUser(id) {
    return apiClient.get("/users/" + id);
  },
  postUser(event) {
    return apiClient.post("/users", event);
  },
};
