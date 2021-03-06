import {  useEffect,useState } from "react";
import {
  Link,
} from "@material-ui/core";
import { Collapse, createStyles, IconButton} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {NHeader} from "./components/Header/Header"
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes"

export default function FrontPage() {
 


  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  
    return (
     
      <div className={classes.bg}>
          <NHeader/>
         
      <div className={classes.root} id ="header">
          
        <div className={classes.container}>
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
            <h1 className={classes.title}> Welcome to <br/> 
            Genshin<span> Impact!</span>
            </h1>
            <IconButton href="/home" component={Link}>
              <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Collapse>
            </div>
            
      </div>
      </div>
   
     
    );
  }
  
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
    height: '100vh',
    FontFamily:'Nunito',
  },
  appbar:{
    background:'none',
   
  },
  appbarWrapper:{
   width:'80%',
   margin: '0 auto',
  },
  appbartitle:{
    flexGrow: 1,
  },
  title: {
    color:"#FFFFFF",
    flexGrow: 1,
    fontSize: '4rem',
    fontFamily:'Genshin',
  },
  colorText:{
    
    color:"#FFFFFF",
    fontsize:"200rem"
  },
  goDown:{
    display: 'flex',
    color:"#FFFF",
    fontSize: '4rem',
    
  },
  icon:{
    color:"#fff",
    fontSize: '2rem',
  },
  container: {
    textAlign: 'center',
  },
  bg: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg.png'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover', 
  }
})
);
