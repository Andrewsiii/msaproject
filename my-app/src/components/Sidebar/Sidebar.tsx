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
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
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
  "Albedo","Amber","Barbara","Beidou","Bennett","Chongyun","Diluc","Diona","Eula","Fischl","Ganyu","Hu Tao","Jean","Kaedehara Kazuha","Kaeya","Kamisato Ayaka",
  "Keqing","Klee","Lisa","Ningguang","Noelle","Qiqi","Razor","Rosaria","Sayu","Sucrose","Tartaglia","Traveler","Venti","Xiangling","Xiao",
  "Xingqiu","Xinyan","Yanfei","Yoimiya","Zhongli","Mona","Raiden Shogun","Kujou Sara","Aloy"
]
const regions = ["Mondstadt","Inazuma","Liyue","Snezhnaya"]
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
        <ListItem button href="/region" component={Link} >
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Region" />
          
        </ListItem>
        <Divider />
        {regions.map((regions) =>(
        <ListItem button href={regions} component={Link}>
        <ListItemText className={classes.listText} primary={regions} />
        </ListItem>
         ))}
        </List>
    </div>
  );
};