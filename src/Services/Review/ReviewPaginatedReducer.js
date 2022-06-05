import {PAGINATED_REVIEW_LOADING, PAGINATED_REVIEW_SUCCESS, PAGINATED_REVIEW_ERROR} from "./ReviewType";
const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ReviewReducerPaginated = (state = initialState, action) => {
    switch (action.type) {
        case PAGINATED_REVIEW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PAGINATED_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PAGINATED_REVIEW_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Review Paginated"
            }
        default:
            return state;
    }
}
export default ReviewReducerPaginated;