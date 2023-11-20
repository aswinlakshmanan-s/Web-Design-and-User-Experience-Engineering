import React from 'react';
import "./Card.css";

function Card(props) {
  return (
    <div >
      <div style={{height: props.galleryStyle}} className="gallery">
        <img src={`images/` + props.src} style={{height: props.imageStyle}} alt="Mountains" width="250" height="250" />
        <div className="desc">
          <h4>{props.title}</h4><button className="add">{props.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default Card