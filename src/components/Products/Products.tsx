import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

const GET_ALL_PRODUCTS = gql`
  query products {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }
`;

interface IProduct {
  id: string;
  image_url: string;
  title: string;
  price: string;
}

const Products = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <div className="columns">
      {data.products.map((product: IProduct) => (
        <div className="full-width md-col-4 sm-col-6" key={product.id}>
          <ProductCard
            key={product.id}
            image={product.image_url}
            title={product.title}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
