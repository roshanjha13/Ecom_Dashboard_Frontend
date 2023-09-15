import { useState } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  //   const navigate = useNavigate();

  const submitProduct = async () => {
    if (!name || !price || !company || !category) {
      setError(true);
      return false;
    }

    // console.log(name, price, category, company);
    //set user id in local storage
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.log(userId);
    let result = await fetch("http://localhost:5000/product/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result);
  };
  return (
    <div className="register">
      <div className="register_inner">
        <h1>Add Product</h1>
        <input
          className="inputbox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter the product name"
        />
        {error && !name && <span className="error">Enter Valid Name</span>}
        <input
          className="inputbox"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter the product price"
        />
        {error && !price && <span className="error">Enter Valid price</span>}
        <input
          className="inputbox"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="enter the product category"
        />
        {error && !category && (
          <span className="error">Enter Valid Category</span>
        )}
        <input
          className="inputbox"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="enter the product company"
        />
        {error && !company && (
          <span className="error">Enter Valid Company</span>
        )}
        <button onClick={submitProduct} className="button" type="button">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
