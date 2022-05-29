import axios from "axios";

const Api = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_API_BASE_URL
})

export default Api;