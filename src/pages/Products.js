import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  const products = (
    <ul>
      {PRODUCTS.map((product) => (
        <li key={product.id}>
          <Link to={product.id}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <h1>The products Page </h1>
      {products}
    </>
  );
}

export default ProductsPage;
