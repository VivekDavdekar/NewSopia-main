import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from "./NewsItems";

const SearchResults = ({ apiKey, setProgress }) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchSearchResults = useCallback(
        async (pageNum = 1) => {
            if (!query) return;
            setLoading(true);
            try {
                setProgress(10);
                const url = `https://newsapi.org/v2/everything?qInTitle=${query}&language=en&sortBy=publishedAt&page=${pageNum}&pageSize=9&apiKey=${apiKey}`;
                const response = await fetch(url);
                setProgress(40);
                const parsedData = await response.json();
                if (pageNum === 1) {
                    setArticles(parsedData.articles || []);
                } else {
                    setArticles((prev) => [...prev, ...(parsedData.articles || [])]);
                }
                setTotalResults(parsedData.totalResults || 0);
                setProgress(80);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
                setProgress(100);
            }
        },
        [query, apiKey, setProgress]
    );

    useEffect(() => {
        setArticles([]);
        setPage(1);
        fetchSearchResults(1);
    }, [fetchSearchResults]);

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        await fetchSearchResults(nextPage);
        setPage(nextPage);
    };

    return (
        <div className="container my-4" style={{ backgroundColor: "white" }}>
            <h2
                className="search-title fw-bold text-center"
                style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "2rem",
                    marginTop: "80px",
                    marginBottom: "20px",
                }}
            >
                Search Results for <span className="highlight-query">“{query}”</span>
            </h2>

            {loading && page === 1 ? (
                <div className="loading-spinner"></div>
            ) : (
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<div className="loading-spinner"></div>}
                    style={{ overflow: "visible" }}
                >
                    <div className="row fade-in">
                        {articles.length > 0 ? (
                            articles.map((element, index) => (
                                <div
                                    className="col-md-4 d-flex align-items-stretch mb-4"
                                    key={index}
                                    style={{ textAlign: "left" }}
                                >
                                    <NewsItems
                                        title={element.title ? element.title.slice(0, 70) : ""}
                                        description={
                                            element.description
                                                ? element.description.slice(0, 120)
                                                : ""
                                        }
                                        imgUrl={element.urlToImage}
                                        newUrl={element.url}
                                        author={element.author || "Unknown"}
                                        date={new Date(element.publishedAt).toGMTString()}
                                        source={element.source.name}
                                    />
                                </div>
                            ))
                        ) : (
                            <h5 className="no-results text-center">
                                No articles found for “{query}”.
                            </h5>
                        )}
                    </div>
                </InfiniteScroll>
            )}

            <p className="credits-line text-center">
                Crafted with ❤️ by <strong>Vivek Davdekar</strong>
            </p>
        </div>
    );
};

export default SearchResults;
