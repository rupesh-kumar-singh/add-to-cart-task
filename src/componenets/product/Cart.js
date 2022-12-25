import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  return (
    <div>
      <div className="product_list">
        <h2>
          450 <FontAwesomeIcon icon={faXmark} /> 300
        </h2>
        <div className="child">
          <h3>Fancy Product</h3>
          <h6>$40.00 - $80.00</h6>
        </div>
        <div className="buttons">
          <button className="btn">View options</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
