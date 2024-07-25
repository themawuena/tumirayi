const enviroment = {
  dev: {
    api: "https://tumi.mawuena.com/api",
  },
  stage: {
    api: "https://tumi.mawuena.com/api",
  },
  prod: {
    api: "https://tumi.mawuena.com/api",
  },
};

export const BASE_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? enviroment.stage.api
    : enviroment.dev.api;

export const API_ENDPOINT = {
  // MERCHANT
  LOGIN_URL: BASE_ENDPOINT + "/merchant/login",
  REGISTER_URL: BASE_ENDPOINT + "/merchant/register",
  // STORE
  CREATE_STORE: BASE_ENDPOINT + "/merchants",
  GET_ALL_STORE: BASE_ENDPOINT + "/merchants",
  // PRODUCTS
  PRODUCTS: BASE_ENDPOINT + "/stores",
  ADDPRODUCT: BASE_ENDPOINT + "/stores",
};
// GET API https://tumi.mawuena.com/api/stores/{store_id/products/{product_id}
// GET https://tumi.mawuena.com/api/merchants/{merchant_id}/stores
// /merchants/{merchant_id}/stores/{store_id}