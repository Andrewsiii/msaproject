import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Characters_characters_nodes_comments } from '../../api/__generated__/Characters';

const useStyles = makeStyles({
    root: {
      marginBottom:50,
      marginLeft:50,
 
      marginRight:50,
      minWidth: 275,
      background:"rgba(0,0,0,0.4)"
    },
    title: {
      fontSize: 35,
      fontFamily:'Genshin',
      color:'#FFFFFFFF',
    },
    subtitle: {
      fontSize: 20,
      fontFamily:'Genshin',
      color:'#FFFFFFFF',
    },
    pos: {
      
      marginBottom: 12,
    },
  });
export interface CharacterTextProps {
  card: number;
  comments: Characters_characters_nodes_comments[]
};
const CommentCard = ({comments} : CharacterTextProps) => {
    const classes = useStyles();
    console.log(comments)
     
    var aster = comments.map(comment => {
      return (<Card className={classes.root}>
        <CardContent>
          <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
            {comment.content}
          </Typography>
          </CardContent>
          </Card>)
    })
    
    return (<div> 
      <Typography className={classes.title}> Comments: </Typography>
      
          {aster}
    
        </div>
        );

  
        
}
export default CommentCard; 

    