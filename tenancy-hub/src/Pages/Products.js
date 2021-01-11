import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Skeleton } from "antd";
import ProductCard from "../components/Productcard/ProductCard";
import { connect } from "react-redux";
import { addToCart, getItems } from "../actions/productAction";
import { BackTop } from "antd";
import "antd/dist/antd.css";

const Products = ({
  product: { items, loading },
  match,
  addToCart,
  getItems,
}) => {
  const notify = () =>
    toast.success("Added to cart !", {
      position: "top-right",
      autoClose: 2000,
    });

  const onClickToCart = (item) => {
    addToCart(item);
    notify();
  };
  // const { storeName } = props.match.params;
  const {
    params: { storeName },
  } = match;

  useEffect(() => {
    getItems(storeName);
    console.log(storeName);

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
    <div
      className="container-fluid offset-1 mt-5"
      style={{ marginBottom: "100px" }}
    >
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

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { addToCart, getItems })(Products);
