import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '8f9a9157-3f30-4705-bd4d-ae08502514a2'}
})
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method.Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status`,{status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    login(email,password,rememberMe = false) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/auth/login`,{email,password,rememberMe})
    },
    logout() {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`)
    }
}


