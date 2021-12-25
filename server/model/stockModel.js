const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
  stockId: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  symbol: {
    type: String,
    required: true,
  },
  market_cap: { type: Number, required: true },
  current_price: {
    type: Number,
    required: true,
  },
});

module.exports.stock = new mongoose.model("stock", stockSchema);
