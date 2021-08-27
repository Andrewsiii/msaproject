import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        Height: '100vh',
        backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg.png'})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover', 
    }
 
}));
export default function () {
  const classes = useStyles();
  return (
    <div className ={classes.root}>
    </div>
  );
}