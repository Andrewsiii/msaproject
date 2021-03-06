import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
  Link,
} from "@material-ui/core";

export default function Card1() {
    const classes = useStyles();
    return(
<Card className={classes.root}>
<CardActionArea href="/character" component={Link}>
    <CardMedia
      className={classes.media}
      image="/assets/genshin_30_4K.jpeg"
      
    />
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" className = {classes.title}
      color="primary"
      >
        Characters
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p" className = {classes.description}>
        View the playable characters currently in Genshin Impact
      </Typography>
    </CardContent>
    </CardActionArea>
  </Card>
    )
}
const useStyles = makeStyles({
    root: {
      alignItems:'center',
      minWidth:500,
      maxWidth: 700,
      marginLeft:50,
      marginTop: 70,
      background:"rgba(0,0,0,0.5)"
    },
    media: {
      height: 440,
      width: 1000,
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
  