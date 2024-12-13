const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    houseDetails: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Home", "Office", "Friends & Family"],
      required: true,
    },
    location: {
      type: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
