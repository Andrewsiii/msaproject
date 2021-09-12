import React from "react";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listText: {
    fontFamily:'Genshin',
    color: "black",
  },
  fullList: {
    width: "auto",
  },
});
const names = [
  "Albedo","Amber","Barbara","Beidou","Bennett","Chongyun","Diluc","Diona","Eula","Fischl","Ganyu","HuTao","Jean","Kazuha","Kaeya","Ayaka",
  "Keqing","Klee","Lisa","Ningguang","Noelle","Qiqi","Razor","Rosaria","Sayu","Sucrose","Tartaglia","Traveler","Venti","Xiangling","Xiao",
  "Xingqiu","Xinyan","Yanfei","Yoimiya","Zhongli","Mona","Raiden","KujouSara","Aloy"
]
export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List>
        <ListItem button href="/home" component={Link}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button href="/character" component={Link} >
          <ListItemIcon>
            <ArrowUpwardIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Character" />
          
        </ListItem>
        {names.map((name) =>(
        <ListItem button href={name} component={Link}>
        <ListItemText className={classes.listText} primary={name} />
        </ListItem>
        ))}
      </List>
    </div>
  );
};