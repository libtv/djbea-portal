import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  params: {
    language: "ko-KR",
  },
  headers: {},
});

export default instance;
