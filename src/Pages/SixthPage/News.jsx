 import React from "react";
import NewsFilter from "./NewsFilter";
import NewsFeatured from "./NewsFeatured";
import NewsGrid from "./NewsGrid";
import NewsLifestyle from "./NewsLifestyle";
import NewsThreeCards from "./NewsThreeCards";

const News = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-6">
      <NewsFilter />
      <NewsFeatured />
      <NewsGrid />
      <NewsLifestyle />
      <NewsThreeCards />
    </div>
  );
};

export default News;