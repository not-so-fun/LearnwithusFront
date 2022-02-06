import axios from "axios";
import {URL} from "./axiosURL";
const Axios = axios.create({
  baseURL: URL,
});

export default Axios;
