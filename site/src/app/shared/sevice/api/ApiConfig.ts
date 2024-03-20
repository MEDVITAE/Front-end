import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: '10.0.0.148:8082'
    });
}