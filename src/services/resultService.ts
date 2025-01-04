import apiClient from "./apiClient";

const fetchAllResult = async () => {
    const res = await apiClient.get(`/api/result/all`);
    return res.data;
};



export { fetchAllResult };