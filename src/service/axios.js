import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/', // Thay thế URL backend của bạn ở đây
    // withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data;
    }
);

export default instance;
