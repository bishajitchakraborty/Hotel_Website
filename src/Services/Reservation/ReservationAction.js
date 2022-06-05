import axios from "axios";
import {base_url} from "../../Constrant";
import {RESERVATION_SLIDER_ERROR, RESERVATION_SLIDER_LOADING, RESERVATION_SLIDER_SUCCESS} from "./ReservationType";

export const reservation = (booking) => {
    return axios.post(`${base_url}/reservation/`, booking)
        .then(value => {
            return value
        }).catch(reason => {
            return reason.message
        })
}





export const getReservationSlider = ()=> async dispatch =>{
    try {
        dispatch({
            type:RESERVATION_SLIDER_LOADING
        })
        const response =  await axios.get(`${base_url}/reservation-slider/`)
        dispatch({
            type:RESERVATION_SLIDER_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:RESERVATION_SLIDER_ERROR
        })
    }
}