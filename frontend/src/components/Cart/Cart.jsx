import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router";
import "./cart.css";
const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleClickCheckOut = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const handleClickGpHome = () => {
    navigate("/");
  };
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECK OUT:</div>
        <div className="cart-items">
          {myCart.slice(1).map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.image} className="cart-item-img" alt="" />
                {item.name} : {item.price}$
              </div>
            );
          })}
          <div className="cart-total">Total: {total}$</div>
          <button className="cart-checkout" onClick={handleClickCheckOut}>
            Done
          </button>
          <button className="cart-gohome" onClick={handleClickGpHome}>
            Go Home
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
