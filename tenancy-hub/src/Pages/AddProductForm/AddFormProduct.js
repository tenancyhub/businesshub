import React, { useState } from "react";
import FormInput from "../../components/Form-input/form-input.component";
import AddProduct from "../../components/CustomButton/CustomButton";
import { addProductUtil } from "../../Services/AddProductsUtil";
// import { toast } from "react-toastify";
// import axios from "axios";
// import util from "../../utils/util";
import "./addProduct.css";

const AddFormProduct = (props) => {
  const [product, setProduct] = useState({
    name: "",
    amount: "",
    // file: "",
    shopId: "21",
    category: "",
    description: "",
  });
  // const [file, setFile] =useState(null)
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const productParameter = JSON.stringify(product);
  const productPayload = new FormData();
  productPayload.append("productParameter", productParameter);
  productPayload.append("file", image);
  // productPayload.append("file", e.target.files[0]);

  // const { amount, name, file, description } = product;

  //   const notify = () =>
  //   toast.success("Added to cart !", {
  //     position: "top-right",
  //     autoClose: 2000,
  //   });

  // const onClickToCart = (item) => {
  //   addToCart(item);
  //   notify();
  // };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product);

    if (e.target.name === "file") {
      setImage({ [e.target.name]: e.target.files[0] });
      console.log(image);
    }
    // console.log(product);
  };

  const triggerInputFile = (e) => {
    // setImage(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const validateForm = () => {
    console.log("dsdsdsdfe");
    let errors = {};
    let formIsValid = true;

    if (!product.name) {
      formIsValid = false;
      return (errors["name"] = "Required");
    }
    if (!product.description) {
      formIsValid = false;
      return (errors["description"] = "Required");
    }
    if (!product.shopId) {
      formIsValid = false;
      return (errors["shopId"] = "Required");
    }
    if (!product.category) {
      formIsValid = false;
      return (errors["category"] = "Required");
    }
    if (!product.file) {
      formIsValid = false;
      return (errors["image"] = "Upload an image for item ");
    }
    if (!product.amount) {
      formIsValid = false;
      return (errors["amount"] = "Required");
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
    if (validateForm()) {
      addProductUtil(setErrors, productPayload);

      // const config = {
      //   headers: {
      //     "content-Type": "application/json",
      //   },
      // };
      // try {
      //   await axios.post(
      //     `${util}`,
      //     {
      //       name,
      //       amount,
      //       file,
      //       description,
      //     },
      //     config
      //   );
      //   alert("Added");
      //   // setproduct({
      //   //  name: "",
      //   //   amount: "",
      //   //   image: "",
      //   //   description: "",
      //   // });
      // } catch (err) {
      //   if (err.response.data.status === 422) {
      //     alert(err.response.data.message);
      //   }
      // }
    }
  };

  return (
    <div className="container">
      <div className=" product-form">
        {/* <SideBar /> */}
        <form className="contactForm" onSubmit={onSubmit}>
          <div className="">
            <span
              className="d-block"
              style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
            >
              {errors["name"]}
            </span>
            <FormInput
              type="text"
              label="Product Name"
              name="name"
              // value={name}
              onChange={handleChange}
              placeholder="name"
            />
          </div>
          <div>
            <label>amount</label>
            <span
              className="d-block"
              style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
            >
              {errors["amount"]}
            </span>
            <FormInput
              type="text"
              // value={amount}
              name="amount"
              onChange={handleChange}
              placeholder="Item amount"
            />
          </div>
          {/* </div> */}
          <div>
            <label>Item Image</label>

            <span
              className="d-block"
              style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
            >
              {errors["file"]}
            </span>
            <label htmlFor="upload">
              Click to Upload Image for Item{" "}
              <span
                className="ml-1 fas fa-folder fa-2x"
                aria-hidden="true"
              ></span>
              <input
                type="file"
                id="upload"
                accept="image/jpeg,image/png,image/gif,image/bmp"
                style={{ display: "none" }}
                onChange={triggerInputFile}
              />
            </label>
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
          <div>
            <label>Item Category </label>
            <span
              className="d-block"
              style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
            >
              {errors["category"]}
            </span>
            <FormInput
              type="text"
              // value={amount}
              name="category"
              onChange={handleChange}
              placeholder="Category product belongs"
            />
          </div>
          <div>
            <label htmlFor="store name">Select Store to Update </label>

            <span
              className="d-block"
              style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
            >
              {errors["shopId"]}
            </span>
            <select
              value={product.shopId}
              onChange={handleChange}
              name="shopId"
            >
              <option value="SELECT STORE">SELECT STORE</option>
              {/* {props.stores.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))} */}
            </select>
          </div>

          <AddProduct type="submit" style={{ width: "100%" }}>
            Add Product
          </AddProduct>
        </form>
      </div>
    </div>
  );
};

export default AddFormProduct;
