# LUMIN
[![Actions Status](https://github.com/samdiano/lumin/workflows/ci/badge.svg)](https://github.com/samdiano/lumin/actions)


This is a recreation of luminskin.com product page and cart using a GraphQL API

## Table of Contents

* [Technologies](#technologies)
* [Features Implemented](#features-implemented)
* [Getting Started](#getting-started)
  * [Installation](#installation)

## Technologies

* [React](https://reactjs.org/) - JavaScript Library for Building User Interfaces
* [Apollo Client](https://www.apollographql.com/docs/react/) - a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL

### Supporting Packages

#### Linter

* [ESLint](https://eslint.org/) - Linter Tool

## Features Implemented

### Product Page

* Should query from
https://pangaea-interviews.now.sh/api/graphql, retrieve the products and display them in a grid. Feel free to use graphql client libraries such as Apollo Client
* Each item should display the image, title, price and a "Add to Cart" button.
* For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.

### Cart

* When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.
* If the item already exists it should increment the quantity.
* Clicking the + or - buttons will increase or descrease the quantity, if the quantity is 1 and the "-" button is pressed it should remove the item.
* In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices.
* It should sum the items in the cart and display them in the correct selected currency.

## Getting Started

### Installation
* Clone this repository using `git clone git@github.com:samdiano/lumin.git`
* Use the `.env.example` file to setup your environmental variables and rename the file to `.env`
* Run `yarn install` to install all dependencies
* Run `yarn start` to start the app
* Navigate to [localhost:3000](http://localhost:3000/) in browser to access the application

##### The application is hosted at [https://compassionate-meninsky-c7a5a0.netlify.app](https://compassionate-meninsky-c7a5a0.netlify.app).

