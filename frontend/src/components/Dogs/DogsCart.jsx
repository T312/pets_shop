import React, { useState } from "react";
import { useContext } from "react";
import "./dogs.css";
import { CartContext } from "../Context/CartContext";
const DogsCart = (props) => {
  const { id, name, breed, description, price, imgUrl } = props;
  const { addToCart, setTotal } = useContext(CartContext);
  const [isAdded, setAdded] = useState(false);
  const handelClick = () => {
    setAdded(true);
    const newItems = {
      id: id,
      name: name,
      price: price,
      image: imgUrl,
    };
    addToCart((items) => [...items, newItems]);
    setTotal((total) => (total += Number.parseInt(price)));
  };
  return (
    <>
      <section className="dogs">
        <div className="dog-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-im-container">
          <img className="dog-img" src={imgUrl} alt={`pictures of ${name}`} />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded ? (
          <button disabled className="dogs-btn-disabled">
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handelClick}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};

export default DogsCart;
