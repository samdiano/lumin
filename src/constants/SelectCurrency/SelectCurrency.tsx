import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_CURRENCIES = gql`
  query currency {
    currency
  }
`;
const SelectCurrency = (props: any) => {
  const { loading, error, data } = useQuery(GET_ALL_CURRENCIES);
  const { currencyHandler, currency } = props;
  const onCurrencyChange = (event: any) => {
    const currency = event.target.value;
    currencyHandler(currency);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, there's an error!</p>;
  return (
    <select onChange={onCurrencyChange} value={currency}>
      {data.currency.map((currency: string, i: number) => (
        <option key={i}>{currency}</option>
      ))}
    </select>
  );
};

export default SelectCurrency;
