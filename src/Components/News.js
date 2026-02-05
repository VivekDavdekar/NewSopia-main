import NewsItems from "./NewsItems";
import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, apiKey, pageSize, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  useEffect(() => {
    document.title = `Newsopia - ${category === "general" ? "Top" : capitalizeFirstLetter(category)
      } Headlines`;
  }, [category]);

  const updateNews = useCallback(async () => {
    setProgress(10);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
    const data = await fetch(url);
    setProgress(70);
    const parsedData = await data.json();
    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
    setProgress(100);
  }, [country, category, apiKey, pageSize, setProgress]);

  useEffect(() => {
    updateNews();
    setPage(1);
  }, [updateNews]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles((prevArticles) => prevArticles.concat(parsedData.articles || []));
    setTotalResults(parsedData.totalResults || 0);
  };

  return (
    <div className="container my-3">
      <h1
        className="text-center"
        style={{
          marginTop: "70px",
          marginBottom: "",
          fontFamily: "Ariel",
          fontSize: "3rem",
        }}
      >
        Newsopia - {category === "general" ? "Top" : capitalizeFirstLetter(category)} Headlines
      </h1>
      {loading && <div className="loading-spinner"></div>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<div className="loading-spinner"></div>}
      >
        <div className="row my-5 mx-4">
          {Array.isArray(articles) &&
            articles.map((element) => (
              <div key={element.url} className="col-md-4 mb-4">
                <NewsItems
                  title={element.title ? element.title.slice(0, 39) : ""}
                  description={element.description ? element.description.slice(0, 70) : ""}
                  imgUrl={element.urlToImage}
                  newUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={new Date(element.publishedAt).toGMTString()}
                  source={element.source?.name}
                />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
