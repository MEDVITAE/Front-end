import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://3.87.119.102:8082'
    });
}
