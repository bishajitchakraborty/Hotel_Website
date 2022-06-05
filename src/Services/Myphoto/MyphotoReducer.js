import {MYPHOTO_ERROR, MYPHOTO_LOADING, MYPHOTO_SUCCESS} from "./MyphotoType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const MyphotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case MYPHOTO_LOADING:
            return {
                ...state,
                loading: true,
            }
        case MYPHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case MYPHOTO_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Gallery"
            }
        default:
            return state;
    }
}

export default MyphotoReducer;