const express = require('express')
const app = express()
const port = 3000
const Review = require('../database/connection.js')

app.use(express.json());
app.use(express.static(__dirname + "/../public"));

//Render overall Rating bars
app.get("/api/reviews/1", (req, res) => {
  let objWithColumnArrays = {
    cleanliness: [],
    accuracy: [],
    communication: [],
    checkin: [],
    location: [],
    value: [],
    numberOfReviews: 0
  };

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
                          objWithColumnArrays.cleanliness = getAverage(cleanlinessReviews);
                          objWithColumnArrays.accuracy = getAverage(accuracyReviews);
                          objWithColumnArrays.communication = getAverage(communicationReviews);
                          objWithColumnArrays.checkin = getAverage(checkinReviews);
                          objWithColumnArrays.location = getAverage(locationReviews);
                          objWithColumnArrays.value = getAverage(valueReviews);
                          objWithColumnArrays.numberOfReviews = cleanlinessReviews.length;
                          res.send(objWithColumnArrays);
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


})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});