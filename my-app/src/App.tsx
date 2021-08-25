import React from "react";
import "./App.css";
import  NHeader from "./components/Header/Header"
import { Footer } from "./components/Footer";

import { Route, Switch } from 'react-router';
import { HomePage } from "./Pages/HomePage/HomePage";
import { SubmitPage } from './Pages/SubmitPage/SubmitPage';

function App() {
  return (
    <div className="App">
      <NHeader />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;