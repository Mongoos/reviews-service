import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewRatings from './reviewRatings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
      totalNumber: 0
    };
    $.ajax({
      url: "/api/overall_reviews/1",
      method: "GET",
      success: (reviews) => {
        this.setState({
          reviews: reviews[0],
          totalNumber: reviews[1]
        })
      }
    });
  }

  render() {
    return (
      <div style={{
        fontFamily:"Helvetica"
      }}>
        <div className="review-header">
        <h2 style={{padding:"10px"}}> <div style={{
          display: "inline-block",
          color: "red"
        }}>★</div> Avg Overall Review Rating ({this.state.totalNumber} reviews)</h2>
        </div>
        <ReviewRatings reviews={this.state.reviews}/>
        <div className="reviews">
          <img></img>
          <div>date</div>
          <p></p>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
