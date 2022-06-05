import {CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS} from "./ContactType";
import axios from "axios";
import {base_url} from "../../Constrant";

export const getContact = ()=> async dispatch =>{
    try {
        dispatch({
            type:CONTACT_LOADING
        })
        const response =  await axios.get(`${base_url}/contact/`)
        dispatch({
            type:CONTACT_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:CONTACT_ERROR
        })
    }
}