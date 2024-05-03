import React from "react";
import "../App.css";

function BlogCard({ title, date, venue, speakers, description, imageSrc }) {
  return (
    <div className="card">
      <div className="pic">
        <img className="cardimg" src={imageSrc} alt="not possible" />
        <div className="head">
          <h2>{title}</h2>
          
        </div>
      </div>
      <div className="headdesc">
      <h3 className="date">{date}   Vanue-       {venue}</h3>
      <h3 className="vanue"></h3>
        <p className="para1">{speakers}</p>
        <p className="para2">{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
