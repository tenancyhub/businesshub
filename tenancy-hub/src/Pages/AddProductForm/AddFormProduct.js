import React, { useState } from "react";
import FormInput from "../../components/Form-input/form-input.component";
import AddProduct from "../../components/CustomButton/CustomButton";
import axios from "axios";
import util from "../../utils/util";
import "./addProduct.css";

const AddFormProduct = () => {
  const [user, setUser] = useState({
    itemName: "",
    price: "",
    image: "",

    description: "",
  });
  const { price, itemName, image, description } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const onSubmit = async (event) => {
    // e.peventDefault();
    event.preventDefault();

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        `${util.API_BASE_URL}register-merchant`,
        {
          itemName,
          price,
          image,
          description,
        },
        config
      );
      alert("Added");
      // setUser({
      //  itemName: "",
      //   price: "",
      //   image: "",
      //   description: "",
      // });
    } catch (err) {
      if (err.response.data.status === 422) {
        alert(err.response.data.message);
      }
    }
  };

  return (
    <div className="container product-form">
      <form className="contactForm" onSubmit={onSubmit}>
        <div className="">
          <FormInput
            type="text"
            label="Product Name"
            name="itemName"
            // value={itemName}
            onChange={handleChange}
            placeholder="itemName"
          />
        </div>
        <div>
          <label>Price</label>
          <FormInput
            type="text"
            // value={price}
            name="price"
            onChange={handleChange}
            placeholder="Item price"
          />
        </div>
        {/* </div> */}
        <div>
          <label>Item Image</label>
          <FormInput
            type="file"
            //   value={image}
            name="image"
            onChange={handleChange}
            placeholder="Upload image "
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            className="group mb-4"
            name="description"
            //   value={description}
            onChange={handleChange}
            placeholder="Item description"
            //   style={{ width: "100%" }}
            rows="3"
          ></textarea>
        </div>

        <AddProduct type="submit" style={{ width: "100%" }}>
          Add Product
        </AddProduct>
      </form>
    </div>
  );
};

export default AddFormProduct;
