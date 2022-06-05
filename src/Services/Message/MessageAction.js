import axios from "axios";
import {base_url} from "../../Constrant";
export const message = (text) => {
    return axios.post(`${base_url}/message/`, text)
        .then(value => {
            return value
        }).catch(reason => {
            return reason.message
        })
}
