import React from 'react';
import styled from 'styled-components';


const StyledReviewCategory = styled.div`
  display: grid;
  grid-column-template: 50% 50%;
  width: 40%;
  margin: 10px 100px 10px 10px;
`;

const RatingFiller = styled.img`
  border-radius: 5px;
  height: 5px;
  width: ${props => (props.rating/5) * 100}%;
  margin: -5px;
`;

const RatingBucket = styled.img`
  border-radius: 5px;
  height: 5px;
  width: 100%;
  margin: -5px;
`;


const RatingsBar = styled.div`
  display: grid;
`;

const Rating = styled.div`
  margin-left: 10px;
`;

const Score = styled.div`
  display: flex;
  align-items:center;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-content: flex-end;
`;


let ReviewCategory = (props) => (
  <StyledReviewCategory evenOrOdd={props.evenOrOdd}>
    <div>{props.category}</div>
    <Score>
    <RatingsBar>
      <RatingBucket src={'https://airbnbprojectimages.s3.us-east-2.amazonaws.com/Ratings+Bar/ratingscontainer.png'}></RatingBucket>
      <RatingFiller rating={props.rating} src={'https://airbnbprojectimages.s3.us-east-2.amazonaws.com/Ratings+Bar/ratingsbar.png'} ></RatingFiller>
    </RatingsBar>
    <Rating>{props.rating}</Rating>
    </Score>
  </StyledReviewCategory>
)

export default ReviewCategory;