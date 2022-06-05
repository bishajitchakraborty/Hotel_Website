import {
    REVIEW_LOADING,
    REVIEW_ERROR,
    REVIEW_SUCCESS,
    // PAGINATED_REVIEW_LOADING,
    // PAGINATED_REVIEW_SUCCESS, PAGINATED_REVIEW_ERROR
} from "./ReviewType";
import axios from "axios";
import {base_url} from "../../Constrant";
export const getReview= (limit, offset) => async dispatch => {
    try {
        await dispatch({
            type: REVIEW_LOADING,
            payload: []
        })
        const response = await axios.get(`${base_url}/review/?limit=${limit}&offset=${offset}`)
        await dispatch({
            type: REVIEW_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: REVIEW_ERROR
        })
    }
}
export const saveReview = (data) => {
    return axios.post(`${base_url}/review/`, data)
        .then(r =>  r).catch(reason => reason)
}

// export const getReviewPaginated = (url) => async dispatch => {
//     try {
//         dispatch({
//             type: PAGINATED_REVIEW_LOADING
//         })
//         const response = await axios.get(`${base_url}/review/`)
//         dispatch({
//             type: PAGINATED_REVIEW_SUCCESS,
//             payload: response.data
//         })
//     } catch (e) {
//         dispatch({
//             type: PAGINATED_REVIEW_ERROR
//         })
//     }
// }



