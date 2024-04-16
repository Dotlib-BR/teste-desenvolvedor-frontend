import { useRoutes } from "react-router-dom";
import FormProduct from "../views/formProduct";

//Views

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <FormProduct />},
  ])

  return router;
}