import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  endpoints: (builder) => {
    return {
      getItems: builder.query({
        query: (arg) => {
          console.log("im here");
          return "/items";
        },
      }),
      PostItems: builder.query({
        query: (data) => {
          const { name, price, img } = data;
          if (name !== "" && price !== "" && img !== "" && data !== "") {
            console.log("im here in post");
            return {
              url: "/items",
              method: "POST",
              body: data,
            };
          }
        },
      }),
    };
  },
});

export const { useGetItemsQuery, usePostItemsQuery } = apiSlice;
