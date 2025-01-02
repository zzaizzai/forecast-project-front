import apiClient from "./apiClient";

const fetchAllForecast = async (city: string) => {
    const res = await apiClient.get(`/api/forecast/all`);
    return res.data;
};


