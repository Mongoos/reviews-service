import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {}
    };
    $.ajax({
      url: "/api/reviews/1",
      method: "GET",
      success: (reviews) => {
        this.setState({
          reviews: reviews
        })
      }
    });
  }

  render() {
    return (
      <div>
        <div className="review-header">
        <h1>★ Avg Overall Review Rating ({this.state.reviews.numberOfReviews} reviews)</h1>
        </div>
        <div className="review-categories">
          <div id="cleanliness-box">
    <div>Cleanliness</div> <div> ----- </div> <div>{this.state.reviews.cleanliness}</div>
          </div>
          <div id="accuracy-box">
    <div>Accuracy</div> <div> ----- </div> <div>{this.state.reviews.accuracy}</div>
          </div>
          <div id="communication-box">
    <div>Communication</div> <div> ----- </div> <div>{this.state.reviews.communication}</div>
          </div>
          <div id="location-box">
    <div>Location</div> <div> ----- </div> <div>{this.state.reviews.location}</div>
          </div>
          <div id="checkin-box">
    <div>Check-in</div> <div> ----- </div> <div>{this.state.reviews.checkin}</div>
          </div>
          <div id="value-box">
    <div>Value</div> <div> ----- </div> <div>{this.state.reviews.value}</div>
          </div>
        </div>
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
