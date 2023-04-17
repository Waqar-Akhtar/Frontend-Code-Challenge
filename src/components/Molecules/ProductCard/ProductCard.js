import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

const ProductCard = () => {
  const cartProducts = useSelector((state) => {
    return state?.AddToCart?.data;
  });
  console.log({ cartProducts });
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>

            {cartProducts?.map((product) => (
              <MDBCard className="rounded-3 mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        className="rounded-3"
                        fluid
                        src={product.img}
                        alt="Cotton T-shirt"
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <p className="lead fw-normal mb-2">{product.name}</p>
                    </MDBCol>
                    <MDBCol
                      md="3"
                      lg="3"
                      xl="2"
                      className="d-flex align-items-center justify-content-around"
                    >
                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        defaultValue={2}
                        type="number"
                        size="sm"
                      />

                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <MDBTypography tag="h5" className="mb-0">
                        ${product.price}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-danger">
                        <MDBIcon fas icon="trash text-danger" size="lg" />
                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
export default ProductCard;
