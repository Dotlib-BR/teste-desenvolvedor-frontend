import { useRoutes } from "react-router-dom";
import { useState } from "react";
import { Product } from "../types";
//Views
import ProductListPage from "../views/productsListPage";
import FormProductPage from "../views/formSearchProductPage";

export const MainRouter = () =>{
  const [ productsList, setProductsList ] = useState<Product[]>([]);

  const router = useRoutes([
    {path: "/", element: <FormProductPage setProductsList={setProductsList}/>},
    {path: "/medicamentos", element: <ProductListPage productList={productsList} />}
  ])

  return router;
}