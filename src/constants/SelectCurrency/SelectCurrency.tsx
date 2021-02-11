import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_CURRENCIES = gql`
query currency {
  currency 
}
`
const SelectCurrency = (props:any) => {
  const { loading, error, data } = useQuery(GET_ALL_CURRENCIES);
  const [currencyType, setCurrencyType] = useState("USD")

  const onCurrencyChange = async (event:any) => {
    const currency = event.target.value;
    console.log('currency', currency);
    props.currencyHandler(currency);
    setCurrencyType(currency);
  }
  console.log('currencyType', currencyType);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Oops, there's an error!</p>
  return (
    <select onChange={onCurrencyChange} value={currencyType}>
      {data.currency.map((currencyType: string, i:number) => (
        <option key={i}>{currencyType}</option>
      ))}
    </select>
  )
}

export default SelectCurrency;