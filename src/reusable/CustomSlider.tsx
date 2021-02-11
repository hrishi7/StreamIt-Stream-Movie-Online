import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
// @ts-ignore
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  imagePoster: {
    height: "350px",
  },
}));

export const CustomSlider: React.FC<any> = (props) => {
  const { items } = props;
console.log(items)
  return (
    <Carousel interval={15000} animation="slide">
      {
        //@ts-ignore
        items.map((item, i) => (
          <Item key={i} item={item} />
        ))
      }
    </Carousel>
  );
};

function Item(props: any) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {props.item.map((one: any) => (
        <div>
          <img
            className={classes.imagePoster}
            src={`https://image.tmdb.org/t/p/w500/${one.poster_path}`}
            alt="${props.item.title}"
          ></img>
          <h2>{one.title}</h2>
          {/* <p>{one.overview}</p> */}

          <Button className="CheckButton">Check it out!</Button>
        </div>
      ))}
    </Paper>
  );
}
