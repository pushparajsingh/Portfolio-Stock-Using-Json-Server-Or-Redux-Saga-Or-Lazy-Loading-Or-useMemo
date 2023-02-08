import * as TYPES from "./Stocks.type";

const initialState = {
  loading: false,
  stockData: [],
  error: false,
};

const StockReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.STOCK_LOADING:
      state = { ...state };
      break;
    case TYPES.SUCCESS:
      state = {
        ...state,
        stockData: action.payLoad,
      };
      break;
    case TYPES.ERROR:
      state = {
        ...state,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default StockReducer;
