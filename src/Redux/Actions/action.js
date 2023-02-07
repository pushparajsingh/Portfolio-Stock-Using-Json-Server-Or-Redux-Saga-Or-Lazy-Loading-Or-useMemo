import { GET_DATA_REQUESTED } from "../constants";
export const getPortfolio = () => {
  return {
    type: GET_DATA_REQUESTED,
  };
};
