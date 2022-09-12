import React from "react";
import DogsCart from "./DogsCart";
import "./dogs.css";

const Dogs = (props) => {
  const { allDogs } = props;

  return (
    <>
      <section className="dogs-container">
        {allDogs.map((dog) => {
          return (
            <div key={dog.id}>
              <DogsCart
                id={dog.id}
                name={dog.name}
                breed={dog.breed}
                description={dog.description}
                price={dog.price}
                imgUrl={dog.imageUrl}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Dogs;
