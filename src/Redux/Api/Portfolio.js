import baseURL from "./BaseURL";

export const portfolioApi = async () => {
  const responce = await baseURL.get("/mockdata");
  return responce.data;
};
