import axios from "axios";

/* Creating a new instance of axios with a baseURL of http://localhost:3500. */
export default axios.create({
  baseURL: "http://localhost:3500",
});
