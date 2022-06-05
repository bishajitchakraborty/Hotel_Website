import { CATERING_SLIDER_ERROR, CATERING_SLIDER_LOADING, CATERING_SLIDER_SUCCESS} from "./CateringType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const CateringSliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATERING_SLIDER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case CATERING_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case CATERING_SLIDER_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Catering Slider"
            }
        default:
            return state;
    }
}

export default CateringSliderReducer;