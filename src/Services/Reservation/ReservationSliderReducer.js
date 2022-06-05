import {RESERVATION_SLIDER_ERROR, RESERVATION_SLIDER_LOADING, RESERVATION_SLIDER_SUCCESS} from "./ReservationType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ReservationSliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESERVATION_SLIDER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case RESERVATION_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case RESERVATION_SLIDER_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to Post Reservation"
            }
        default:
            return state;
    }
}

export default ReservationSliderReducer;