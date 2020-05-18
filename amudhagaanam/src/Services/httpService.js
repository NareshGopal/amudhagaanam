import axios from "axios";

const endpointURL = "http://localhost:5000";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  endpointURL,
};
