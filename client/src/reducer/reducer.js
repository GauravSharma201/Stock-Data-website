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
} from "../actions/actionTypes";

export const stockReducer = (state = { stocks: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_REQ:
      return {
        loading: true,
      };
    case FETCH_ALL_SUCC:
      return {
        loading: false,
        stocks: action.payload,
      };
    case FETCH_ALL_FAIL:
      return {
        ...state,
        loading: false,
        fetchAllErr: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        fetchAllErr: null,
      };
    default:
      return state;
  }
};

export const specStockReducer = (state = { specStock: {} }, action) => {
  switch (action.type) {
    case FETCH_REQ:
      return {
        specLoading: true,
      };
    case FETCH_SUCC:
      return {
        specLoading: false,
        specStock: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        specLoading: false,
        specFetchErr: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        specFetchErr: null,
      };
    default:
      return state;
  }
};

export const saveStockReducer = (state = { saveStock: {} }, action) => {
  switch (action.type) {
    case SAVE_REQ:
      return {
        saveLoading: true,
      };
    case SAVE_SUCC:
      return {
        saveLoading: false,
        saveStock: action.payload,
      };
    case SAVE_FAIL:
      return {
        ...state,
        saveLoading: false,
        saveErr: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        saveErr: null,
      };
    default:
      return state;
  }
};

export const deleteStockReducer = (state = { delStock: false }, action) => {
  switch (action.type) {
    case DELETE_REQ:
      return {
        delLoading: true,
      };
    case DELETE_SUCC:
      return {
        delLoading: false,
        delStock: true,
        delMesg: action.payload,
      };
    case DELETE_FAIL:
      return {
        ...state,
        delLoading: false,
        delStock: false,
        delErr: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        delErr: null,
      };
    default:
      return state;
  }
};
