import apiClient from "./apiClient";

const fetchAllForecast = async () => {
    const res = await apiClient.get(`/api/forecast/all`);
    return res.data;
};



export { fetchAllForecast };