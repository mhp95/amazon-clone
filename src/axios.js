import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-da051.cloudfunctions.net/api",

  //"http://localhost:5001/clone-da051/us-central1/api", // The API URL,
});

export default instance;
