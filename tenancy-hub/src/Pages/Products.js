import React, { useEffect, useContext } from "react";
import ProductCard from "../components/Productcard/ProductCard";
import ProductContext from "../Context/ProductItems/ProductContext";
import { toast } from "react-toastify";
import { Skeleton } from "antd";
import { BackTop } from "antd";
import "antd/dist/antd.css";

const Products = () => {
  const productContext = useContext(ProductContext);
  const { items, addToCart, getItems, loading } = productContext;

  const notify = () =>
    toast.success("Added to cart !", {
      position: "top-right",
      autoClose: 2000,
    });

  const onClickToCart = (item) => {
    addToCart(item);
    notify();
  };

  useEffect(() => {
    getItems();
    //eslint-disable-next-line
  }, []);

  if (items !== null && loading) {
    return (
      <div className="container">
        <Skeleton active />
        <br />
        <Skeleton active />
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ marginBottom: "100px" }}>
      <div className="row">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onClickToCart={onClickToCart}
          />
        ))}
      </div>
      <BackTop />
    </div>
  );
};

export default Products;
