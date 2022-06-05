import {REVIEWSLIDER_ERROR, REVIEWSLIDER_LOADING, REVIEWSLIDER_SUCCESS} from "./ReviewSliderType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ReviewSliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEWSLIDER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REVIEWSLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case REVIEWSLIDER_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Review Slider"
            }
        default:
            return state;
    }
}

export default ReviewSliderReducer;