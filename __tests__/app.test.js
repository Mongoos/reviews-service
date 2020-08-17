var supertest = require('supertest');
var request = supertest('localhost:3000');
var React = require('react');
var userReviews = require('../data/userReviewData.js');
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//Integration tests
describe('API routes', function(){
  it ('/api/overall_reviews/1 should fetch an array of review information', function(done) {
    request.get('/api/overall_reviews/1')
    .expect(200)
    .expect(function(res) {
      expect(res.body).toEqual([
        {
            "Cleanliness": 2.2,
            "Accuracy": 1.9,
            "Communication": 2.5,
            "Check-in": 2.5,
            "Location": 2.2,
            "Value": 2.6
        },
        35,
        2.31
    ])
    })
    .end(done);
  });
  it ('/api/overall_reviews/1 should fetch an array of user reviews', function(done) {
    request.get('/api/individual_reviews/1')
    .expect(200)
    .expect(function(res) {
      expect(res.body).toEqual(userReviews)
    })
    .end(done);
    });
});

//end-to-end

