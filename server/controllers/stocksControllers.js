const { stock } = require("../model/stockModel.js");

module.exports.saveStocks = async (req, res, next) => {
  try {
    let { id, name, symbol, price, market_cap } = req.body;
    let response = await stock.create({
      stockId: id,
      name: name,
      symbol: symbol,
      market_cap: market_cap,
      current_price: price,
    });
    res.status(201).json({ data: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.fetchStocks = async (req, res, next) => {
  try {
    let { id } = req.params;
    let response = await stock.find({ stockId: id });
    if (!response[0]) {
      return res.status(404).json({ error: "no reference found in dataBase" });
    }
    return res.status(200).json({ data: response[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.fetchAllData = async (req, res, next) => {
  try {
    let response = await stock.find();
    // if (!response[0]) {
    //   return res.status(400).json({ error: "no data found in dataBase" });
    // }
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.deleteStocks = async (req, res, next) => {
  try {
    let { DB_Id } = req.params;
    let response = await stock.findById(DB_Id);
    if (!response) {
      return res
        .status(404)
        .json({ error: "no reference found in the DataBase" });
    }
    response.remove();
    res
      .status(200)
      .json({ message: "stock deleted successfully from DataBase" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
