import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
  Divider,
  Link,
  ListItemText,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    alignItems:'center',
    maxWidth: 645,
    background:"rgba(0,0,0,0.5)"
  },
  media: {
    height: 440,
  },
  bg:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/genshin1.jpg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover', 
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

  },
  container: {
    textAlign: 'center',
  },
  margins1:{
    marginTop:'5rem',
    alignItem:'center',
    display:'flex', justifyContent:'center'
   
  },
  margins2:{
    
    alignItem:'center',
    display:'flex', justifyContent:'center'
  },
  Title: {
    color:"#000000",
    flexGrow: 1,
    fontSize: '4rem',
    fontFamily:'Genshin',
  },
 
});
export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '10vh', minWidth: '30vh' }}>
  <Grid item xs={3}>
    <div>
     <h1  className={classes.Title}>Genshin Impact</h1> 
      </div>
          </Grid>   
          </Grid>
       
          
      <div className={classes.margins2}>
        
    <Card className={classes.root}>
    <CardActionArea href="/submit" component={Link}>
        <CardMedia
          className={classes.media}
          image="/assets/genshin2.jpg"
          title="Contemplative Reptile"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className = {classes.title}
          >
            Characters
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className = {classes.description}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
      </div>
      <div className={classes.margins1}>
        
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/assets/genshin2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className = {classes.title}
          >
            Regions
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className = {classes.description}>
          Your World to Discover
Fly across the open world, swim through crystal-clear waters, and climb towering mountains. Stray off the beaten path to discover all the hidden secrets of a world full of wonder and mystery.
          </Typography>
        </CardContent>
      </Card>
      </div>
      </div>
    
  );
};