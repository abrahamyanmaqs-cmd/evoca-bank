import React from "react";
 
import BlogFeatured from "./BlogFeatured";
import BlogGrid from "./BlogGrid";
import BlogNewYear from "./BlogNewYear";
import BlogThreeCards from "./BlogThreeCards";
import BlogHeroBanner from "./BlogHeroBanner";

const Blog = () => {
  return (
    <div className="w-full  font-sans min-h-screen py-6">
 
      <BlogFeatured />
      <BlogGrid />
      <BlogNewYear />
      <BlogThreeCards />
      <BlogHeroBanner />
    </div>
  );
};

export default Blog;