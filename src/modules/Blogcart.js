import React from 'react';
import '../App.css'

function BlogCard({ title, date, venue, speakers, description, imageSrc }) {
  return (
    <div className="card">
      <div className="pic">
        <img className="cardimg" src={imageSrc} alt="not possible" />
      </div>
      <div className="head">
        <h2>{title}</h2>
        <h3 className="date">{date}</h3>
        <h3 className="vanue">{venue}</h3>
      </div>
      <div className="headdesc">
        <p className="para1">{speakers}</p>
        <p className="para2">{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
