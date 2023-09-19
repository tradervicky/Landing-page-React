import React from "react";

function BlogCard(props) {
  return (
    <div className="blog-card-1">
      <img src={props.imges} alt="image" className="top-blog-img" />


      <div className="blog-text-main">
        <div className="blog-card-head-author">
          <div className="blog-card-author">
            <img src="/media/person.svg" alt="" />
            <span>{props.name}</span>
          </div>

          <div className="blog-card-author">
            <img src="/media/tag.svg" alt="person-tag" />
            <span>{props.company}</span>
          </div>
        </div>
        <h2>{props.black}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="blog-btn">Read Post</button>
      </div>
    </div>
  );
}

export default BlogCard;
