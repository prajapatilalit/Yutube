import axios from "axios";

const KEY = "AIzaSyBtObMKXZwtqwIfv3Kr1Q6aou2s_J2OMwc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
  },
});
