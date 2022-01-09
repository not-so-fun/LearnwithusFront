import axios from "axios"
// http://localhost:5000
// https://learnwithus101.herokuapp.com
const Axios = axios.create({
    baseURL:"https://learnwithus101.herokuapp.com"
})

export default Axios