import React, { useState } from "react";
import { usePostItemsQuery } from "../../../features/api";
import { useDispatch, useSelector } from "react-redux";
import { CartToggle } from "../../../features/addToCart/cartStateSlice";
import { CONSTANTS } from "../../Constants/Constants";

const AddItemsCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [productdata, setProductData] = useState("");
  const [errors, setErrors] = useState(false);
  const cartState = useSelector((state) => {
    return state?.CartToggleState?.cart;
  });
  const [cart, setCart] = useState(cartState);
  const dispatchCartToggle = (cart) => {
    dispatch(CartToggle(cart));
  };
  console.log({ cartState });
  const {
    data: productsArray,
    error,
    isLoading,
  } = usePostItemsQuery(productdata, {
    refetchOnMountOrArgChange: true,
  });

  const handleSubmit = () => {
    if (name !== "" && price !== "" && img !== "") {
      setErrors(false);
      setProductData({ name, price, img });
      dispatchCartToggle(!cart);
      setCart(!cart);
      setName("");
      setPrice("");
      setImg("");
    } else {
      setErrors(true);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-50 shadow-sm p-3 mb-5 bg-white rounded">
          <div className="form-group">
            <label htmlFor="name">{CONSTANTS.NAME}</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={CONSTANTS.PRICE}>{CONSTANTS.PRICE}</label>
            <input
              type="text"
              className="form-control"
              id={CONSTANTS.PRICE}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">{CONSTANTS.IMG}</label>
            <input
              type="text"
              className="form-control"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            {errors ? (
              <p className="text-danger">{CONSTANTS?.EMPTY_FILLED_TEXT}</p>
            ) : null}
          </div>
          <div className="d-flex justify-content-center w-100 mt-2">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="btn btn-success w-50 "
            >
              {CONSTANTS.ADD_PRODUCT}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemsCard;
