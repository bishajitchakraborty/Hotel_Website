import {CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS} from "./ContactType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_LOADING:
            return {
                ...state,
                loading: true,
            }
        case CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case CONTACT_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Contact"
            }
        default:
            return state;
    }
}

export default ContactReducer;