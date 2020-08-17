import React from 'react';
import styled from 'styled-components';
import moment from 'moment';


const StyledUserReviews = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: 10px;
`;

const StyledReview = styled.div`
  display: grid;
  grid-template-rows: 56px 50%;
  padding: 10px;
  display: inline-block;
  min-height: 160px;
  margin-right: 50px;
`;
const User = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 3;
  padding-top: 10px;
  padding-left: 10px;
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