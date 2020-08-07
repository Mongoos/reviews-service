import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanlinessAvg: 0,
      accuracyAvg: 0,
      communicationAvg: 0,
      locationAvg: 0,
      valueAvg: 0,
      overallAvg: 0
    };
    // $.ajax({
    //   url: "/api/reviews/1",
    //   method: "GET",
    //   success: (reviews) => {
    //     this.setState({
    //       cleanlinessAvg: calculateAvg(reviews)
    //     })
    //   }
    // });
  }

  calculateAvg(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total/array.length;
  }

  render() {
    return (
      <div>
        <div className="review-header">
        <h1>★ Avg Overall Review Rating (# reviews)</h1>
        </div>
        <div className="review-categories">
          <div id="cleanliness-box">
            <div>Cleanliness</div> <div> ----- </div> <div>#</div>
          </div>
          <div id="accuracy-box">
            <div>Accuracy</div> <div> ----- </div> <div>#</div>
          </div>
          <div id="communication-box">
            <div>Communication</div> <div> ----- </div> <div>#</div>
          </div>
          <div id="location-box">
            <div>Location</div> <div> ----- </div> <div>#</div>
          </div>
          <div id="checkin-box">
            <div>Check-in</div> <div> ----- </div> <div>#</div>
          </div>
          <div id="value-box">
            <div>Value</div> <div> ----- </div> <div>#</div>
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
