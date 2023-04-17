import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddToCard, Home, Products } from "../../Organisms";
import Checkout from "../../Organisms/Checkout/Checkout";
import { CONSTANTS } from "../../Constants/Constants";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path={CONSTANTS.HOME_ROUTE} element={<Home />} />
        <Route exact path={CONSTANTS.PRODUCTS_ROUTE} element={<Products />} />
        <Route
          exact
          path={CONSTANTS.ADD_PRODUCTS_ROUTE}
          element={<AddToCard />}
        />
        <Route exact path={CONSTANTS.CHECKEDOUT_ROUTE} element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Routers;
