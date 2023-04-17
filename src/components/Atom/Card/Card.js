import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItems } from "../../../features/addToCart/addToCartSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "bootstrap";
import { CONSTANTS } from "../../Constants/Constants";
const Cards = ({ product }) => {
  const dispatch = useDispatch();

  const dispatchCartToggle = (productData) => {
    dispatch(AddItems(productData));
  };
  return (
    <div
      key={product.id}
      className="col-sm-6 col-md-5 col-lg-4 mb-4 d-flex justify-content-center"
    >
      <MDBCard>
        <img
          src={product.img}
          alt={product.name}
          className="card-img-top mx-auto"
          style={{ width: "250px", height: "250px" }}
        />
        <MDBCardBody>
          <MDBCardTitle>{product.name}</MDBCardTitle>
          <MDBCardText>${product.price}</MDBCardText>
          <button
            className="btn btn-success mt-auto w-100"
            onClick={() => dispatchCartToggle(product)}
          >
            {CONSTANTS.ADD_CART}
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Cards;
