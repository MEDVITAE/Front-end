import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://54.227.65.243:8082/'
    });
}
