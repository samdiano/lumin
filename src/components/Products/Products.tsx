import React, { useState, useEffect, useCallback } from "react";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";
import CartNav from "../CartNav/CartNav";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartArr, setCartArr] = useState<any>([]);
  const [currency, setCurrency] = useState("USD");

  const GET_ALL_PRODUCTS = gql`
  query products {
    products {
      id
      title
      image_url
      price(currency: ${currency})
    }
  }
`;
  const { loading, error, data, refetch } = useQuery(GET_ALL_PRODUCTS);

  const calculateTotal:any = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < cartArr.length; i++) {
      sum += Number(cartArr[i].quantity) * Number(cartArr[i].price);
    }

    setTotal(sum);
  }, [cartArr]);


  useEffect(() => {
    calculateTotal();
  }, [cartArr, currency, calculateTotal]);

  const onToggle = () => {
    setShowModal(!showModal);
  };

  const callback = (_product: any, decrement = false, price = false) => {
    let quantity = 1;
    if (cartArr.length > 0) {
      for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id === _product.id) {
          decrement ? cartArr[i].quantity-- : cartArr[i].quantity++;
          setCartArr([...cartArr]);

          return;
        }
      }
      const product = { ..._product, quantity };
      setCartArr([...cartArr, product]);
    } else {
      const product = { ..._product, quantity };
      setCartArr([...cartArr, product]);
    }
  };
  const updatePrice = (_product: any) => {
    if (cartArr.length > 0) {
      for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id === _product.id) {
          setCartArr([...cartArr]);
          return;
        }
      }
    }
  };
  const removeItem = (id: number) => {
    const newCart = cartArr.filter((v: any) => {
      return v.id !== id;
    });
    setCartArr([...newCart]);
  };

  const currencyHandler = (currencyType: string) => {
    setCurrency(currencyType);
    refetch();
  };


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
    <React.Fragment>
      <div className="columns">
        {data.products.map((product: any) => (
          <div className="full-width md-col-4 sm-col-6" key={product.id}>
            <ProductCard
              key={product.id}
              callback={callback}
              id={product.id}
              onToggle={onToggle}
              image={product.image_url}
              title={product.title}
              currency={currency}
              price={product.price}
            />
          </div>
        ))}
      </div>
      {showModal ? (
        <CartNav
        onToggle={onToggle}
        currency={currency}
        currencyHandler={currencyHandler}
        cartArr={cartArr}
        data={data}
        updatePrice={updatePrice}
        removeItem={removeItem}
        calculateTotal={calculateTotal}
        callback={callback}
        total={total}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Products;