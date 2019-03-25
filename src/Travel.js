import React from "react";

const Quote = props => ( <
  figure >
  <
  img src = {
    props.image
  }
  alt = {
    props.destination
  }
  /> <
  figcaption >
  <
  blockquote > {
    props.destination
  } < /blockquote> <
  blockquote > {
    props.country
  } < /blockquote> <
  blockquote > {
    props.distance
  } < /blockquote> < /
  figcaption > <
  /figure>
);

export default Quote;