import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
// @ts-ignore
import { makeStyles, Theme,Grid,Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  imagePoster: {
    height: "350px",
  },
  posterCard:{
    maxWidth:"270px",
  },
  heading:{
    color:"#1e212d",
    fontFamily:"Oxygen",
    fontWeight:"bolder",
    fontSize:"1.7rem"
  } ,
  posterTitle:{
    color:"#1e212d",
    fontWeight:800,
    fontSize:"0.9rem",
    float:"left"
  }
}));

export const CustomSlider: React.FC<any> = (props) => {
  const { items } = props;
  return (
    <Carousel interval={35000} animation="slide" indicators={false}>
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
    <div className={classes.root}>
      <Typography variant="h5" className={classes.heading}>
        Trending
      </Typography>
      <Grid container spacing={5} style={{margin:"0px auto"}}>
        {props.item.map((one: any) => (
          <Grid item className={classes.posterCard}>
            <img
              className={classes.imagePoster}
              src={`https://image.tmdb.org/t/p/w500/${one.poster_path}`}
              alt="${props.item.title}"
            ></img>
            {
              one.hasOwnProperty('title')?(
                <div style={{overflow: "hidden", textOverflow: "ellipsis", }}> 
                {/* @ts-ignore */}
                  <Typography nowrap className={classes.posterTitle}>
                  {one.title}
                  </Typography>
              </div>
                // <h3>{one.title}</h3>
              ):(
                <div style={{overflow: "hidden", textOverflow: "ellipsis", }}> 
                {/* @ts-ignore */}
                  <Typography nowrap className={classes.posterTitle}>
                  {one.name}
                  </Typography>
              </div>
              )
            }
            
            {/* <p>{one.overview}</p> */}

            <Button className="CheckButton">Check it out!</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
