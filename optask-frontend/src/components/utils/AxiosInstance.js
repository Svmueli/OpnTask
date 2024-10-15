import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = 'http://localhost:8000/api/v1/';

const AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json' }
});

let accessToken = "";
let refresh_token = "";

// Function to set tokens
const setTokens = () => {
    accessToken = localStorage.getItem('token') || "";
    refresh_token = localStorage.getItem('refresh_token') || "";
};

AxiosInstance.interceptors.request.use(async req => {
    // Set tokens from localStorage on each request
    setTokens();

    if (accessToken) {
        let isExpired = false;
        try {
            const user = jwt_decode(accessToken);
            isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        } catch (error) {
            console.error("Token decoding failed or no token present");
            isExpired = true;
        }

        if (!isExpired) {
            req.headers.Authorization = `Bearer ${accessToken}`;
            return req;
        }

        try {
            const resp = await axios.post(`${baseURL}auth/token/refresh/`, { refresh: refresh_token });
            console.log('new_access_token: ', resp.data.access);
            localStorage.setItem('token', resp.data.access); // Update localStorage
            req.headers.Authorization = `Bearer ${resp.data.access}`;
        } catch (error) {
            console.error('Refresh token expired or invalid');
            localStorage.removeItem('token');
            localStorage.removeItem('refresh_token');
            // Optionally redirect to login
            // window.location.href = '/login';
        }
    } else {
        req.headers.Authorization = "";
    }
    return req;
});

export default AxiosInstance;
