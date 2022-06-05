import {
    CATERING_ERROR,
    CATERING_LOADING, CATERING_SLIDER_ERROR,
    CATERING_SLIDER_LOADING,
    CATERING_SLIDER_SUCCESS,
    CATERING_SUCCESS
} from "./CateringType";
import axios from "axios";
import {base_url} from "../../Constrant";

export const getCatering = ()=> async dispatch =>{
    try {
        dispatch({
            type:CATERING_LOADING
        })
        const response =  await axios.get(`${base_url}/catering/`)
        dispatch({
            type:CATERING_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:CATERING_ERROR
        })
    }
}




export const getCateringSlider = ()=> async dispatch =>{
    try {
        dispatch({
            type:CATERING_SLIDER_LOADING
        })
        const response =  await axios.get(`${base_url}/catering-slider/`)
        dispatch({
            type:CATERING_SLIDER_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:CATERING_SLIDER_ERROR
        })
    }
}