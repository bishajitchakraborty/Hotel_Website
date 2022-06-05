import {REVIEW_LOADING, REVIEW_ERROR, REVIEW_SUCCESS} from "./ReviewType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ReservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case REVIEW_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Total Review "
            }
        default:
            return state;
    }
}

export default ReservationReducer;