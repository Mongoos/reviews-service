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
      <div style={{
        fontFamily:"Helvetica"
      }}>
        <div className="review-header">
        <h2 style={{padding:"10px"}}> <div style={{
          display: "inline-block",
          color: "red"
        }}>★</div> Avg Overall Review Rating ({this.state.reviews.numberOfReviews} reviews)</h2>
        </div>
        <div className="review-categories" style={{
          display:"grid",
          gridTemplateColumns:"40% 10% 40%"
         }}>
          <div id="cleanliness-box" style={{
          display:"grid",
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridTemplateColumns:"70% 20% 10%",
          padding: "10px"
         }}> <div style={{
            gridColumnStart: 1,
            gridColumnEnd: 2
          }}>Cleanliness</div> <div style={{
            gridColumnStart: 2,
            gridColumnEnd: 3
          }}>-----</div> <div  style={{
            gridColumnStart: 3,
            gridColumnEnd: 4
          }}>{this.state.reviews.cleanliness}</div>

          </div>
          <div id="accuracy-box" style={{
          display:"grid",
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridTemplateColumns:"70% 20% 10%",
          padding: "10px"
         }}><div style={{
          gridColumnStart: 1,
          gridColumnEnd: 2
        }}>Accuracy</div> <div style={{
          gridColumnStart: 2,
          gridColumnEnd: 3
        }}>-----</div> <div style={{
          gridColumnStart: 3,
          gridColumnEnd: 4
        }}>{this.state.reviews.accuracy}</div>
          </div>
          <div id="communication-box" style={{
          display:"grid",
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridTemplateColumns:"70% 20% 10%",
          padding: "10px"
         }}><div style={{
            gridColumnStart: 1,
            gridColumnEnd: 2
          }}>Communication</div><div style={{
            gridColumnStart: 2,
            gridColumnEnd: 3
          }}>-----</div><div style={{
            gridColumnStart: 3,
            gridColumnEnd: 4
          }}>{this.state.reviews.communication}</div>
          </div>
          <div id="location-box" style={{
          display:"grid",
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridTemplateColumns:"70% 20% 10%",
          padding: "10px"
         }}><div style={{
            gridColumnStart: 1,
            gridColumnEnd: 2
          }}>Location </div><div style={{
            gridColumnStart: 2,
            gridColumnEnd: 3
          }}>-----</div> <div style={{
            gridColumnStart: 3,
            gridColumnEnd: 4
          }}>{this.state.reviews.location}</div>
          </div>
          <div id="checkin-box" style={{
          display:"grid",
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridTemplateColumns:"70% 20% 10%",
          padding: "10px"
         }}><div style={{
          gridColumnStart: 1,
          gridColumnEnd: 2
        }}>Check-in </div><div style={{
          gridColumnStart: 2,
          gridColumnEnd: 3
        }}>-----</div> <div style={{
          gridColumnStart: 3,
          gridColumnEnd: 4
        }}>{this.state.reviews.checkin} </div>
          </div>
          <div id="value-box" style={{
          display:"grid",
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridTemplateColumns:"70% 20% 10%",
          padding: "10px"
         }}><div style={{
          gridColumnStart: 1,
          gridColumnEnd: 2
        }}>Value </div><div style={{
          gridColumnStart: 2,
          gridColumnEnd: 3
        }}>-----</div> <div style={{
          gridColumnStart: 3,
          gridColumnEnd: 4
        }}>{this.state.reviews.value}</div>
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
