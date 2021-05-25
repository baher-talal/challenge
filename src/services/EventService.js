import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(limit, offset) {
    return apiClient.get(
      "/trending?api_key=2zE7UXfwOk9d888taHix1XudZ0claN1t&limit=" +
        limit +
        "&offset=" +
        offset
    );
    // return apiClient.get("/");
  },

  getEvent(id) {
    return apiClient.get("/events/" + id);
  },

  postEvent(event) {
    return apiClient.post("/events/", event);
  },
};
