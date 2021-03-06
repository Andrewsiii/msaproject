import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './fonts/Genshin.ttf';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client'


const graphQLClient = new ApolloClient({
  
  uri: "https://msa-proj.azurewebsites.net/graphql/",
  
  cache: new InMemoryCache()
});

ReactDOM.render(
  
  <BrowserRouter>
  <ApolloProvider client={graphQLClient}>
      <React.StrictMode>
    <App />
    </React.StrictMode>
    </ApolloProvider>
  </BrowserRouter>

  ,
  document.getElementById("root")
);