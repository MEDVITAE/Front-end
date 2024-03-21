import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://54.81.60.55:8082/'
    });
}
