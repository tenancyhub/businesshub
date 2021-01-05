import React, { useState } from "react";
import FormInput from "../../components/Form-input/form-input.component";
import AddProduct from "../../components/CustomButton/CustomButton";
import axios from "axios";
import util from "../../utils/util";
import "./addProduct.css";

const AddFormProduct = () => {
  const [product, setProduct] = useState({
    itemName: "",
    price: "",
    image: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const { price, itemName, image, description } = product;

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product);
  };
  const validateForm = () => {
    console.log("dsdsdsdfe");
    let errors = {};
    let formIsValid = true;

    if (!product.itemName) {
      formIsValid = false;
      return (errors["itemName"] = "Cannot be empty");
    }
    if (!product.description) {
      formIsValid = false;
      return (errors["description"] = "Cannot be empty");
    }
    if (!product.image) {
      formIsValid = false;
      return (errors["image"] = "Please an image for item ");
    }
    if (!product.price) {
      formIsValid = false;
      return (errors["price"] = "Cannot be empty");
    }
    // if (!product.currencyType) {
    //   formIsValid = false;
    //   return (errors["currencyType"] = "Cannot be empty");
    // }
    setErrors(errors);
    return formIsValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };
      try {
        await axios.post(
          `${util}merchant`,
          {
            itemName,
            price,
            image,
            description,
          },
          config
        );
        alert("Added");
        // setproduct({
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
    }
  };

  return (
    <div className="container product-form">
      <form className="contactForm" onSubmit={onSubmit}>
        <div className="">
          <span
            className="d-block"
            style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
          >
            {errors["itemName"]}
          </span>
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
          <span
            className="d-block"
            style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
          >
            {errors["price"]}
          </span>
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
          <span
            className="d-block"
            style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
          >
            {errors["image"]}
          </span>
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
          <span
            className="d-block"
            style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
          >
            {errors["description"]}
          </span>
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
