import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledUserReviews = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 20px;
`;

const StyledReview = styled.div`
  display: grid;
  width: 850px;
  grid-template-rows: 56px 50%;
  padding: 10px 10px 30px 10px;
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 8% 92%;
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
  font-weight: 600 !important;
  align-self: flex-end;
  padding-bottom: 5px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const Date = styled.div`
  color: grey;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Paragraph = styled.p`
  grid-row-start: 2;
  grid-row-end: 3;
  vertical-align: top;
  margin-top: 15px;
  line-height: 26px;
`;


const UserReviews = (props) => (
  <StyledUserReviews>
      {props.reviews.map((review, index) => {
      return(
        <StyledReview key={index}>
          <UserInfo>
            <UserImage src={review.imageURL}></UserImage>
            <Username>{review.user}</Username>
            <Date>{moment(review.date).format('MMMM YYYY')}</Date>
          </UserInfo>
        <Paragraph>{review.reviewTxt}</Paragraph>
        </StyledReview>
      )
      })}
  </StyledUserReviews>
);

export default UserReviews;