import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewRatings from './reviewRatings.jsx';
import IndividualReviews from './individualReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
      totalNumber: 0,
      userReviews: []
    };
    //get review rating categories
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
    //get individual reviews
    $.ajax({
      url: "/api/individual_reviews/1",
      method: "GET",
      success: (reviews) => {
        this.setState({
          userReviews: reviews
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
        <ReviewRatings reviews={this.state.reviews} />
        <IndividualReviews reviews={this.state.userReviews}/>
        </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
