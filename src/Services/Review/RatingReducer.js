
import {RATING_LOADING, RATING_SUCCESS, RATING_ERROR} from "./ReviewType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const RatingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RATING_LOADING:
            return {
                ...state,
                loading: true,
            }
        case RATING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case RATING_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to Post Review Ratings"
            }
        default:
            return state;
    }
}

export default RatingsReducer;