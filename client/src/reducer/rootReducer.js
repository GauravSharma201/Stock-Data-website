import { combineReducers } from "redux";
import {
  stockReducer,
  specStockReducer,
  saveStockReducer,
  deleteStockReducer,
} from "./reducer";

const rootReducer = combineReducers({
  stocks: stockReducer,
  stock: specStockReducer,
  savedStock: saveStockReducer,
  deleteStock: deleteStockReducer,
});

export default rootReducer;
