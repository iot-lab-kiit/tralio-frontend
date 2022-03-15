import React from "react";
import PropTypes from "prop-types";
function Image(props) {
  return (
    <>
      <div className="Feature">
        <img className="ImgFeature" src={props.Source} alt="" />
        <h2>{props.heading}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  );
}
