import { ENV } from "../config/env";

export const getProducts = async (page = 1) => {
  const skip = (page - 1) * ENV.PER_PAGE_INITIAL;

  const response = await fetch(
    `${ENV.PRODUCT_API_URL}/products?limit=${ENV.PER_PAGE_INITIAL}&skip=${skip}`,
  );
  console.log("**imp",)

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
};
