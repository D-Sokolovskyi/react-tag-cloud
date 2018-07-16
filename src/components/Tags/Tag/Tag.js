import React from "react";
import { Link } from "react-router-dom";
import classes from "./Tag.css";

const tags = props => {

  console.log(Math.log(props.sentimentScore)/1 + 1/3 + 'em',)

  const calculatedStyles = {
    fontSize: Math.round(props.sentimentScore/2.5) + Math.round(100/props.sentimentScore) + 'px',
    color: `hsl(225, 100%, ${(100 - props.sentimentScore/2)}%)`
  };

  return (
    <Link
      style={calculatedStyles}
      to={"#" + props.id}
      className={classes.Tag}
      onClick={props.onItemClick}>
      {props.label}
    </Link>
  );
};

export default tags;
