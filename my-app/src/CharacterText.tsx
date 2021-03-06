import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      marginBottom:50,
      marginLeft:50,
      marginTop:100,
      marginRight:50,
      minWidth: 275,
      background:"rgba(0,0,0,0.4)"
    },
    title: {
      fontSize: 25,
      fontFamily:'Genshin',
      color:'#FFFFFFFF',
    },
    pos: {
      
      marginBottom: 12,
    },
  });
export interface CharacterTextProps {
   
    cardTitle: string;
    subHeader: string;
    cardwep: string;
    cardback:string;
    food:string;

};
const CharacterText= ({cardwep,cardback, cardTitle, subHeader,food} : CharacterTextProps) => {
    const classes = useStyles();
   
    return (
        <Card className={classes.root}>
          <CardContent>
          
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {cardTitle}
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography className={classes.title}  color="textSecondary">
              {subHeader}
            </Typography>
            <CardActionArea href={cardback}>
            <Typography className={classes.title}  component="p">
              Nation: {cardback}
            </Typography>
            </CardActionArea>
            <Typography className={classes.title}  component="p">
              Weapon: {cardwep}
            </Typography>
            <Typography className={classes.title}  component="p">
              Favourite Food : {food}
            </Typography>
          </CardContent>
         
        </Card>
      );
}
export default CharacterText; 

    