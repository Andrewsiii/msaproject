import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { 
        marginLeft:30,
        marginTop: 50,
        marginBottom:80,
      display: 'flex',
      backgroundColor:'transparent'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      
    },
    content: {
      flex: '1 0 auto',
      
    },
    cover: {
      width: 400,
    },
    writing:{
        color:'#FFFFFF',
        fontFamily:'Genshin'
    }
    
  }),
);

export default function YanfeiCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    
    <Card  className={classes.root}>
     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.writing}component="h5" variant="h5">
            Yanfei
          </Typography>
          <Typography className={classes.writing} variant="subtitle1" >
            Pyro
          </Typography>
        </CardContent>

      </div>
      <CardMedia
        className={classes.cover}
        image="/assets/YanfeiCard.png"
      />
      
    </Card>
  );
}