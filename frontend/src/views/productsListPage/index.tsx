import { ProductListPageProps } from "../../types";


const ProductListPage: React.FC<ProductListPageProps> = ({productList}) =>{

  return(
    <div>
      <h1>testando</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductListPage;