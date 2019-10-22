import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import '../Home.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#037367",
    display:"flex",
    justifyContent:'space-between',
    position:"sticky"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft:"20px",
    marginTop:"5px",
    
    
  },
  menuItemsLeft:{
display:"flex",
justifyContent:"space-between"

  },
  menuItemsRight:{
    display:"flex",
    justifyContent:"space-between"
      },
      fab :{
        marginLeft:"20px",
        marginRight:"20px",
        width:"100px",
        height:"40px",
        color:"white",
        fontStyle:"bold",
        backgroundColor:"transparent",
        border:"2px white solid"
      
      }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  

  return (

      
      <AppBar  position="static" >
        <Toolbar className={classes.root} >
          <div className={classes.menuItemsLeft}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              Remote Jobs
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Community
          </Typography>
          </div>
              <div className={classes.menuItemsRight}>
              <Typography variant="h6" className={classes.title}>
           Log In
          </Typography>
          <Fab variant="h6" aria-label="delete" className={classes.fab}>
        
        Sign Up
      </Fab>
          </div>
              
              
          
         
        </Toolbar>
      </AppBar>
  );
}