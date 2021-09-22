import { useMutation } from '@apollo/client';
import { Button, Card, CardContent, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { ADD_COMMENT } from '../../api/mutations';
import { AddComment } from '../../api/__generated__/AddComment';
import { Characters_characters_nodes_comments } from '../../api/__generated__/Characters';

const useStyles = makeStyles({
    root: {
      marginBottom:50,
      marginLeft:50,
 
      marginRight:50,
      minWidth: 275,
      background:"rgba(0,0,0,0.4)"
    },
    textbox: {
      marginBottom:100,
      marginLeft:50,
     
      fontFamily:'Genshin',
      color:'#FFFFFFFF',
      marginRight:50,
      minWidth: 300,
      background:"rgba(0,0,0,0.4)"
    },
    multilineColor:{
      color:'white',
      fontFamily:'Genshin',
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
  comments: Characters_characters_nodes_comments[]
  charid: string;
};
const CommentCard = ({comments,charid} : CharacterTextProps) => {
    const classes = useStyles();
    const [content,setContent] = useState("")
   
    const handleChange = (e: any)  => {
      setContent(e.target.value);
    };
const [addComment] = useMutation<AddComment>(ADD_COMMENT)
const handleSubmit = async() => {
  
          try {
           
              await addComment({variables: {
             
                  content: content,
                  characterId: charid,
                  townId: "1",
              
              }})
          } catch(e) {
           
          }
      } 

 
  
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
          <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
            Add Comments here:
          </Typography>
          <TextField className={classes.textbox} 
    InputProps={{
      className: classes.multilineColor
    }} variant="filled"
    value ={content}
    onChange = {handleChange}/>
   <Button variant="contained" onClick={handleSubmit} size="large">Add Comment</Button>
          </CardContent>
          </Card>
          
        </div>
        );

  
        
}
export default CommentCard; 

    