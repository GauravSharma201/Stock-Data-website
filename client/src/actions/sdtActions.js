import {
  FETCH_ALL_REQ,
  FETCH_ALL_SUCC,
  FETCH_ALL_FAIL,
  FETCH_REQ,
  FETCH_SUCC,
  FETCH_FAIL,
  DELETE_REQ,
  DELETE_SUCC,
  DELETE_FAIL,
  SAVE_REQ,
  SAVE_SUCC,
  SAVE_FAIL,
  CLEAR_ERROR,
} from "./actionTypes";
import axios from "axios";

export const fetchAllData = () => {
  return async (dispatch) => {
    try {
      let fetchAllDataUrl = "http://localhost:5000/fetchAllData";
      dispatch({ type: FETCH_ALL_REQ });
      let { data } = await axios.get(fetchAllDataUrl);
      let result = data.response;
      dispatch({ type: FETCH_ALL_SUCC, payload: result });
    } catch (error) {
      dispatch({ type: FETCH_ALL_FAIL, payload: error });
    }
  };
};

export const saveDataFunc = (elem) => {
  return async (dispatch) => {
    try {
      let saveDataUrl = "http://localhost:5000/saveStocks";
      let Data = {
        id: elem.id,
        name: elem.name,
        symbol: elem.symbol,
        price: elem.current_price,
        market_cap: elem.market_cap,
      };
      let config = { headers: { "Content-Type": "application/json" } };
      dispatch({ type: SAVE_REQ });
      let { data } = await axios.post(saveDataUrl, Data, config);
      let result = data.data;
      dispatch({ type: SAVE_SUCC, payload: result });
    } catch (error) {
      dispatch({ type: SAVE_FAIL, payload: error });
    }
  };
};

export const viewDataFunc = (id) => {
  return async (dispatch) => {
    try {
      let fetchDataUrl = `http://localhost:5000/fetchStocks/${id}`;
      dispatch({ type: FETCH_REQ });
      let response = await axios.get(fetchDataUrl);
      let result = response.data;
      dispatch({ type: FETCH_SUCC, payload: result });
    } catch (error) {
      dispatch({ type: FETCH_FAIL, payload: error });
    }
  };
};

export const deleteDataFunc = (db_Id) => {
  return async (dispatch) => {
    try {
      let deleteDataUrl = `http://localhost:5000/deleteStocks/${db_Id}`;
      dispatch({ type: DELETE_REQ });
      let response = await axios.delete(deleteDataUrl);
      let result = response.data;
      dispatch({ type: DELETE_SUCC, payload: result });
    } catch (error) {
      dispatch({ type: DELETE_FAIL, payload: error });
    }
  };
};

export const clearError = () => {
  return async (dispatch) => {
    return dispatch({ type: CLEAR_ERROR });
  };
};
