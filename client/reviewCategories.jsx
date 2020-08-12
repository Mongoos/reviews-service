import React from 'react';
import styled from 'styled-components';


const StyledReviewCategory = styled.div`
  display: grid;
  grid-column-start: ${props => props.evenOrOdd};
  grid-column-end: ${props => ((props.evenOrOdd) + 1)};
  grid-template-columns: 70% 20% 10%;
  padding: 10px 100px 10px 10px;
`;

const CategoryName = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const RatingsBar = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
`;

const Rating = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`;


let ReviewCategory = (props) => (
  <StyledReviewCategory evenOrOdd={props.evenOrOdd}>
    <CategoryName>{props.category}</CategoryName>
    <RatingsBar>-----</RatingsBar>
    <Rating>{props.rating}</Rating>
  </StyledReviewCategory>
)

export default ReviewCategory;