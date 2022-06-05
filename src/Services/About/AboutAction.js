import {ABOUT_ERROR, ABOUT_LOADING, ABOUT_SUCCESS} from "./AboutType";
import axios from "axios";
import {base_url} from "../../Constrant";

export const getAbout = ()=> async dispatch =>{
    try {
        dispatch({
            type:ABOUT_LOADING
        })
        const response =  await axios.get(`${base_url}/about/`)
        dispatch({
            type:ABOUT_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:ABOUT_ERROR
        })
    }
}