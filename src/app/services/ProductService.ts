import { API_URL } from '../lib/contants';
import { FilterBy } from '../enums/FilterBy';
import { Product, ProductResponse } from '../types/ProductResponse';

async function getProductsByPage(page: number): Promise<ProductResponse> {
  const get = await fetch(`${API_URL}/data?_page=${page}`);
  const productsResponse: ProductResponse = await get.json();

  return productsResponse;
}

async function getProductsByFilter(
  searchText: string,
  filterBy: FilterBy,
): Promise<Product[]> {
  const get = await fetch(`${API_URL}/data`);
  const products: Product[] = await get.json();

  let filteredProducts: Product[] = [];
  if (filterBy === FilterBy.dinamic) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    if (filteredProducts.length === 0) {
      filteredProducts = products.filter((product) =>
        product.company.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
  } else if (filterBy === FilterBy.name) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  } else if (filterBy === FilterBy.company) {
    filteredProducts = products.filter((product) =>
      product.company.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  return filteredProducts;
}

export { getProductsByPage, getProductsByFilter };
