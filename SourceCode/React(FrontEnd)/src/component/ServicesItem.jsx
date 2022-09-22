import React from "react";

const ServicesItem = (props) => {
  let { title, description, imageUrl } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        ></div>
        <img
          src={
            !imageUrl
              ? "https://www.shutterstock.com/search/plumber-cartoon"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
