import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Badge from "@material-ui/core/Badge";
import LocationCityIcon from '@material-ui/icons/LocationCity';import VisibilityIcon from '@material-ui/icons/Visibility';
import NotesIcon from '@material-ui/icons/Notes';

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "50px auto",
    
  },
  actions: {
    margin: "auto 50px",
    width: "100%"
  },
  badge: {
    margin: " 0 50px"
  },
  media: {
    width: 400,
    height: 400,
    border: "solid #d17373"
  },
  name: {
    margin: "0",
    fontSize: "25px",
    textAlign: "center"
  }
});

export default function PersonCardCom() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/1719641/pexels-photo-1719641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <h6 className={classes.name}>
            <strong>Schroder, Nina</strong>
          </h6>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.actions}>
        <Badge className={classes.badge} badgeContent={285334} color="secondary">
          <VisibilityIcon />
        </Badge>
        <Badge className={classes.badge} badgeContent={87347} color="secondary">
          <LocationCityIcon />
        </Badge>
        <Badge className={classes.badge} badgeContent={4} color="secondary">
          <NotesIcon />
        </Badge>
      </CardActions>
    </Card>
  );
}
