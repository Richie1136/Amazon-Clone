import axios from "axios";

const instance = axios.create({
  baseURL: '' // where we have the API url
})

export default instance