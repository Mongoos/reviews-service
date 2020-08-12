import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewRatings from './reviewRatings.jsx';
import UserReviews from './individualReviews.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#app')

const Button = styled.button `
  margin: 5px;
  cursor: pointer;
  text-align: center;
  padding-top: 13px !important;
  padding-bottom: 13px !important;
  padding-left: 23px !important;
  padding-right: 23px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border: 1px solid black;
  border-radius: 8px;
  background: white;
  font-size: 16px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
      totalNumber: 0,
      userReviews: [],
      totalAvg: 0,
      showReviews: false
    };
    //get review rating categories
    $.ajax({
      url: "/api/overall_reviews/1",
      method: "GET",
      success: (reviews) => {
        this.setState({
          reviews: reviews[0],
          totalNumber: reviews[1],
          totalAvg: reviews[2]
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

  handleClose() {
    this.setState({
      showReviews: false
    })
  }
  handleShow() {
    this.setState({
      showReviews: true
    })
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
        }}>★</div> {this.state.totalAvg} ({this.state.totalNumber} reviews)</h2>
        </div>
        <ReviewRatings reviews={this.state.reviews} />
        <UserReviews reviews={this.state.userReviews.slice(0, 6)}/>
        <Modal isOpen={this.state.showReviews} onRequestClose={this.handleClose.bind(this)} style={{
          content: {
            width: "1000px",
            position: "absolute",
            left: "25%",
            borderRadius: "16px"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          }
        }}>
          Reviews will populate here
        </Modal>
        <Button onClick={this.handleShow.bind(this)}>Show all {this.state.totalNumber} reviews</Button>
        </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
