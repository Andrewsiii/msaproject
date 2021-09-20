import "./App.css";
import { Footer } from "./components/Footer";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from 'react-router';
import { HomePage } from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import FrontPage from "./FrontPage";
import { CharacterListPage } from "./CharacterListPage";
import {RegionPage} from "./RegionPage"; 
import {Page} from "./Page";

import { RegionDescPage } from "./RegionDescPage";



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
  const names = [
     "Albedo","Amber","Barbara","Beidou","Bennett","Chongyun","Diluc","Diona","Eula","Fischl","Ganyu","Hu Tao","Jean","Kaedehara Kazuha","Kaeya","Kamisato Ayaka",
     "Keqing","Klee","Lisa","Ningguang","Noelle","Qiqi","Razor","Rosaria","Sayu","Sucrose","Tartaglia","Traveler","Venti","Xiangling","Xiao",
     "Xingqiu","Xinyan","Yanfei","Yoimiya","Zhongli","Mona","Raiden Shogun","Kujou Sara","Aloy"
  ]
  const regions = ["Mondstadt","Inazuma","Liyue","Snezhnaya"]
  return (
    <div className="App">
  
    <BrowserRouter>
    
      <Switch>
     
      <Route exact path="/" component={FrontPage}/>
      <Route path="/home" component={HomePage} />
      <Route path="/Region" component={RegionPage} />
      <Route path="/character"   render={() => <CharacterListPage /> } />
      {names.map((name,index) => (<Route path={"/" +`${name}`}
      render={() => <Page card= {index} /> }
      />)) }
      {regions.map((region,index) => (<Route path={"/" +`${region}`}
      render={() => <RegionDescPage card={index} /> }
      />)) }
      
      </Switch>
      </BrowserRouter>
      <Footer/>
      </div>
    
  );
}

export default App;