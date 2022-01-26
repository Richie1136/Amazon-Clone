import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080/clone-9b302/us-central1/api' // where we have the API url
})

export default instance