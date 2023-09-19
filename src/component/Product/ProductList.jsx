import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const deleteProduct = async (id) => {
    let result = await fetch(
      `http://localhost:5000/product/delete-product/${id}`,
      {
        method: "delete",
      }
    );
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  // console.log(products);

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S.No.</li>

        <li>Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Category</li>
        <li>Action</li>
      </ul>
      {products.map((elem, index) => (
        <ul key={elem._id}>
          <li>{index + 1}</li>
          <li>{elem.name}</li>
          <li>{elem.price}</li>
          <li>{elem.company}</li>
          <li>{elem.category}</li>
          <li>
            <button onClick={() => deleteProduct(elem._id)}>Delete</button>

            <Link to={`/update-product/${elem._id}`}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
