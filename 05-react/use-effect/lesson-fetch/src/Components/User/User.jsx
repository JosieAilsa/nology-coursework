import React from "react";

const User = props => {
  const { name, imgURL } = props;

  return (
    <div>
      <h3>{name}</h3>
      <img src={imgURL} alt={name} />
    </div>
  );
};

export default User;