import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://localhost:8082'
    });
}
export default Api;