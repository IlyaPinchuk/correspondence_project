import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '4fa9307d-4eff-4d72-a762-06fff13c42d9'}

})
export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(r => r.data)
    },
    follow(userId) {
       return   instance.post(`follow/${userId}`).then(r => r.data)
    },
    unFollow(userId) {
       return  instance.delete(`follow/${userId}`).then(r => r.data)
    },
    authMe() {
       return  instance.get('auth/me').then(r => r.data)
    }
}

