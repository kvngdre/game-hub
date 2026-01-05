import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "73cfc116dbc740d1ba85a9f99969a3e8"
  }
});
