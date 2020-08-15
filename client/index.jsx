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

const TotalReviews = styled.h2`
  font-weight: 600;
  padding: 10px;
`;

const ModalReviewCategories = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;
`;

const ModalUserReviews = styled.div`
  overflow-y: scroll;
  height: 90%;
  position: relative;
  flex: 0 0 750px;
  margin-top: 5px;
`;

const NormalView = styled.div`
  column-count: 2;
  font-size: 16px;
`;

const StyledModal = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  width: 100%;
  padding: 0px;
`;

const ModalHeader = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin: 0px 10px 10px 10px;
`;

const XButtonContainer = styled.div`
  height: 5%;
  width: 100%;
  position: relative;
`;
const XButton = styled.div`
  cursor: pointer;
  font-size: bold;
  display: block;
  position: absolute;
  top: 50%;
  margin-left: 20px;
`;

const ModalStyling = styled.div`
  font-size: 14px;
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
          <NormalView>
          <ReviewRatings reviews={this.state.reviews} />
          </NormalView>
          <NormalView>
          <UserReviews reviews={this.state.userReviews.slice(0, 6)}/>
          </NormalView>
        <Modal isOpen={this.state.showReviews} onRequestClose={this.handleClose.bind(this)} style={{
          content: {
            maxWidth: "60%",
            position: "absolute",
            left: "15%",
            borderRadius: "16px",
            fontFamily: "Helvetica",
            padding: "0px",
            margin: "0px"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          }
        }}>
          <StyledModal>
          <XButtonContainer>
          <XButton onClick={this.handleClose.bind(this)}>X</XButton>
          </XButtonContainer>
          <ModalReviewCategories>
              <ModalHeader> <div style={{
                display: "inline-block",
                color: "red"
              }}>★</div> {this.state.totalAvg} ({this.state.totalNumber} reviews)
              </ModalHeader>
            <ModalStyling>
            <ReviewRatings reviews={this.state.reviews} />
            </ModalStyling>
          </ModalReviewCategories>
          <ModalUserReviews>
          <UserReviews reviews={this.state.userReviews}/>
          </ModalUserReviews>
          </StyledModal>
        </Modal>
        <Button onClick={this.handleShow.bind(this)}>Show all {this.state.totalNumber} reviews</Button>
        </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
