
import { Card, CardContent } from '@material-ui/core';
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
   
   Description:string
};
const CharacterDesc= ({Description} : CharacterTextProps) => {
    const classes = useStyles();
   
    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography className={classes.title}  color="textSecondary">
              {Description}
            </Typography>
          </CardContent>
        </Card>
      );
}
export default CharacterDesc; 

    