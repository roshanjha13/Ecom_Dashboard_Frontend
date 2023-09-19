import { useState } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  //   const [error, setError] = useState(false);
  //   const navigate = useNavigate();

  const updateProduct = async () => {
    console.log(name, price, company, category);
  };
  return (
    <div className="register">
      <div className="register_inner">
        <h1>Update Product</h1>
        <input
          className="inputbox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter the product name"
        />
        {/* {error && !name && <span className="error">Enter Valid Name</span>} */}
        <input
          className="inputbox"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter the product price"
        />
        {/* {error && !price && <span className="error">Enter Valid price</span>} */}
        <input
          className="inputbox"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="enter the product category"
        />
        {/* {error && !category && (
          <span className="error">Enter Valid Category</span>
        )} */}
        <input
          className="inputbox"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="enter the product company"
        />
        {/* {error && !company && (
          <span className="error">Enter Valid Company</span>
        )} */}
        <button onClick={updateProduct} className="button" type="button">
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
