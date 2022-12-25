import React, { useState } from "react";
import "./Popular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Popular = ({ cartcount, modifycart }) => {
  const [show, setshow] = useState(true);

  const cartdata = () => {
    if (show) {
      modifycart(cartcount + 1);
    } else {
      modifycart(cartcount - 1);
    }
  };

  const toggles = () => {
    setshow(!show);
  };

  return (
    <div>
      <div className="product_list">
        <div className="parent">
          <h2>
            450 <FontAwesomeIcon icon={faXmark} /> 300
          </h2>
          <span className="sale">sale</span>
        </div>
        <div className="child">
          <h3>Sale Item</h3>

          <h6>
            <s>$50.00 </s> - $25.00
          </h6>
        </div>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => {
              toggles();
              cartdata();
            }}
          >
            {show ? <p>Add to cart</p> : <p>Remove to cart</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
