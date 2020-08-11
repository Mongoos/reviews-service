import React from 'react';

const ReviewCategory = (props) => (
  <div style={{
    display:"grid",
    gridColumnStart: props.evenOrOdd,
    gridColumnEnd: props.evenOrOdd + 1,
    gridTemplateColumns:"70% 20% 10%",
    padding: "10px 100px 10px 10px"
  }}>
    <div style={{
      gridColumnStart: 1,
      gridColumnEnd: 2
    }}>{props.category}</div>
    <div style={{
      gridColumnStart: 2,
      gridColumnEnd: 3
    }}>-----</div>
    <div style={{
      gridColumnStart: 3,
      gridColumnEnd: 4
    }}>{props.rating}</div>
  </div>
)

export default ReviewCategory;