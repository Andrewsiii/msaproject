import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles({

  bg:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/genshin1.jpg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover', 
  },
  title: {
    color:"#FFFFFF",
    flexGrow: 1,
    fontSize: '4rem',
    fontFamily:'Genshin',
  },
  container:{
    textAlign: 'center',
  }
 
});
export const Page = () => {
  const classes = useStyles();

  return (
    <img id="imgHome" src="assets/AlbedoCard.png">
        </img>
  
  );
  };