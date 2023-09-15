import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product/get-products");
    result = await result.json();
    setProducts(result);
  };

  console.log(products);

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
      </ul>
      {products.map((elem, index) => (
        <ul key={elem}>
          <li>{index + 1}</li>
          <li>{elem.name}</li>
          <li>{elem.price}</li>
          <li>{elem.category}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
