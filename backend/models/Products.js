const mongoose = require("mongoose");
// set kiểu cho imgUrl
const imageSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// set kiểu cho size
const sizeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// set kiểu cho reviews
const reviewsSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
});

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    imgUrl: {
      type: [imageSchema],
      required: true,
    },
    size: {
      type: [sizeSchema],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: {
      type: [reviewsSchema],
      required: true,
    },
    avgRating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productsSchema)
