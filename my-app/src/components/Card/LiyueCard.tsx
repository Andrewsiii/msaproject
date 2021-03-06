import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
  Link,
} from "@material-ui/core";

export default function LiyueCard() {
    const classes = useStyles();
    return(
<Card className={classes.root}>
<CardActionArea href="/Liyue" component={Link}>
    <CardMedia
      className={classes.media}
      image="/assets/LiyueCard.png"
      title="Contemplative Reptile"
    />
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" className = {classes.title}
      >
        Liyue
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p" className = {classes.description}>
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        across all continents except Antarctica
      </Typography>
    </CardContent>
    </CardActionArea>
  </Card>
    )
}
const useStyles = makeStyles({
    root: {
      alignItems:'center',
      maxWidth: 800,
      marginLeft:50,
      marginTop: 80,
      marginRight: 50,
      marginBottom: 100,
      background:"rgba(0,0,0,0.5)"
    },
    media: {
      height: 440,
      width: 600,
    },
    title: {
      fontSize:"3rem",
      fontWeight:"bold",
      color:"#fff",
      fontFamily:'Genshin',
    },
    description:{
      
      fontFamily:'Genshin',
      fontSize:"1.5rem",
      
      color:"#fff"
    }
})
  