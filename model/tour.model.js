const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let tourSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    price: {
        type: String,
    },
    rating: {
        type: String,
    },
    duration: {
      type: String,
    },
    noOfPersons: {
      type: String,
    },
    featurePhoto: {
        type: Array
    },
    gallery: {
        type: Array
    },
    languages: {
      type: Array,
    },
    cancellation: {
      type: String,
    },
    highlights: {
      type: String,
    },
    includes: {
      type: String,
    },
    notIncludes: {
      type: String,
    },
    inclusions: {
      type: String,
    },
    departureDetails: {
      type: String,
    },
    knowThings: {
      type: String,
    },
    exclusions: {
      type: String,
    },
    informations: {
      type: String,
    },
    faqs: {
      type: String,
    },
    itinerarys: {
      type: String,
    },
  },
  {
    collection: "tours",
  },
);
module.exports = mongoose.model("TourSchema", tourSchema);