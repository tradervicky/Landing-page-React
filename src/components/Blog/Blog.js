import React, { useState } from "react";
import "./Blog.css";
import BlogCard from "./BlogCard";
function Blog() {
  return (
    <div className="blog-main">
      <div className="blog-upper">
        <h4>Blog</h4>
        <h1>
          We Love <span>Writing.</span>
        </h1>
        <p>
          Some amazing blog posts that are written by even more 
          amazing people.
        </p>
      </div>
      <div className="blog-cards">
        <BlogCard name="Adam Wathan" company="SEO" imges="/media/1.jpg" black="Optimizing your website for your main keyword"/>
        <BlogCard name="Adam Wathan" company="SEO" imges="/media/2.jpg" black="Creating The perfect advertisement campaign"/>
        <BlogCard name="Adam Wathan" company="SEO" imges="/media/3.jpg" black="Efficient management of your social media assets"/>

      </div>

    </div>
  );
}

export default Blog;
