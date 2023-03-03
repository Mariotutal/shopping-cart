import { PlusCircle } from "react-feather";
import useProductStore from "../../hooks/useProductStore";
import Button from "../components/Button/Button";
import styles from "./product_list.module.scss";

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://media.istockphoto.com/id/1150368715/es/foto/pata-de-pato-confit.jpg?s=1024x1024&w=is&k=20&c=tv_hCDAVdT4wjcJi91ukIbn-NjlYboOPkHPJzBkfwaI=",
    price: 9.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://example.com/product2.jpg",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://example.com/product3.jpg",
    price: 29.99,
  },
];

const ProductList = () => {
  const addToCart = useProductStore((state) => state.addToCart);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className={styles.container}>
      <h1>Lista de Productos</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>

            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} />
            </div>

            <p>${product.price}</p>
            <Button variant="primary" onClick={() => handleAddToCart(product)}>
              <span className={styles.text}>Añadir</span> <PlusCircle />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
