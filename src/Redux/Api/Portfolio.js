import baseURL from "./BaseURL";

export const getStockApi = async () => {
  const responce = await baseURL.get("/mockdata");
  return responce.data;
};
