import {ABOUT_ERROR, ABOUT_LOADING, ABOUT_SUCCESS} from "./AboutType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const AboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ABOUT_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ABOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case ABOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get About"
            }
        default:
            return state;
    }
}

export default AboutReducer;