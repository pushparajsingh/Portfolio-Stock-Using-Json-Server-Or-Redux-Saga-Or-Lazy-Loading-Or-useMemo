import { GET_DATA_FAILURE, GET_DATA_SUCCESS } from "../constants";
const initialState = {
  data: "",
  error: "",
};

const PortfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
export default PortfolioReducer;
