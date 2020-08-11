import React from 'react';

const IndividualReviews = (props) => (
  <div>
    {props.reviews.map((review, index) => {
      return(
        <div key={index}>
        <img src={review.imageURL}/>
        <div>{review.user}</div>
        <div>{review.date}</div>
      <p>{review.reviewTxt}</p>
      </div>
      )
    })}
  </div>
);

export default IndividualReviews;