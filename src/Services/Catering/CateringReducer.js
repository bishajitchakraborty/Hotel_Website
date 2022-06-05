import {CATERING_ERROR, CATERING_LOADING, CATERING_SUCCESS} from "./CateringType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const CateringReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATERING_LOADING:
            return {
                ...state,
                loading: true,
            }
        case CATERING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case CATERING_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Catering"
            }
        default:
            return state;
    }
}

export default CateringReducer;