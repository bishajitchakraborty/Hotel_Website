import {SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS} from "./SignUpType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Home"
            }
        default:
            return state;
    }
}

export default SignUpReducer;