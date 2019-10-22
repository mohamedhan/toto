import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import NavBarUser from '../components/NavBarUser'
const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#037367',
  },
  drawer: {
      
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list:{
    background: '#037367',
    color:"#FFF"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(9),
  },
}));
const SideBar = () => {
    const classes = useStyles();
    return (
        <div className="containerr">
            
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        
         <NavBarUser />
      </AppBar> 
      
        <Drawer 
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        //   anchor="left"
        >
            <div  className={classes.toolbar}/>
          
          <List className={classes.list}>
            {['Hot', 'Trending'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <img className="image-flag" src="https://cdn1.iconfinder.com/data/icons/symbols-and-signs/96/fire-512.png" />: <img className="image-flag" src="https://cdn4.iconfinder.com/data/icons/angular-action/30/050-trending_up-arrow-chart-increase-512.png" />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={classes.list}>
            {[' Allemagne', ' Argentine', 'Australie','Autriche', ' Belgique', 'Brésil','Canada', 'Chili', ' Chine','Colombie', 'Corée du Sud', 'Costa Rica','Côte d’Ivoire', 'Croatie', 'Danemark','Égypte','Espagne','États-Unis','France','Gabon','Grèce'].map((text, index) => (
              <ListItem  button key={text}>
                <ListItemIcon>{text && <img className="image-flag" src="https://image.flaticon.com/icons/png/512/44/44942.png" />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
                
        </main>
      </div>
      </div>
    )
}

export default SideBar


