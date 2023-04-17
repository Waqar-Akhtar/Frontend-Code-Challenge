import React from "react";
import { Card } from "../../Atom";
import { useGetItemsQuery } from "../../../features/api/apiSlice";
import { useSelector } from "react-redux";
import { CONSTANTS } from "../../Constants";
const Products = () => {
  const cartState = useSelector((state) => {
    return state?.CartToggleState?.cart;
  });
  const arg = cartState;
  const {
    data: productsArray,
    error,
    isLoading,
  } = useGetItemsQuery(arg, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <h2 className="text-center my-4">Products</h2>
      {isLoading ? (
        CONSTANTS.IS_LOADING
      ) : (
        <div className="container">
          <div className="row">
            {productsArray?.map((product) => (
              <Card key={product?.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Products;
