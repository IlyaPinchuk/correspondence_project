import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '4fa9307d-4eff-4d72-a762-06fff13c42d9'}

})
export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(r => r.data);
    },
    followed(userId) {
        return instance.get(`follow/${userId}`).then(r => r.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(r => r.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(r => r.data);
    },
    authMe() {
        return instance.get('auth/me').then(r => r.data);
    },
    login(email, password, rememberMe = true, captcha) {
        return instance.post('auth/login', {email, password, rememberMe,captcha}).then(r => r.data);
    },
    logout() {
        return instance.delete('auth/login',).then(r => r.data);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(r => r.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(r => r.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(r => r.data)
    },
    updatePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        }).then(r => r.data)
    },
    saveProfile(profile){
        return instance.put('profile',profile).then(r => r.data)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
};



