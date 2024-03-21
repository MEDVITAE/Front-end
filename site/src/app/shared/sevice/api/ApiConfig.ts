import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://44.223.0.231:8082/'
    });
}
