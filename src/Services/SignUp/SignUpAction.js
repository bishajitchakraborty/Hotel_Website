import axios from "axios";
import {base_url} from "../../Constrant";
export const signUP = (sign) => {
    return axios.post(`${base_url}/sign-up/`, sign)
        .then(value => {
            return value
        }).catch(reason => {
            return reason.message
        })
}
