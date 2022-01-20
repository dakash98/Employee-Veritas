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
  getEvents() {
    return apiClient.get("/users");
  },
  getEvent(id) {
    return apiClient.get("/users/" + id);
  },
  postEvent(event) {
    return apiClient.post("/users", event);
  },
};
