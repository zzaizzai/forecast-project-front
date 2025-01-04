import axios from 'axios';


const apiClient = axios.create({
    // backend url
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


apiClient.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        
        if (error.response?.status === 401) {
            console.error("Unauthorized! Redirecting to login...");
        }
        return Promise.reject(error);
    }
);

export default apiClient;