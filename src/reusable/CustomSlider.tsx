import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Tooltip,Fab} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
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
  },
  posterReleaseDate:{
    float: 'left',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  button: {
    margin: theme.spacing(1),
  }
  ,
  fabPlayButton:{
    color: '#fff',
    backgroundColor:' #1e212d',
    width: '45px',
    height: '45px',
    margin: theme.spacing(1),
  },
  fabAddButton:{
    color: '#1e212d',
    width: '45px',
    height: '45px',
    margin: theme.spacing(1),
  },
}));

export const CustomSlider: React.FC<any> = (props) => {
  const { items,heading } = props;
  return (
    <Carousel interval={35000} animation="slide" indicators={false} autoPlay={false}>
      {
        //@ts-ignore
        items.map((item, i) => (
          <Item key={i} item={item} heading={heading} />
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
        {props.heading}
      </Typography>
      <Grid container spacing={5} style={{margin:"0px auto"}}>
        {props.item.map((one: any,index:number) => (
          <Grid item className={classes.posterCard} key={index}>
            <Grid container direction="row" >
              <Grid item>
                <img
                className={classes.imagePoster}
                src={`https://image.tmdb.org/t/p/w500/${one.poster_path}`}
                alt={props.item.title}
              ></img>
              </Grid>
              <Grid item xs={12}>
              {
              one.hasOwnProperty('title')?(
                <div style={{overflow: "hidden", textOverflow: "ellipsis", }}> 
                {/* @ts-ignore */}
                  <Typography className={classes.posterTitle}>
                  {one.title}
                  </Typography>
              </div>
                // <h3>{one.title}</h3>
              ):(
                <div style={{overflow: "hidden", textOverflow: "ellipsis", }}> 
                {/* @ts-ignore */}
                  <Typography className={classes.posterTitle}>
                  {one.name}
                  </Typography>
              </div>
              )
            }
              </Grid>
              <Grid item>
              <Typography variant="subtitle1" className={classes.posterReleaseDate}>Releasing Date:{one.release_date} </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Grid item style={{marginTop:"5px"}}>IMDB Rating: {one.vote_average}</Grid>
                  <Grid item style={{margin:"3px"}}><StarIcon style={{color:"#FED136"}} fontSize="small"/></Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                style={{marginLeft:"50%"}}
                >
                  <Grid item >
                    <Tooltip title="ADD TO WISHLIST">
                  <Fab
                    color="default"
                    className={classes.fabAddButton}
                  >
                    <AddIcon/>
                  </Fab>
                  </Tooltip>
                  </Grid>
                  <Grid item >
                  <Tooltip title="WATCH NOW">
                  <Fab
                    color="primary"
                    className={classes.fabPlayButton}
                  >
                    <PlayArrowIcon/>
                  </Fab>
                  </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
