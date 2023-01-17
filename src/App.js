import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import NavScrollExample from "./componenets/Nav";
import Cart from "./componenets/product/Cart";
import Home from "./componenets/Home";
import Sale from "./componenets/product/Sale";
import Popular from "./componenets/product/Popular";
import Mainitem from "./componenets/product/Mainitem";
import Footer from "./componenets/Footer";
function App() {
  const [data, setdata] = useState(0);

  return (
    <div className="App">
      <NavScrollExample data={data} />
      <Home />
      <div className="content">
        <Cart cartcount={data} modifycart={setdata} />
        <Sale cartcount={data} modifycart={setdata} />

        <Popular cartcount={data} modifycart={setdata} />
        <Mainitem cartcount={data} modifycart={setdata} />
        <Sale cartcount={data} modifycart={setdata} />
        <Cart cartcount={data} modifycart={setdata} />
        <Mainitem cartcount={data} modifycart={setdata} />
        <Popular cartcount={data} modifycart={setdata} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
