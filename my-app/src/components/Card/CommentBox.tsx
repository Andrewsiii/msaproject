
import { Button, Card, CardActionArea, CardContent, CardHeader, Dialog, DialogTitle, Divider } from '@material-ui/core';
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
   
    comment:string ;
};
const CommentCard= ({comment} : CharacterTextProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            
          <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Comments:
            </Typography>
            
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {comment}
            </Typography>
            
          </CardContent>
         
        </Card>
      );
}
export default CommentCard; 

    