import React from 'react';
import { Button, Card, CardActionArea, CardContent, CardHeader, Dialog, DialogTitle, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
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
    url: string;
};
const CharacterText= ({cardwep,cardback, cardTitle, subHeader, url} : CharacterTextProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {cardTitle}
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {subHeader}
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
}
export default CharacterText; 

    