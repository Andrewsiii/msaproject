import React from "react";
import "./App.css";
import  NHeader from "./components/Header/Header"
import { Footer } from "./components/Footer";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from 'react-router';
import { HomePage } from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import FrontPage from "./FrontPage";
import { CharacterPage } from "./CharacterListPage";
import {RegionPage} from "./RegionPage"; 
import {Page} from "./Page/Page";

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
    <div className="App">
  
    <BrowserRouter>
    
      <Switch>
      <Route exact path="/" component={FrontPage}/>
      <Route path="/home" component={HomePage} />
      <Route path="/Region" component={RegionPage} />
      <Route path="/character" component={CharacterPage} />
      </Switch>
      </BrowserRouter>
      <Footer/>
      </div>
    
  );
}

export default App;