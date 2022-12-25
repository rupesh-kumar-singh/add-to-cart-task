import React, { useState } from "react";
import "./Sale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Sale = ({ cartcount, modifycart }) => {
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

  console.log(cartcount);
  return (
    <div>
      <div className="product_list">
        <div className="saleitem">
          <h2>
            450 <FontAwesomeIcon icon={faXmark} /> 300
          </h2>
          <span>sale</span>
        </div>
        <div className="child">
          <h3>Special item</h3>

          <h6>
            <s>$40.00 </s> - $18.00
          </h6>
        </div>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => {
              toggles();
              cartdata();
              // props.modifycart(props.cartcount + 1);
            }}
          >
            {show ? <p>Add to cart</p> : <p>Remove to cart</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
