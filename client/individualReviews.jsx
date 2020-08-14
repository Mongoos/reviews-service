import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledUserReviews = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding-top: 20px;
`;

const StyledReview = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 56px 50%;
  padding: 10px 5% 30px 10px;
`;

const User = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 10% 90%;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const UserInfo = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 3;
  width: 100%;
  float: left;
`;

const UserImage = styled.img`
  border-radius: 50px;
  width: 56px;
  grid-column-start: 1;
  grid-column-end: 2;
  margin-right: 5%;
`;

const Username = styled.div`
  font-weight: 600 !important;
  font-size: 16px;
`;

const Date = styled.div`
  color: grey;
  font-size: 14px;
  margin-top: 3px;
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
          <User>
            <UserImage src={review.imageURL}></UserImage>
            <UserInfo>
              <Username>{review.user}</Username>
              <Date>{moment(review.date).format('MMMM YYYY')}</Date>
            </UserInfo>
          </User>
        <Paragraph>{review.reviewTxt}</Paragraph>
        </StyledReview>
      )
      })}
  </StyledUserReviews>
);

export default UserReviews;