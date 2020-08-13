import React from 'react';
import $ from 'jquery';
import ReviewRatings from './reviewRatings.jsx';
import UserReviews from './individualReviews.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';

// Modal.setAppElement('#app')

const Button = styled.button`
  margin: 5px;
  cursor: pointer;
  text-align: center;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  line-height: 20px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 8px;
  background: white;
  font-size: 16px;
`;

const TotalReviews = styled.h2`
  font-weight: 600;
  font-size: 22px;
  padding: 10px;
`;

const ModalReviewCategories = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const ModalUserReviews = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
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

  }

  componentDidMount() {
    const urlID = window.location.href.split('/')[3];
    console.log(urlID);
    this.fetchListingInfo(urlID);
  }

  fetchListingInfo(urlID) {
    //get review rating categories
    $.ajax({
      url: `/api/overall_reviews/${urlID}`,
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
      url: `/api/individual_reviews/${urlID}`,
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
        <TotalReviews> <div style={{
          display: "inline-block",
          color: "red"
        }}>★</div> {this.state.totalAvg} ({this.state.totalNumber} reviews)</TotalReviews>
        </div>
        <ReviewRatings reviews={this.state.reviews} />
        <UserReviews reviews={this.state.userReviews.slice(0, 6)}/>
        <Modal isOpen={this.state.showReviews} onRequestClose={this.handleClose.bind(this)} style={{
          content: {
            width: "1000px",
            position: "absolute",
            left: "25%",
            borderRadius: "16px",
            display: "grid",
            gridColumnTemplate: "50% 50%",
            fontFamily: "Helvetica"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          }
        }}>
          <ModalReviewCategories>
              <div className="review-header">
              <TotalReviews> <div style={{
                display: "inline-block",
                color: "red"
              }}>★</div> {this.state.totalAvg} ({this.state.totalNumber} reviews)</TotalReviews>
            </div>
            <ReviewRatings reviews={this.state.reviews} />
          </ModalReviewCategories>
          <ModalUserReviews>
          <UserReviews reviews={this.state.userReviews}/>
          </ModalUserReviews>
        </Modal>
        <Button onClick={this.handleShow.bind(this)}>Show all {this.state.totalNumber} reviews</Button>
        </div>
    )
  }
}

export default App;