import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 545,
    marginTop:50,
    marginLeft:20
    
  },
  article:{
      display:"flex"
  }
});
export default function Article() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardActionArea className={classes.article} >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Title articel
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <Typography variant="body2" color="textSecondary" component="p">
              Lien article
            </Typography>
       
      </Card>
    );
  }