import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://18.205.233.220:8082/'
    });
}
