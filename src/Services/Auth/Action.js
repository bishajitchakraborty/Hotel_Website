import axios from "axios";
import {LOGIN_SUCCESS} from "./LoginType";

export const login = (data) => {
    return axios.post(`/token/`, data)
        .then(r => {
            if (r.status === 200) {
                localStorage.setItem("accessToken", r.data.access)
                localStorage.setItem("refreshToken", r.data.refresh)
                stateUpdate(r.data)
                return r
            }
        }).catch(reason => {
            stateUpdate([])
        })
}

export const stateUpdate = (date) => async dispatch => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: date
        })
}



