import { useState } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  //   const navigate = useNavigate();

  const submitProduct = async () => {
    // console.log(name, price, category, company);
    //set user id in local storage
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    let result = await fetch("http://localhost:5000/product/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
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
        <input
          className="inputbox"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter the product price"
        />
        <input
          className="inputbox"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="enter the product category"
        />
        <input
          className="inputbox"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="enter the product company"
        />
        <button onClick={submitProduct} className="button" type="button">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
