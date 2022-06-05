import {REVIEWSLIDER_ERROR, REVIEWSLIDER_LOADING, REVIEWSLIDER_SUCCESS} from "./ReviewSliderType";
import axios from "axios";
import {base_url} from "../../Constrant";

export const getReviewSlider = ()=> async dispatch =>{
    try {
        dispatch({
            type:REVIEWSLIDER_LOADING
        })
        const response =  await axios.get(`${base_url}/review-slider/`)
        dispatch({
            type:REVIEWSLIDER_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:REVIEWSLIDER_ERROR
        })
    }
}