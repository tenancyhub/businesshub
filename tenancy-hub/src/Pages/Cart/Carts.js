import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/ProductItems/ProductContext";
import PayWithStripeBtn from "../../components/StripeGateway/PayWithStripeBtn";
import "./carts.css";
import CartEmpty from "../Cart/cart-empty.svg";

const Carts = () => {
  const productContext = useContext(ProductContext);

  const { cart } = productContext;

  const { deleteItem, decreaseCart, addToCart } = productContext;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total;
    cart.reduce(
      (allQty, item) => (total = allQty + item.quantity * item.price),
      0
    );
    // console.log(total);
    setTotal(total);
    localStorage.setItem("total", total);

    // setinCart(JSON.parse(window.localStorage.getItem("inCart")));
    // getAmountToPay(cart);
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <div className="no-item">
        <div className="mt-2">
          <img src={CartEmpty} alt="empty-cart" width="250px" />
        </div>
        <p className="d-block">Your Cart is empty</p>
        <Link
          to="/"
          className="p-3 no-itembtn bg-info text-white"
          style={{
            border: "1px solid",
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          &#8656; Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-lg-5">
      {" "}
      <Table hover borderless responsive>
        <thead>
          <tr>
            <th>Items</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((t, index) => (
            <tr key={index}>
              <td>
                <img
                  src={t.image}
                  className="img-fluid"
                  alt="item"
                  width="100px"
                />
              </td>
              <td>{t.title}</td>
              <td>
                {" "}
                <span onClick={() => decreaseCart(t)} className="pointer">
                  {" "}
                  &#10094;{" "}
                </span>
                {t.quantity}{" "}
                <span onClick={() => addToCart(t)} className="pointer">
                  {" "}
                  &#10095;
                </span>
              </td>
              <td>&#8358; {t.price * t.quantity}</td>
              <td onClick={() => deleteItem(t)}>
                <i
                  className="fas fa-trash fa-lg p-2"
                  style={{ color: "black" }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4 className="text-right p-2">
        {" "}
        TOTAL : &#8358;
        {total.toFixed(2)}{" "}
        {/* {localStorage.getItem("total") ? localStorage.getItem("total") : 0}{" "} */}
      </h4>
      <div className="row mt-4 mb-5 ">
        <Link
          to="/"
          className="p-3 m-auto text-white  "
          style={{
            border: "1px solid",
            backgroundColor: "#2dcc5d",
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          Continue Shopping
        </Link>
        <span
          className="p-3 m-auto text-white "
          style={{ border: "1px solid", backgroundColor: "#2dcc5d" }}
        >
          <PayWithStripeBtn price={localStorage.total} />
        </span>
      </div>
    </div>
  );
};

export default Carts;
