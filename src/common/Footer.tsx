import React from "react";
// @ts-ignore
import {
  Paper,makeStyles,Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#253053",
    height:"80px"
  },
 
}));

export const Footer: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}></Paper>
   );
};
