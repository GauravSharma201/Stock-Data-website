const {
  saveStocks,
  fetchStocks,
  deleteStocks,
  fetchAllData,
} = require("../controllers/stocksControllers.js");

const express = require("express");
const router = express.Router();

router.post("/saveStocks", saveStocks);
router.get("/fetchStocks/:id", fetchStocks);
router.get("/fetchAllData", fetchAllData);
router.delete("/deleteStocks/:DB_Id", deleteStocks);

module.exports.router = router;
