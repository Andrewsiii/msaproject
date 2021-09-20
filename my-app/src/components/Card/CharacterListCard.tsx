
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { 
        marginLeft:30,
        marginTop: 50,
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
      width: 1000,
    },
    writing:{
        color:'#FFFFFF',
        fontFamily:'Genshin'
    }
    
  }),
);
export interface CharacterTextProps {
   
    cardTitle: string;
    cardMedia: string;
    cardVision: string;
};

const CharacterListCard= ({ cardMedia, cardTitle,cardVision} : CharacterTextProps) => {
   
  const classes = useStyles();
  

  return (
    <CardActionArea href={cardTitle} >
    <Card  className={classes.root}>
     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.writing}component="h5" variant="h5">
           {cardTitle}
          </Typography>
          <Typography className={classes.writing} variant="subtitle1" >
           {cardVision}
          </Typography>
        </CardContent>

      </div>
      <CardMedia
        className={classes.cover}
        image={cardMedia}
      />
      
    </Card>
    </CardActionArea>
  );
}
export default CharacterListCard;