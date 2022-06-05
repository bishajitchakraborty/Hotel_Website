import React from 'react';
import {Rating} from "@mui/material";


const ReviewCard = ({comment, rating}) => {
    // function getProtectedUsername(username) {
    //     console.log(username)
    //     if (!_.isEmpty(username)){
    //         return username.substring(0, 3) + "******" + username.substring(username.length-2,username.length)
    //     }
    //     // return "Unknown"
    // }

    return (
        <div>
            <div className={'py-4 border-b border-gray-200'}>
                <Rating
                    name="simple-controlled"
                    value={rating}
                />
                <div>
                    {/*<h2 className={'text-xs mb-2'}>by {getProtectedUsername(username)}</h2>*/}
                    <p className={'test-sm text-blue-500'}>{comment}</p>
                </div>
            </div>
        </div>
    );
};
ReviewCard.getInitialProps = async ({query}) => {
    const {comment, rating} = query
    return {
        props: {
            // username: username,
            comment: comment,
            rating: rating
        },
    }
}


export default ReviewCard;