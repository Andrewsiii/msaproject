import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    marginLeft:300,
    marginTop:100,
    maxWidth: 500,
    border: 30,
    borderColor: "green",
    background:"rgba(0,0,0,0.4)"
  },
  media: {
    height: 430,
  },
  writing:{
    fontSize:"1.5rem",
    color:'#FFFFFFFF',
    fontFamily:'Genshin'
}
});

export interface CharacterTextProps {
   
    cardTitle: string;
    cardMedia: string
};
const PictureCard= ({ cardMedia, cardTitle} : CharacterTextProps) => {
    const classes = useStyles();
    
    
    return (
      <Card className={classes.root}  >
        
          <CardMedia
            className={classes.media}
            
            image= {cardMedia} 
            
          />
         <CardContent>
         <Typography className={classes.writing} >
            {cardTitle}
          </Typography>
         </CardContent>
      
      </Card>
    );
  }
export default PictureCard;
    