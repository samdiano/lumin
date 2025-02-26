import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_API_URL,
    }),
    cache: new InMemoryCache(),
  });
};

const App = () => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <div className="banner">
          <div className="container">
            <h1 className="all-products-title">All Products</h1>
            <Products />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
