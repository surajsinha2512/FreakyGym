import React from "react";

const Card = ({ data }) => {
  const cardParentStyle = {
    // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    height: "150px",
    width: "200px",
    borderRadius: "10px",
    //border: "1px solid white",
    //  position: "absolute",
    // top: "50%",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    marginRight: "25px",
    //left: "20%",
  };

  return (
    <div style={cardParentStyle}>
      <div>{data.value}</div>
      <div>{data.description}</div>
      <div>cost : `${data.cost}`</div>
    </div>
  );
};

export default Card;
