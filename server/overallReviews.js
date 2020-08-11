const express = require('express');
const router = express.Router();
const Review = require('../database/connection.js');

//Render overall Rating bars
router.get("/1", (req, res) => {
  let objWithColumnArrays = {};

  Review.find({}, { cleanliness: 1, _id: 0}, (err, results) => {
    if(err) {
      res.status(500).send(err);
    }
    else {
      let cleanlinessReviews = results.map((review) => {
        return review.cleanliness;
      });

      Review.find({}, { accuracy: 1, _id: 0}, (err, results) => {
        if(err) {
          res.status(500).send(err);
        }
        else {
          let accuracyReviews = results.map((review) => {
            return review.accuracy;
          })
          Review.find({}, { communication: 1, _id: 0}, (err, results) => {
            if(err) {
              res.status(500).send(err);
            }
            else {
              let communicationReviews = results.map((review) => {
                return review.communication;
              })
              Review.find({}, { checkin: 1, _id: 0}, (err, results) => {
                if(err) {
                  res.status(500).send(err);
                }
                else {
                  let checkinReviews = results.map((review) => {
                    return review.checkin;
                  })
                  Review.find({}, { location: 1, _id: 0}, (err, results) => {
                    if(err) {
                      res.status(500).send(err);
                    }
                    else {
                      let locationReviews = results.map((review) => {
                        return review.location;
                      })
                      Review.find({}, { value: 1, _id: 0}, (err, results) => {
                        if(err) {
                          res.status(500).send(err);
                        }
                        else {
                          let valueReviews = results.map((review) => {
                            return review.value;
                          })
                          function getAverage (category) {
                            let average = 0;
                            for (var i = 0; i < category.length; i++) {
                              average += category[i];
                            }
                            return Math.floor((average/category.length) *10) / 10;
                          };
                          objWithColumnArrays['Cleanliness'] = getAverage(cleanlinessReviews);
                          objWithColumnArrays['Accuracy'] = getAverage(accuracyReviews);
                          objWithColumnArrays['Communication'] = getAverage(communicationReviews);
                          objWithColumnArrays['Check-in'] = getAverage(checkinReviews);
                          objWithColumnArrays['Location'] = getAverage(locationReviews);
                          objWithColumnArrays['Value'] = getAverage(valueReviews);
                          res.send([objWithColumnArrays, cleanlinessReviews.length]);
                        }
                      })
                      .where('locationID').equals(1);
                    }
                  })
                  .where('locationID').equals(1);
                }
              })
              .where('locationID').equals(1);
            }
          })
          .where('locationID').equals(1);
        }
      })
      .where('locationID').equals(1);
    }
  })
  .where('locationID').equals(1);
});

module.exports = router;