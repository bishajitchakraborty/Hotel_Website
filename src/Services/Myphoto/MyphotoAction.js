import {MYPHOTO_ERROR, MYPHOTO_LOADING, MYPHOTO_SUCCESS} from "./MyphotoType";
import axios from "axios";
import {base_url} from "../../Constrant";

export const getPhoto = ()=> async dispatch =>{
    try {
        dispatch({
            type:MYPHOTO_LOADING
        })
        const response =  await axios.get(`${base_url}/gallery/`)
        dispatch({
            type:MYPHOTO_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:MYPHOTO_ERROR
        })
    }
}