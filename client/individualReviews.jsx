import React from 'react';
import styled from 'styled-components';

const StyledUserReviews = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
`;

const StyledReview = styled.div`
  display: grid;
  grid-template-rows: 50% 50%
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 50% 50%;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const UserImage = styled.img`
  border-radius: 50px;
  width: 56px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const Username = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const Date = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Paragraph = styled.p`
  grid-row-start: 2;
  grid-row-end: 3;
`;


const UserReviews = (props) => (
  <StyledUserReviews>
      {props.reviews.map((review, index) => {
      return(
        <StyledReview key={index}>
          <UserInfo>
            <UserImage src={review.imageURL}></UserImage>
            <Username>{review.user}</Username>
            <Date>{review.date}</Date>
          </UserInfo>
        <Paragraph>{review.reviewTxt}</Paragraph>
        </StyledReview>
      )
      })}
  </StyledUserReviews>
);

export default UserReviews;