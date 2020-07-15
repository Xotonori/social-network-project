import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "b08b218c-1bb1-4bbc-9d99-adc8b3f17984"}
});

export const usersAPI = {
    getUsers: (pageNumber, pageSize) => instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(res => res.data),

    follow: (userId) => instance.post(`follow/${userId}`, {})
        .then(res => res.data),

    unfollow: (userId) => instance.delete(`follow/${userId}`)
        .then(res => res.data),
};

export const profileAPI = {
    setUserProfile: (userId) => instance.get(`profile/${userId}`)
        .then(res => res.data),
    getStatus: (userId) => instance.get(`profile/status/${userId}`)
        .then(res => res.data),
    updateStatus: (status) => instance.put(`profile/status`, {status})
        .then(res => res.data),
};

export const authAPI = {
    me: () => instance.get(`auth/me`)
        .then(res => res.data),
};

