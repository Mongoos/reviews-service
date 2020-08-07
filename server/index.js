const express = require('express')
const app = express()
const port = 3000
const Review = require('../database/connection.js')

app.use(express.json());
app.use(express.static(__dirname + "/../public"));

app.get("/api/reviews/1", (req, res) => {
  var objWithColumnArrays = {
    cleanliness: [],
    accuracy: [],
    communication: [],
    checkin: [],
    location: [],
    value: []
  };

  return new Promise((resolve, reject) => {
    Review.find({}, { cleanliness: 1, _id: 0 })
    .then((results) => {
      objWithColumnArrays.cleanliness = results;
      Review.find({}, { accuracy: 1, _id: 0 })
      .then((results) => {
        objWithColumnArrays.accuracy = results;
        Review.find({}, { communication: 1, _id: 0 })
        .then((results) => {
          objWithColumnArrays.communication = results;
          Review.find({}, { location: 1, _id: 0 })
          .then((results) => {
            objWithColumnArrays.location = results;
            Review.find({}, { checkin: 1, _id: 0 })
            .then((results) => {
              objWithColumnArrays.checkin = results;
              Review.find({}, { value: 1, _id: 0 })
              .then((results) => {
              objWithColumnArrays.value = results;
              resolve(objWithColumnArrays);
              })
              .catch((err) => reject(err));
            })
            .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  }) .then((results) => {
    res.status(200).send(results)})
    .catch(err => console.log(err));
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});