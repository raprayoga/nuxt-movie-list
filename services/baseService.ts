import axios from "axios";

const baseURL = process.env.BASE_URL_API;

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    common: {
      Authorization: "",
    },
  },
  params: {
    apikey: "31ccf49",
    i: "tt3896198",
  },
});
