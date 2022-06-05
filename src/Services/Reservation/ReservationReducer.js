import {RESERVATION_ERROR, RESERVATION_LOADING, RESERVATION_SUCCESS} from "./ReservationType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ReservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESERVATION_LOADING:
            return {
                ...state,
                loading: true,
            }
        case RESERVATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case RESERVATION_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to Post Reservation"
            }
        default:
            return state;
    }
}

export default ReservationReducer;