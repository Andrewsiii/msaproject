import React from "react";
import "./App.css";
import  NHeader from "./components/Header/Header"
import { Footer } from "./components/Footer";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from 'react-router';
import { HomePage } from "./Pages/HomePage/HomePage";
import { SubmitPage } from './Pages/SubmitPage/SubmitPage';
import ScrollPage from "./components/ScrollPage/ScrollPage";
import { BrowserRouter } from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg.png'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover', 
  }
}))
function App() {
  const classes = useStyles();
  return (
    /*<div className="App">
       <NHeader />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
      <Footer />
    </div>*/
    <div className="App">
    <BrowserRouter>
    <NHeader/>
      <Switch>
      <Route exact path="/" component={FrontPage}/>
      <Route path="/home" component={HomePage} />
      </Switch>
      </BrowserRouter>
      <Footer/>
      </div>
    
  );
}

export default App;