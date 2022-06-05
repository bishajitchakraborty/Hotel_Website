import {MESSAGE_ERROR, MESSAGE_LOADING, MESSAGE_SUCCESS} from "./MessageType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_LOADING:
            return {
                ...state,
                loading: true,
            }
        case MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case MESSAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Home"
            }
        default:
            return state;
    }
}

export default MessageReducer;