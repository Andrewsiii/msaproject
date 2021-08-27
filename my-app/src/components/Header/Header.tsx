import React, {  useEffect,useState } from "react";
import {
  Divider,
  Link,
  ListItemText,
} from "@material-ui/core";
import { AppBar, Collapse, createStyles, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function NHeader() {
  
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

    return ( <AppBar className = {classes.appbar} elevation ={0}>
      <Toolbar className={classes.appbarWrapper}>
         <h1 className={classes.appbartitle}>
          Genshin<span> Impact </span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon}/>
          </IconButton>
          </Toolbar>
</AppBar>
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
    FontFamily:'Nunito',
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
  bg:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg.png'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover', 
  }
})
);
