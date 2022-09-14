import React from "react";

export default function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dicta
          consequatur doloribus, temporibus fugit dolor iste deserunt
          perspiciatis dolorem voluptatum natus facere veniam recusandae
          distinctio. Expedita recusandae velit earum ipsa quam voluptates,
          natus porro cum?
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}
