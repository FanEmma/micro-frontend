import baseAxios from "./request";

export const products = {
  getProducts() {
    return baseAxios("products");
  },
  filterByCategoryId(id) {
    return baseAxios(`/products/?categoryId=${id}`);
  },
};

export const categories = {
  getAllCategories() {
    return baseAxios("categories");
  },
};
