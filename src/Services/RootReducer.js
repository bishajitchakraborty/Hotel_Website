import {combineReducers} from "redux";
import HomeReducer from "./Home/HomeReducer";
import AboutReducer from "./About/AboutReducer";
import MyphotoReducer from "./Myphoto/MyphotoReducer";
import CateringReducer from "./Catering/CateringReducer";
import ContactReducer from "./Contact/ContactReducer";
import ReservationReducer from "./Reservation/ReservationReducer";
import MessageReducer from "./Message/MessageReducer";
import SignUpReducer from "./SignUp/SignUpReducer";
import AuthReducer from "./Auth/Reducer";
import ReviewReducer from "./Review/ReviewReducer";
import ReviewSliderReducer from "./ReviewSlider/ReviewSliderReducer";
import ReviewReducerPaginated from "./Review/ReviewPaginatedReducer";
import ReservationSliderReducer from "./Reservation/ReservationSliderReducer";
import CateringSliderReducer from "./Catering/CateringSliderReducer";
import RatingsReducer from "./Review/RatingReducer";



const RootReducer = combineReducers({
    home:HomeReducer,
    about:AboutReducer,
    myphoto:MyphotoReducer,
    catering:CateringReducer,
    cateringSlider:CateringSliderReducer,
    contact:ContactReducer,
    reservation:ReservationReducer,
    reservationSlider:ReservationSliderReducer,
    message:MessageReducer,
    signup:SignUpReducer,
    auth:AuthReducer,
    review:ReviewReducer,
    ratings:RatingsReducer,
    reviewSlider:ReviewSliderReducer,
    reviewPaginated:ReviewReducerPaginated,



})

export default RootReducer;