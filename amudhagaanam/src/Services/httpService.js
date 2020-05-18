import axios from "axios";

const endpointURL = "https://mpplaylistbackend.herokuapp.com";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  endpointURL,
};
