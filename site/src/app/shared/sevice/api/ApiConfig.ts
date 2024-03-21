import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://54.167.33.183:8082'
    });
}
